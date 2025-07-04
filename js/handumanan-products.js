const markup = 3.69;

const groceryProducts = {
  "Rice & Grains": [
    { name: "Dinorado Rice 1kg", description: "Premium long-grain white rice", price: 68 + markup },
    { name: "Brown Rice 1kg", description: "Healthy unpolished rice option", price: 74 + markup }
  ],
  "Canned Goods": [
    { name: "Sardines in Tomato Sauce", description: "155g, regular flavor", price: 19 + markup },
    { name: "Corned Beef 150g", description: "Ready to eat, easy-open can", price: 41 + markup }
  ],
  "Noodles & Pasta": [
    { name: "Instant Pancit Canton", description: "Sweet & Spicy variant", price: 17 + markup },
    { name: "Elbow Macaroni 250g", description: "Perfect for pasta dishes", price: 29 + markup }
  ],
  "Condiments & Sauces": [
    { name: "Soy Sauce 350ml", description: "Patis Choice Brand", price: 12 + markup },
    { name: "Banana Ketchup 320g", description: "Sweet and kid-friendly", price: 21 + markup }
  ],
  "Snacks": [
    { name: "Piattos Cheese 85g", description: "Crunchy cheesy potato crisps", price: 34 + markup },
    { name: "Skyflakes (pack of 3)", description: "Classic plain crackers", price: 18 + markup }
  ]
};

const cart = {};

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  for (const category in groceryProducts) {
    const section = document.createElement("div");
    section.className = "category-section";

    const heading = document.createElement("h3");
    heading.textContent = category;
    heading.style.marginTop = "1.5rem";
    heading.style.marginBottom = "0.5rem";
    heading.style.borderBottom = "1px solid #ccc";
    heading.style.paddingBottom = "0.25rem";
    section.appendChild(heading);

    groceryProducts[category].forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "list-style-item";
      row.style.marginBottom = "1rem";

      row.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>${item.name}</strong>
          <div style="display: flex; align-items: center;">
            <button onclick="decreaseQty('${category}', ${index})">-</button>
            <span style="margin: 0 0.5rem;" id="qty-${category}-${index}">0</span>
            <button onclick="increaseQty('${category}', ${index})">+</button>
          </div>
        </div>
        <div style="font-size: 0.85rem; color: #555;">${item.description}</div>
        <div style="font-size: 0.9rem;">₱${item.price.toFixed(2)}</div>
      `;
      section.appendChild(row);
    });

    list.appendChild(section);
  }
}

function increaseQty(cat, i) {
  const item = groceryProducts[cat][i];
  if (!cart[item.name]) cart[item.name] = { ...item, qty: 0 };
  cart[item.name].qty++;
  updateQty(cat, i);
}

function decreaseQty(cat, i) {
  const item = groceryProducts[cat][i];
  if (cart[item.name]) {
    cart[item.name].qty--;
    if (cart[item.name].qty <= 0) delete cart[item.name];
  }
  updateQty(cat, i);
}

function updateQty(cat, i) {
  const item = groceryProducts[cat][i];
  const qty = cart[item.name]?.qty || 0;
  document.getElementById(`qty-${cat}-${i}`).textContent = qty;
  document.getElementById("cart-count").textContent = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  updateCartSummary();
  validateForm?.();
}

function updateCartSummary() {
  let html = `<h2 style="text-align:center;">🧾 Receipt Summary</h2><ul style="list-style:none;padding:0;">`;
  let subtotal = 0;

  Object.values(cart).forEach(item => {
    html += `<li><strong>${item.qty}x</strong> ${item.name} <span style="float:right;">₱${(item.qty * item.price).toFixed(2)}</span></li>`;
    subtotal += item.qty * item.price;
  });

  const serviceFee = 29.99;
  const total = subtotal + serviceFee;

  html += `
    </ul><hr>
    <p><strong>Subtotal:</strong> <span style="float:right;">₱${subtotal.toFixed(2)}</span></p>
    <p><strong>Service Fee:</strong> <span style="float:right;">₱${serviceFee.toFixed(2)}</span></p>
    <hr><h3 style="text-align:center;">Total: ₱${total.toFixed(2)}</h3>
  `;

  const summary = document.getElementById("cart-summary");
  if (summary) summary.innerHTML = html;
}
