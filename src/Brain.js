function renderPage(title, description, content) {
  const contentDiv = document.getElementById("pasta");

  if (contentDiv) {
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading.textContent = title;
    paragraph.textContent = description;
    contentDiv.replaceChildren(heading, paragraph);
    if (content) {
      if (typeof content === 'string') {
        const div = document.createElement('div');
        div.innerHTML = content;
        contentDiv.appendChild(div);
      } else {
        contentDiv.appendChild(content);
      }
    }
    return true;
  }

  console.error("Element with ID 'pasta' not found");
  return false;
}

const menuData = {
  foodItems: [
    { name: "Food Menu 01", price: "$15", desc: "Classic pasta with fresh herbs and olive oil." },
    { name: "Food Menu 02", price: "$20", desc: "Creamy carbonara with aged parmesan and bacon." },
    { name: "Food Menu 03", price: "$35", desc: "Seafood linguine with shrimp, clams, and white wine sauce." },
    { name: "Food Menu 04", price: "$40", desc: "Homemade ravioli filled with ricotta and spinach." },
    { name: "Food Menu 05", price: "$55", desc: "Premium ribeye steak with garlic butter and seasonal vegetables." },
    { name: "Food Menu 06", price: "$15", desc: "Vegetarian risotto with wild mushrooms and truffle oil." },
    { name: "Food Menu 07", price: "$15", desc: "Wood-fired pizza with fresh mozzarella and basil." },
  ],
  drinkItems: [
    { name: "Drink Menu 01", price: "$10", desc: "Fresh-squeezed orange juice with sparkling water." },
    { name: "Drink Menu 02", price: "$15", desc: "Homemade lemonade made with fresh lemons." },
    { name: "Drink Menu 03", price: "$20", desc: "Signature house wine blend from Italian vineyards." },
    { name: "Drink Menu 04", price: "$25", desc: "Premium Italian espresso-based cappuccino." },
    { name: "Drink Menu 05", price: "$30", desc: "Craft Italian margarita with premium tequila." },
    { name: "Drink Menu 06", price: "$35", desc: "Imported San Pellegrino sparkling water selection." },
    { name: "Drink Menu 07", price: "$40", desc: "Reserve Italian wine collection with sommelier recommendations." },
  ],
};

function buildMenuHTML() {
  const menuHTML = `
    <div class="menu-container">
      <div class="header">
        <div class="main-title">Mija's Pasta</div>
        <div class="divider"></div>
      </div>
      <div class="menu-columns">
        <div class="column-divider"></div>
        <div class="column">
          <h2 class="section-title">Food Menu</h2>
          ${menuData.foodItems.map(item => `
            <div class="menu-item">
              <div class="item-header">
                <span>${item.name}</span>
                <span class="dots"></span>
                <span>${item.price}</span>
              </div>
              <div class="description">${item.desc}</div>
            </div>
          `).join('')}
        </div>
        <div class="column">
          <h2 class="section-title">Drink Menu</h2>
          ${menuData.drinkItems.map(item => `
            <div class="menu-item">
              <div class="item-header">
                <span>${item.name}</span>
                <span class="dots"></span>
                <span>${item.price}</span>
              </div>
              <div class="description">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="footer-address">
        123 Anywhere ST., Any City, ST 12345
      </div>
    </div>
  `;
  return menuHTML;
}

export function createRestaurantHomePage() {
  if (
    renderPage(
      "Welcome to our restaurant",
      "Best food in town just for you!",
    )
  ) {
    console.log("Home page function executed");
  }
}
export function createRestaurantMenuPage() {
  if (
    renderPage(
      "Our Menu",
      "Check out our delicious dishes!",
      buildMenuHTML(),
    )
  ) {
    console.log("Menu page function executed");
  }
}
export function createRestaurantContactPage() {
  const contactContent = `
    <div class="contact-info">
      <div class="contact-item">
        <strong>Email:</strong> bakreeniola2@gmail.com
      </div>
      <div class="contact-item">
        <strong>Phone:</strong> 08111321606
      </div>
      <div class="contact-item">
        <strong>Address:</strong> 123 Anywhere ST., Any City, ST 12345
      </div>
    </div>
  `;
  if (
    renderPage(
      "Contact Us",
      "Get in touch with us!",
      contactContent,
    )
  ) {
    console.log("Contact page function executed");
  }
}

export const pageRenderers = {
  home: createRestaurantHomePage,
  menu: createRestaurantMenuPage,
  contact: createRestaurantContactPage,
};

export function notifyMissingPage(pageName) {
  const message = `${pageName} page not generated.`;

  if (renderPage(pageName, message)) {
    return;
  }

  console.warn(message);
}