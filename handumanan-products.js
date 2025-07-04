// 🛒 Handumanan Grocery Product List with 3.69 markup
const rawProducts = [
  { name: "Sinandomeng Rice 5kg", description: "Premium local white rice", base: 290 },
  { name: "Lucky Me Pancit Canton", description: "Instant noodles original flavor (per pack)", base: 14 },
  { name: "Silver Swan Soy Sauce 1L", description: "All-around soy sauce for cooking", base: 45 },
  { name: "Mighty Canned Sardines", description: "Packed with tomato sauce (155g)", base: 18 },
  { name: "Argentina Corned Beef 150g", description: "Ready-to-eat beef in a can", base: 42 },
  { name: "Tender Juicy Hotdog 1kg", description: "Kids’ favorite red hotdogs", base: 168 },
  { name: "Gardenia Bread Classic", description: "Soft white loaf bread", base: 58 },
  { name: "Bear Brand Powdered Milk 150g", description: "Nutritious milk drink", base: 50 },
  { name: "Nescafe Classic 50g", description: "Instant coffee jar", base: 78 },
  { name: "Surf Powder Detergent 1kg", description: "For clean and fresh laundry", base: 68 },
  { name: "Safeguard Soap 90g", description: "Germ-protection bath soap", base: 24 },
  { name: "Family Toothpaste 150g", description: "Fluoride toothpaste for daily use", base: 38 },
  { name: "Biogenic Alcohol 250ml", description: "70% solution for disinfection", base: 38 },
  { name: "Milo Chocolate Drink 240g", description: "Energy drink for kids", base: 58 },
  { name: "Fita Crackers (per pack)", description: "Snack crackers perfect for merienda", base: 9 },
  { name: "Rebisco Hansel Mocha", description: "Mocha sandwich biscuits", base: 10 },
  { name: "Century Tuna Flakes in Oil 180g", description: "Healthy tuna protein source", base: 48 },
  { name: "Datu Puti Vinegar 750ml", description: "Sukang maasim for sawsawan", base: 28 },
  { name: "Ajinomoto Seasoning 250g", description: "For tastier meals", base: 36 },
  { name: "Purefoods Corned Beef 210g", description: "Premium corned beef", base: 66 }
];

// Apply markup of 3.69
const products = rawProducts.map(p => ({
  name: p.name,
  description: p.description,
  price: +(p.base * 3.69).toFixed(2)
}));

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((item, index) => {
    list.innerHTML += `
      <div class="card" data-name="${item.name.toLowerCase()}">
        <h4>${item.name}</h4>
        <p class="description">${item.description}</p>
        <p><strong>₱${item.price.toFixed(2)}</strong></p>
        <div class="qty-controls">
          <button onclick="decreaseQty(${index})">-</button>
          <span id="qty-${index}">0</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
      </div>`;
  });
}

function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const name = card.querySelector("h4").textContent.toLowerCase();
    if (name.includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
} 

function autoFillDeliveryTime() {
  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60000);
  document.getElementById("delivery-date").value = now.toISOString().split("T")[0];
  document.getElementById("delivery-time").value = oneHourLater.toTimeString().slice(0, 5);
}

function increaseQty(i) {
  const item = products[i];
  if (!cart[item.name]) cart[item.name] = { ...item, qty: 0 };
  cart[item.name].qty++;
  updateQty(i);
}

function decreaseQty(i) {
  const item = products[i];
  if (cart[item.name]) {
    cart[item.name].qty--;
    if (cart[item.name].qty <= 0) delete cart[item.name];
  }
  updateQty(i);
}

function updateQty(i) {
  const item = products[i];
  const qty = cart[item.name]?.qty || 0;
  document.getElementById(`qty-${i}`).innerText = qty;
  document.getElementById("cart-count").innerText = Object.values(cart).reduce((a, b) => a + b.qty, 0);
  updateCartSummary();
}
