import {
  createRestaurantHomePage,
  notifyMissingPage,
  pageRenderers,
} from "./Brain.js";

function initializeNavigation() {
  const navigationTargets = [
    { id: "logo-btn", pageName: "home", label: "Home" },
    { id: "home-btn", pageName: "home", label: "Home" },
    { id: "menu-btn", pageName: "menu", label: "Menu" },
    { id: "contact-btn", pageName: "contact", label: "Contact" },
  ];

  navigationTargets.forEach(({ id, pageName, label }) => {
    const button = document.getElementById(id);

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const renderPage = pageRenderers[pageName];

      if (typeof renderPage === "function") {
        renderPage();
        return;
      }

      notifyMissingPage(label);
    });
  });
}

function initializeHeroImages() {
  const body = document.body;
  const firstHeroImage = document.querySelector(".hero-image.is-primary");
  const secondaryHeroImages = Array.from(document.querySelectorAll(
    ".hero-image:not(.is-primary)",
  ));
  const canMatchMedia = typeof window.matchMedia === "function";
  const prefersReducedMotion = canMatchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
  const shouldRunCarousel = !prefersReducedMotion;

  if (!body || !firstHeroImage) {
    return;
  }

  const activateFallbackImage = () => {
    const fallbackImage = secondaryHeroImages[0];

    if (!fallbackImage) {
      return null;
    }

    const dataSource = fallbackImage.getAttribute("data-src");

    if (dataSource && !fallbackImage.getAttribute("src")) {
      fallbackImage.setAttribute("src", dataSource);
    }

    fallbackImage.setAttribute("loading", "eager");
    fallbackImage.setAttribute("fetchpriority", "high");
    fallbackImage.removeAttribute("aria-hidden");
    fallbackImage.classList.add("is-primary");
    fallbackImage.style.animationDelay = "0s";

    firstHeroImage.classList.remove("is-primary");
    firstHeroImage.setAttribute("aria-hidden", "true");
    firstHeroImage.style.display = "none";

    return fallbackImage;
  };

  if (!shouldRunCarousel) {
    if (firstHeroImage.complete && firstHeroImage.naturalWidth === 0) {
      activateFallbackImage();
    } else {
      firstHeroImage.addEventListener("error", activateFallbackImage, {
        once: true,
      });
    }

    body.classList.add("hero-static");
    return;
  }

  const startCarousel = () => {
    secondaryHeroImages.forEach((image) => {
      const dataSource = image.getAttribute("data-src");
      const isPrimaryImage = image.classList.contains("is-primary");

      if (dataSource) {
        image.setAttribute("loading", isPrimaryImage ? "eager" : "lazy");
        image.setAttribute("fetchpriority", isPrimaryImage ? "high" : "low");
        image.setAttribute("src", dataSource);
      }
    });

    body.classList.add("hero-carousel");
  };

  const handlePrimaryImageError = () => {
    const fallbackImage = activateFallbackImage();

    if (!fallbackImage) {
      body.classList.add("hero-static");
      return;
    }

    startCarousel();
  };

  if (firstHeroImage.complete && firstHeroImage.naturalWidth > 0) {
    startCarousel();
    return;
  }

  if (firstHeroImage.complete && firstHeroImage.naturalWidth === 0) {
    handlePrimaryImageError();
    return;
  }

  firstHeroImage.addEventListener("load", startCarousel, { once: true });
  firstHeroImage.addEventListener("error", handlePrimaryImageError, {
    once: true,
  });
}

export function initialLoad() {
  // This function will be called when the page loads
  console.log("Page has loaded. Initializing application...");
  // You can add any initialization code here, such as setting up event listeners,
  // fetching initial data, or rendering the initial UI.
  initializeNavigation();
  createRestaurantHomePage();
  initializeHeroImages();
}
export default initialLoad;
