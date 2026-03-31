import { createRestaurantHomePage } from "./Brain.js";

function initializeHeroImages() {
  const body = document.body;
  const firstHeroImage = document.querySelector(".hero-image.is-primary");

  if (!body || !firstHeroImage) {
    return;
  }

  const markHeroReady = () => {
    body.classList.add("hero-ready");
  };

  if (firstHeroImage.complete && firstHeroImage.naturalWidth > 0) {
    markHeroReady();
    return;
  }

  firstHeroImage.addEventListener("load", markHeroReady, { once: true });
  firstHeroImage.addEventListener("error", markHeroReady, { once: true });
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
