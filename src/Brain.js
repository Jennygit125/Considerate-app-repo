export function createRestaurantHomePage() {
  const content = document.getElementById("content");
  const htmlCode =
    "<h1>Welcome to our restaurant</h1><p>Best food in town just for you!</p>";

  if (content) {
    content.innerHTML = htmlCode;
    console.log("Home page function executed");
  } else {
    console.error("Element with ID 'content' not found");
  }
}

export const pageRenderers = {
  home: createRestaurantHomePage,
};

export function notifyMissingPage(pageName) {
  const message = `${pageName} page not generated.`;

  if (typeof window !== "undefined" && typeof window.alert === "function") {
    window.alert(message);
    return;
  }

  console.warn(message);
}
