// Define your grocery products
const baseProducts = [
  { name: "Rice 1kg", description: "Premium well-milled rice", base: 58 },
  { name: "Eggs (Tray, 30 pcs)", description: "Fresh farm eggs", base: 205 },
  { name: "Cooking Oil 1L", description: "Vegetable oil for frying", base: 99 },
  { name: "Sardines", description: "155g canned sardines", base: 18 },
  { name: "Instant Noodles", description: "Beef/Chicken flavor", base: 10 },
  { name: "Sugar 1kg", description: "Refined white sugar", base: 52 },
  { name: "Salt 500g", description: "Iodized table salt", base: 10 },
  { name: "Soy Sauce 250ml", description: "All-around sawsawan", base: 22 },
  { name: "Coffee 3-in-1 (10 sachets)", description: "Strong and creamy", base: 49 },
  { name: "Detergent Powder 500g", description: "For handwashing/laundry", base: 36 },
  { name: "Toilet Paper (2 rolls)", description: "Soft 2-ply bathroom tissue", base: 30 },
  { name: "Bath Soap", description: "Antibacterial bath soap", base: 21 },
  { name: "Shampoo Sachets (6 pcs)", description: "Anti-dandruff or silky", base: 34 },
  { name: "Dishwashing Liquid 250ml", description: "Cuts grease fast", base: 28 },
  { name: "Bread Loaf", description: "Sliced tasty white bread", base: 55 },
  { name: "Cheese Spread 220g", description: "Creamy & cheesy", base: 49 },
  { name: "Peanut Butter 250g", description: "Smooth or crunchy", base: 58 },
  { name: "Canned Tuna", description: "155g flakes in oil", base: 33 },
  { name: "Vinegar 250ml", description: "Cane vinegar", base: 18 },
  { name: "Bottled Water 1L", description: "Purified drinking water", base: 18 }
];

// Apply markup of ₱3.69 to each product
const products = baseProducts.map(item => ({
  name: item.name,
  description: item.description,
  price: item.base + 3.69
}));

// Render product grid
function renderProducts() {
  const grid = document.getElementById('product-list');
  grid.innerHTML = '';
  products.forEach((item, index) => {
    grid.innerHTML += `
      <div class="card" data-name="${item.name.toLowerCase()}">
        <h4>${item.name}</h4>
        <p class="description">${item.description}</p>
        <p><strong>₱${item.price.toFixed(2)}</strong></p>
        <div class="qty-controls">
          <button onclick="decreaseQty(${index})">-</button>
          <span id="qty-${index}">0</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
      </div>
    `;
  });
}

// Cart logic
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
  document.getElementById('cart-count').innerText = Object.values(cart).reduce((a, b) => a + b.qty, 0);
  updateCartSummary();
  validateForm?.();
}

function updateCartSummary() {
  let html = `
    <h2 style="text-align: center;">🧾 Receipt Summary</h2>
    <p style="text-align: center;">Dala🚲Na Grocery</p><ul style="list-style: none; padding: 0;">`;
  let total = 0;
  Object.values(cart).forEach(item => {
    html += `<li><strong>${item.qty}x</strong> ${item.name} <span style="float:right">₱${(item.qty * item.price).toFixed(2)}</span></li>`;
    total += item.qty * item.price;
  });
  const fee = 29.99;
  const grand = total + fee;
  html += `</ul><hr><p><strong>Subtotal:</strong> <span style="float:right;">₱${total.toFixed(2)}</span></p>
    <p><strong>Service Fee:</strong> <span style="float:right;">₱${fee.toFixed(2)}</span></p>
    <hr><h3 style="text-align:center;">Total: ₱${grand.toFixed(2)}</h3>`;
  document.getElementById('cart-summary').innerHTML = html;
}

// Filter/search
function filterProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const name = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = name.includes(input) ? '' : 'none';
  });
}

// Auto fill delivery date/time
function autoFillDeliveryTime() {
  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60000);
  document.getElementById('delivery-date').value = now.toISOString().split('T')[0];
  document.getElementById('delivery-time').value = oneHourLater.toTimeString().slice(0, 5);
}
