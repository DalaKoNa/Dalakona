// dalacart.js

let cart = [];

function addToCart(product) {
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  updateCartUI();
}

function updateCartUI() {
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) cartIcon.innerHTML = `🛒${cartCount}`;

  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <strong>${item.name}</strong> x${item.qty} - ₱${subtotal.toFixed(2)}
      <button onclick="removeFromCart('${item.name}')">❌</button>
    `;
    cartItems.appendChild(div);
  });

  const vat = total * 0.12;
  const serviceFee = 14.99;
  const grandTotal = total + vat + serviceFee;

  document.getElementById('cart-total').innerHTML = `
    <p>Subtotal: ₱${total.toFixed(2)}</p>
    <p>VAT (12%): ₱${vat.toFixed(2)}</p>
    <p>Service Fee: ₱${serviceFee.toFixed(2)}</p>
    <hr />
    <strong>Total: ₱${grandTotal.toFixed(2)}</strong>
  `;

  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.disabled = cart.length === 0;
}

// Slide in/out logic
const cartOverlay = document.getElementById('cart-overlay');
const cartPanel = document.getElementById('cart-panel');

function openCart() {
  cartOverlay.style.display = 'flex';
  setTimeout(() => cartPanel.classList.add('show'), 10);
}

function closeCart() {
  cartPanel.classList.remove('show');
  setTimeout(() => cartOverlay.style.display = 'none', 300);
}

// Attach openCart to cart icon
const cartIcon = document.querySelector('.cart-icon');
if (cartIcon) cartIcon.addEventListener('click', openCart);

// Attach closeCart to overlay click
if (cartOverlay) cartOverlay.addEventListener('click', (e) => {
  if (e.target === cartOverlay) closeCart();
});
