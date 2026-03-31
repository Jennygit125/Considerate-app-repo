import { createRestaurantHomePage } from "./Brain.js";

export function initialLoad() {
  // This function will be called when the page loads
  console.log("Page has loaded. Initializing application...");
  // You can add any initialization code here, such as setting up event listeners,
  // fetching initial data, or rendering the initial UI.
  createRestaurantHomePage();
}
export default initialLoad;
