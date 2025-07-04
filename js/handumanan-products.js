const markup = 3.69;

const categorizedProducts = {
  "Rice & Grains": [
    { name: "Bigas 1kg", description: "Regular-milled rice", base: 42 },
    { name: "Corn Grits 1kg", description: "Yellow corn rice", base: 38 }
  ],
  "Cooking Essentials": [
    { name: "Mantika 1L", description: "Palm cooking oil", base: 85 },
    { name: "Asukal 1kg", description: "White sugar", base: 55 },
    { name: "Asin (Salt) 500g", description: "Refined salt", base: 10 }
  ],
  "Canned Goods": [
    { name: "Sardinas", description: "155g tomato sauce", base: 22 },
    { name: "Corned Beef", description: "175g premium beef", base: 48 }
  ],
  "Beverages": [
    { name: "Kape 50g", description: "Instant coffee", base: 18 },
    { name: "Gatas (Evap)", description: "Evaporated milk", base: 26 }
  ],
  "Bread & Snacks": [
    { name: "Tinapay (Loaf)", description: "Sliced tasty bread", base: 60 },
    { name: "Biscuit Pack", description: "Snack-size assorted biscuits", base: 30 }
  ],
  "Toiletries & Cleaning": [
    { name: "Sabon Panlaba", description: "Laundry soap bar", base: 16 },
    { name: "Toothpaste", description: "75ml regular mint", base: 35 }
  ]
};

// Apply markup to every item
Object.values(categorizedProducts).forEach(category =>
  category.forEach(p => p.price = +(p.base * markup).toFixed(2))
);
