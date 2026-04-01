import { cpSync, existsSync, mkdirSync, watch } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const distDir = path.join(rootDir, "dist");
const require = createRequire(import.meta.url);
const webpack = require("webpack");
const baseWebpackConfig = require(path.join(rootDir, "webpack.config.js"));
const isWatchMode = process.argv.includes("--watch");
const modeFlagIndex = process.argv.indexOf("--mode");
const mode = modeFlagIndex >= 0 ? process.argv[modeFlagIndex + 1] : "production";
const webpackConfig = {
  ...baseWebpackConfig,
  mode,
};

function ensurePublicDir() {
  if (!existsSync(publicDir)) {
    console.error("Missing public directory. Expected site assets in ./public.");
    process.exit(1);
  }
}

function copyPublicAssets() {
  ensurePublicDir();
  mkdirSync(distDir, { recursive: true });
  cpSync(publicDir, distDir, { force: true, recursive: true });
}

function reportBuildResult(error, stats) {
  if (error) {
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return false;
  }

  if (stats) {
    const output = stats.toString({ colors: true });

    if (output) {
      console.log(output);
    }
  }

  return !stats?.hasErrors();
}

function createPublicWatcher(onChange) {
  try {
    return watch(publicDir, { recursive: true }, onChange);
  } catch (error) {
    console.warn("Static asset watching is unavailable:", error.message);
    return null;
  }
}

function buildOnce() {
  ensurePublicDir();

  const compiler = webpack(webpackConfig);
  compiler.run((error, stats) => {
    const buildSucceeded = reportBuildResult(error, stats);

    if (buildSucceeded) {
      copyPublicAssets();
    }

    compiler.close(() => {
      process.exit(buildSucceeded ? 0 : 1);
    });
  });
}

function watchBuild() {
  ensurePublicDir();

  const compiler = webpack(webpackConfig);
  let copyTimer;
  const scheduleCopy = () => {
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      copyPublicAssets();
    }, 50);
  };
  const publicWatcher = createPublicWatcher(() => {
    scheduleCopy();
  });
  const watching = compiler.watch({}, (error, stats) => {
    const buildSucceeded = reportBuildResult(error, stats);

    if (buildSucceeded) {
      scheduleCopy();
      return;
    }

    process.exitCode = 1;
  });
  const closeWatchers = () => {
    publicWatcher?.close();
    clearTimeout(copyTimer);
    watching.close(() => {
      process.exit();
    });
  };

  process.on("SIGINT", closeWatchers);
  process.on("SIGTERM", closeWatchers);
}

if (isWatchMode) {
  watchBuild();
} else {
  buildOnce();
}
