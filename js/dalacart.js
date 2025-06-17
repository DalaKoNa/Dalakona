let cart = [];

function addToCart(product) {
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartDisplay();
  openCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const cartIcon = document.querySelector('.cart-icon');

  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      ${item.name} x ${item.quantity} - ₱${itemTotal.toFixed(2)}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItemsContainer.appendChild(el);
  });

  const vat = subtotal * 0.12;
  const serviceFee = 29.99;
  const total = subtotal + vat + serviceFee;

  cartTotal.innerHTML = `
    <p>Subtotal: ₱${subtotal.toFixed(2)}</p>
    <p>VAT (12%): ₱${vat.toFixed(2)}</p>
    <p>Service Fee: ₱${serviceFee.toFixed(2)}</p>
    <strong>Total: ₱${total.toFixed(2)}</strong>
  `;

  cartIcon.textContent = `🛒${cart.length}`;
  checkoutBtn.disabled = cart.length === 0;
}

function openCart() {
  const overlay = document.getElementById('cart-overlay');
  const panel = document.getElementById('cart-panel');
  if (overlay && panel) {
    overlay.style.display = 'flex';
    setTimeout(() => panel.classList.add('show'), 10);
  }
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const panel = document.getElementById('cart-panel');
  if (overlay && panel) {
    panel.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 300);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target.id === 'cart-overlay') closeCart();
    });
  }
});
