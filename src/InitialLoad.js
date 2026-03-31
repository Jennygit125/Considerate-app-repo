import { createRestaurantHomePage } from "./Brain.js";

function initializeHeroImages() {
  const body = document.body;
  const firstHeroImage = document.querySelector(".hero-image.is-primary");
  const secondaryHeroImages = document.querySelectorAll(
    ".hero-image:not(.is-primary)",
  );
  const canMatchMedia = typeof window.matchMedia === "function";
  const prefersDesktopLayout = canMatchMedia
    ? window.matchMedia("(min-width: 769px)").matches
    : true;
  const prefersReducedMotion = canMatchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
  const shouldRunCarousel = prefersDesktopLayout && !prefersReducedMotion;

  if (!body || !firstHeroImage) {
    return;
  }

  if (!shouldRunCarousel) {
    body.classList.add("hero-static");
    return;
  }

  const startCarousel = () => {
    secondaryHeroImages.forEach((image) => {
      const dataSource = image.getAttribute("data-src");

      if (dataSource) {
        image.setAttribute("loading", "lazy");
        image.setAttribute("fetchpriority", "low");
        image.setAttribute("src", dataSource);
      }
    });

    body.classList.add("hero-carousel");
  };

  if (firstHeroImage.complete && firstHeroImage.naturalWidth > 0) {
    startCarousel();
    return;
  }

  firstHeroImage.addEventListener("load", startCarousel, { once: true });
  firstHeroImage.addEventListener("error", startCarousel, { once: true });
}

export function initialLoad() {
  // This function will be called when the page loads
  console.log("Page has loaded. Initializing application...");
  // You can add any initialization code here, such as setting up event listeners,
  // fetching initial data, or rendering the initial UI.
  createRestaurantHomePage();
  initializeHeroImages();
}
export default initialLoad;
