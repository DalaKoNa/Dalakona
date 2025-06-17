// dalacart.js

let cart = JSON.parse(localStorage.getItem("dalaCart")) || [];

function saveCart() {
  localStorage.setItem("dalaCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(item) {
  const existing = cart.find((i) => i.name === item.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
}

function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  saveCart();
}

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
}

function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  container.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>₱${(item.price * item.qty).toFixed(2)}</span>
    `;
    container.appendChild(itemDiv);
    subtotal += item.price * item.qty;
  });

  document.getElementById("subtotal").textContent = `Subtotal: ₱${subtotal.toFixed(2)}`;
  const vat = subtotal * 0.12;
  document.getElementById("vat").textContent = `₱${vat.toFixed(2)}`;
  const total = subtotal + 29.99 + vat;
  document.getElementById("total").textContent = `₱${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) return;

  const cartSummary = cart
    .map((item) => `${item.name} x${item.qty} = ₱${(item.qty * item.price).toFixed(2)}`)
    .join("%0A");

  const totalAmount = document.getElementById("total").textContent;
  const filloutURL = `https://forms.fillout.com/t/oMZACWUnvFus?cartSummary=${encodeURIComponent(
    cartSummary
  )}&totalAmount=${encodeURIComponent(totalAmount)}`;

  const iframe = document.getElementById("fillout-frame");
  iframe.src = filloutURL;
  iframe.style.display = "block";
  toggleCart();
}

// Initial load
renderCart();
