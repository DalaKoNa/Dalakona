// dalacart.js (shared cart logic)
let cart = [];

function addToCart(item) {
  const existingItem = cart.find(i => i.name === item.name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function updateQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceContainer = document.getElementById('cart-total');
  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} (₱${item.price}) x ${item.quantity}</span>
        <button onclick="updateQuantity(${index}, -1)">−</button>
        <button onclick="updateQuantity(${index}, 1)">+</button>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  total += 29.99; // service fee
  totalPriceContainer.textContent = `Total: ₱${total.toFixed(2)} (₱29.99 service fee included)`;

  document.getElementById("checkout-btn").disabled = cart.length === 0;
}

function getCartSummary() {
  return cart.map(i => `${i.name} x ${i.quantity}`).join(', ');
}

function onCheckoutClick() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      openFilloutModal(user);
    } else {
      alert("Please log in first.");
      window.location.href = "mydalahub.html";
    }
  });
}

function openFilloutModal(user) {
  const summary = encodeURIComponent(getCartSummary());
  const prefillUrl = `https://forms.fillout.com/t/oMZACWUnvFus?customerName=${encodeURIComponent(user.displayName || "")}&whatsappNumber=&cartSummary=${summary}&customizationNotes=&deliveryDate=&deliveryTime=&customerEmail=${encodeURIComponent(user.email)}&customerPhone=`;

  document.getElementById("fillout-iframe").src = prefillUrl;
  document.getElementById("fillout-modal").style.display = "block";
}

function closeFilloutModal() {
  document.getElementById("fillout-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) checkoutBtn.addEventListener("click", onCheckoutClick);
});
