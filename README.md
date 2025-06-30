# Dala🚲Na Ordering Platform

Dala🚲Na is a lightweight, mobile-friendly ordering system for local stores and customers in Bacolod City.

🚲 Customers can:
- View products from various merchants (Bakery, Pharmacy, Chicken Inasal, etc.)
- Add items to a smart cart with real-time totals, VAT, and service fees
- Checkout through an embedded form
- Automatically send orders via WhatsApp to merchants and delivery drivers

---

## 🔧 Technologies Used

- **HTML/CSS/JavaScript** (Vanilla)
- **Firebase Authentication** (Google, Facebook, Email)
- **Airtable API** for user tracking
- **Fillout** for form submissions
- **WhatsApp API** for order delivery confirmation

---

## 📂 Key Pages

- `index.html` – Landing Page
- `mydalahub.html` – Authenticated Hub
- `select-store.html` – Choose Store
- `pharmacy.html`, `bakery.html`, `goldilucks.html`, etc. – Merchant Pages
- `dalacart.js` – Centralized Cart Logic
- `thankyou.html` – Order Confirmation

---

## ⚠️ Notes

- All prices include VAT, service fee (₱29.99), and standard markup (₱1.99).
- Checkout requires customer login and complete delivery/payment info.
- Orders are submitted via Fillout form and sent to merchants through WhatsApp.

---

🔒 This system does **not** store sensitive data on GitHub. API keys and auth are securely handled via Firebase and Fillout.
