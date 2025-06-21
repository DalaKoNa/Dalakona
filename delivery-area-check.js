// delivery-area-check.js

const handumananPolygon = [
  { lat: 10.594143, lng: 122.991287 },
  { lat: 10.590100, lng: 122.999972 },
  { lat: 10.581993, lng: 122.997059 },
  { lat: 10.582909, lng: 122.985193 },
  { lat: 10.587657, lng: 122.981226 },
  { lat: 10.594143, lng: 122.991287 }
];

function isPointInPolygon(point, polygon) {
  let x = point.lat, y = point.lng;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let xi = polygon[i].lat, yi = polygon[i].lng;
    let xj = polygon[j].lat, yj = polygon[j].lng;

    let intersect = ((yi > y) !== (yj > y)) &&
      (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

function handleLocationValidation(lat, lng) {
  const warning = document.getElementById('addressWarning');
  const checkoutBtn = document.getElementById('checkout-btn');
  const inside = isPointInPolygon({ lat, lng }, handumananPolygon);

  if (!inside) {
    warning.style.display = "block";
    checkoutBtn.disabled = true;
  } else {
    warning.style.display = "none";
    validateForm(); // assumes validateForm() exists in your main file
  }
}

