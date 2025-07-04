<script>
    const cart = {};
    const products = [
    // 🍫 Chocolate Bars (Local + American)
{ name: "Flat Tops Milk Chocolate (per piece)", description: "Classic Filipino chocolate snack", price: 8.98, category: "Snacks" },
{ name: "Cloud 9 Classic Bar (per piece)", description: "Chewy chocolate bar with caramel", price: 18.98, category: "Snacks" },
{ name: "Cloud 9 Overload (per piece)", description: "Larger bar with extra caramel & nuts", price: 21.98, category: "Snacks" },
{ name: "Lala Chocolate Bar (per piece)", description: "Condensed milk-based choco bar", price: 12.98, category: "Snacks" },
{ name: "Choco Mucho Dark Chocolate (per piece)", description: "Crunchy wafer bar with dark chocolate", price: 20.98, category: "Snacks" },
{ name: "Choco Mucho Cookies & Cream (per piece)", description: "White choco bar with cookie bits", price: 20.98, category: "Snacks" },
{ name: "Hany Milk Chocolate (per piece)", description: "Chocnut-style peanut milk chocolate", price: 14.98, category: "Snacks" },
{ name: "Chocnut Peanut Bar (5 pcs/pack)", description: "Crumbly chocolate peanut snack", price: 27.98, category: "Snacks" },

// 🍫 American Chocolate Bars
{ name: "Snickers Bar 50g", description: "Chocolate bar with nougat, caramel, and peanuts", price: 49.99, category: "Snacks" },
{ name: "Twix Caramel Bar 50g", description: "Crunchy biscuit bar with caramel & milk chocolate", price: 49.99, category: "Snacks" },
{ name: "Hershey's Milk Chocolate Bar 43g", description: "Classic creamy milk chocolate", price: 52.99, category: "Snacks" },
{ name: "Hershey's Cookies 'n' Cream 40g", description: "White chocolate with cookie bits", price: 52.99, category: "Snacks" },
{ name: "Reese's Peanut Butter Cups 42g", description: "Chocolate cups filled with peanut butter", price: 54.99, category: "Snacks" },
{ name: "M&M's Milk Chocolate 45g", description: "Candy-coated milk chocolate bites", price: 48.99, category: "Snacks" },
{ name: "M&M's Peanut Chocolate 45g", description: "Peanut-filled candy-coated chocolates", price: 48.99, category: "Snacks" },
{ name: "KitKat 2-Finger Bar 35g", description: "Crispy wafer in milk chocolate", price: 39.99, category: "Snacks" },
{ name: "Toblerone Milk Chocolate 50g", description: "Swiss milk chocolate with honey & almond nougat", price: 64.99, category: "Snacks" }

// 🍪 Biscuits
{ name: "Hansel Mocha Sandwich (10s pack)", description: "10 mocha cream-filled sandwich biscuits", price: 78.00, category: "Biscuits" },
{ name: "Hansel Chocolate Sandwich (10s pack)", description: "10 chocolate-filled sandwich biscuits", price: 78.00, category: "Biscuits" },
{ name: "Rebisco Choco Sandwich (10s pack)", description: "10 twin chocolate sandwich crackers", price: 85.99, category: "Biscuits" },
{ name: "Rebisco Strawberry Sandwich (10s pack)", description: "10 sweet pink sandwich crackers", price: 85.99, category: "Biscuits" },
{ name: "Cream-O Chocolate Cookies (10s pack)", description: "10 Oreo-style cookie sandwiches", price: 89.99, category: "Biscuits" },
{ name: "Cream-O Vanilla Cookies (10s pack)", description: "10 vanilla-flavored sandwich cookie packs", price: 89.99, category: "Biscuits" },
{ name: "Presto Peanut Butter Cookies (10s pack)", description: "10 peanut butter sandwich cookie packs", price: 87.99, category: "Biscuits" },

// 🍪 More Biscuits
{ name: "Fita Crackers (10s pack)", description: "Classic salted round crackers", price: 72.50, category: "Biscuits" },
{ name: "SkyFlakes Crackers (10s pack)", description: "Light and crunchy plain crackers", price: 68.99, category: "Biscuits" },
{ name: "Oreo Original (9s pack)", description: "Chocolate sandwich cookies with vanilla cream", price: 92.99, category: "Biscuits" },
{ name: "Oreo Chocolate Creme (9s pack)", description: "Chocolate-on-chocolate Oreo flavor", price: 92.99, category: "Biscuits" },
{ name: "Oreo Strawberry Creme (9s pack)", description: "Strawberry-flavored Oreo sandwich cookies", price: 92.99, category: "Biscuits" },
{ name: "Marie Biscuits (200g pack)", description: "Light vanilla-flavored biscuits", price: 45.50, category: "Biscuits" },
{ name: "Chips Delight Chocolate Chip Cookies (130g)", description: "Soft chocolate chip cookies", price: 69.00, category: "Biscuits" },
{ name: "Magic Flakes Plain Crackers (10s pack)", description: "Crunchy square crackers for snacks or dips", price: 67.50, category: "Biscuits" },
{ name: "Magic Creams Butter (10s pack)", description: "Butter-flavored sandwich crackers", price: 72.50, category: "Biscuits" },
{ name: "Magic Creams Chocolate (10s pack)", description: "Chocolate-flavored sandwich crackers", price: 72.50, category: "Biscuits" },
{ name: "Hello Panda Chocolate Filled Biscuits (50g)", description: "Fun-shaped biscuits with chocolate filling", price: 49.99, category: "Biscuits" },
{ name: "Hello Panda Strawberry (50g)", description: "Fun-shaped biscuits with strawberry filling", price: 49.99, category: "Biscuits" },
{ name: "Tiger Energy Biscuits (120g)", description: "Energy-packed biscuits with vitamins", price: 55.99, category: "Biscuits" }

 // 🥛 Milk (UHT / Sterilized / Flavored)
{ name: "Bear Brand Sterilized Milk 200mL", description: "Ready-to-drink sterilized milk", price: 19.99, category: "Milk" },
{ name: "Bear Brand Sterilized Milk 400mL", description: "Larger can for kids and adults", price: 36.99, category: "Milk" },
{ name: "Alaska Sterilized Milk 200mL", description: "Creamy sterilized milk drink", price: 18.99, category: "Milk" },
{ name: "Magnolia Fresh Milk 1L (UHT)", description: "Long-life full cream milk", price: 97.99, category: "Milk" },
{ name: "Selecta Fortified Milk 1L (UHT)", description: "UHT milk with vitamins for families", price: 89.99, category: "Milk" },
{ name: "Selecta Flavored Milk Choco 250mL", description: "Ready-to-drink chocolate milk", price: 24.99, category: "Milk" },
{ name: "Selecta Flavored Milk Strawberry 250mL", description: "Fruity strawberry milk drink", price: 24.99, category: "Milk" },
{ name: "Bear Brand Choco Milk Drink 200mL", description: "Chocolate-flavored ready-to-drink milk", price: 22.99, category: "Milk" },

// 🥛 Flavored / UHT Milk
{ name: "Dutch Mill Strawberry Yogurt Drink 180mL", description: "Strawberry flavored yogurt milk", price: 20.99, category: "Milk" },
{ name: "Dutch Mill Blueberry Yogurt Drink 180mL", description: "Blueberry flavored probiotic milk", price: 20.99, category: "Milk" },
{ name: "Nestlé Fresh Milk 1L (UHT)", description: "Creamy and long-lasting fresh milk", price: 99.99, category: "Milk" },
{ name: "Nestlé Low Fat Milk 1L", description: "UHT milk with reduced fat content", price: 104.99, category: "Milk" },
{ name: "Alaska Slim Low Fat Milk 1L", description: "Healthier milk alternative", price: 89.99, category: "Milk" },

// 🍼 Powdered / Toddler / Fortified
{ name: "Bear Brand Powdered Milk Drink 150g", description: "Nutritious milk powder for kids and adults", price: 58.99, category: "Milk" },
{ name: "Nido Fortified Milk Powder 135g", description: "Milk powder for growing kids (3+)", price: 69.99, category: "Milk" },
{ name: "Nido 3+ Powdered Milk 1.2kg", description: "Toddler milk for ages 3-5", price: 495.00, category: "Milk" },
{ name: "Alaska Powdered Milk Drink 150g", description: "Economical and creamy milk powder", price: 49.99, category: "Milk" },
{ name: "Enfagrow A+ Stage 3 (400g)", description: "Milk formula for toddlers (1–3 yrs)", price: 585.00, category: "Milk" },
{ name: "Enfagrow A+ Stage 4 (400g)", description: "Milk formula for 3 years and up", price: 565.00, category: "Milk" },
{ name: "Bonakid Pre-School 3+ Milk Powder 1.2kg", description: "Powdered milk for pre-schoolers", price: 465.00, category: "Milk" }
// 🍶 Creams
{ name: "Nestlé All Purpose Cream 250mL", description: "Versatile cream for cooking and desserts", price: 55.99, category: "Cream" },
{ name: "Nestlé All Purpose Cream 125mL", description: "Smaller size for single recipes", price: 32.99, category: "Cream" },
{ name: "Nestlé All Purpose Cream 500mL", description: "Larger pack for multiple dishes", price: 99.99, category: "Cream" },
{ name: "Nestlé Cream Sweetened 300mL", description: "Sweetened cream for fruit salad or halo-halo", price: 66.99, category: "Cream" },

{ name: "Alaska Crema All Purpose Cream 250mL", description: "Affordable cream for salad and pasta", price: 49.99, category: "Cream" },
{ name: "Alaska Crema All Purpose Cream 125mL", description: "Economy-sized cream for small servings", price: 29.99, category: "Cream" },
{ name: "Alaska Crema Asada 370mL", description: "Sweetened cream for fruit salad", price: 47.99, category: "Cream" },
{ name: "Alaska Condensada Creamy Sweetened Cream 300mL", description: "Sweet creamy milk with a thicker texture", price: 48.99, category: "Cream" },

{ name: "Angel All Purpose Cream 250mL", description: "Creamy consistency for dishes", price: 48.99, category: "Cream" },
{ name: "Angel All Purpose Cream 125mL", description: "Perfect for single-serve recipes", price: 28.99, category: "Cream" },
{ name: "Angel Kremdensada 410mL", description: "Combination of cream and condensed milk", price: 46.99, category: "Cream" },
{ name: "Angel Evaporada + Cream 410mL", description: "Evaporated milk with cream for savory cooking", price: 45.99, category: "Cream" },

// 🧁 Dessert / Whipping Creams
{ name: "Emborg Whipping Cream 1L", description: "European whipping cream for cakes and pastries", price: 235.00, category: "Cream" },
{ name: "President Whipping Cream 1L", description: "Premium French whipping cream", price: 245.00, category: "Cream" },
{ name: "Magnolia Gold Label Whipping Cream 1L", description: "Pinoy-style creamy whipped topping", price: 189.00, category: "Cream" }

 // 🍞 Bakery
{ name: "Gardenia Classic White Bread 400g", description: "Soft white bread loaf", price: 67.99, category: "Bakery" },
{ name: "Gardenia Pandesal Pack (10 pcs)", description: "Ready-to-eat soft pandesal", price: 42.99, category: "Bakery" },
{ name: "Gardenia Wheat Bread 400g", description: "High-fiber whole wheat loaf", price: 73.99, category: "Bakery" },
{ name: "Gardenia High Fiber Wheat Raisin Loaf", description: "Raisin wheat bread for healthy diet", price: 79.99, category: "Bakery" },
{ name: "Gardenia Choco Chip Loaf", description: "Sweet snack bread with chocolate chips", price: 68.99, category: "Bakery" },

{ name: "Super Loaf Bread 400g", description: "Budget loaf alternative", price: 48.99, category: "Bakery" },
{ name: "Tasty Bread (per loaf)", description: "Pandesal-style white bread", price: 54.99, category: "Bakery" },
{ name: "Pinoy Tasty Loaf Bread 400g", description: "Local affordable loaf", price: 49.99, category: "Bakery" },

{ name: "Monay Bread (4 pcs)", description: "Local dense bread great for pairing", price: 29.99, category: "Bakery" },
{ name: "Pan de Coco (3 pcs)", description: "Bread with sweet coconut filling", price: 32.99, category: "Bakery" },
{ name: "Spanish Bread (4 pcs)", description: "Buttery bread with sugary filling", price: 34.99, category: "Bakery" },
{ name: "Ensaymada (Cheese) (per piece)", description: "Soft brioche with butter and cheese topping", price: 24.99, category: "Bakery" },
{ name: "Cheesy Mamon (per piece)", description: "Fluffy sponge cake with cheese topping", price: 22.99, category: "Bakery" },

{ name: "Pandesal (10 pcs)", description: "Classic Filipino breakfast bread", price: 28.99, category: "Bakery" },
{ name: "Kalihim (Red Bread, per piece)", description: "Bright red bread with sweet filling", price: 18.99, category: "Bakery" },
{ name: "Banana Bread Slice", description: "Moist and dense banana loaf slice", price: 24.99, category: "Bakery" }
{ name: "Angelina Pandesal Pack (10 pcs)", description: "Soft traditional breakfast roll", price: 39.99, category: "Bakery" },
{ name: "Angelina Monay Bread (4 pcs)", description: "Locally baked dense bread", price: 32.99, category: "Bakery" },
{ name: "Angelina Spanish Bread (4 pcs)", description: "Buttery bread with sugary filling", price: 36.99, category: "Bakery" },
{ name: "Angelina Pan de Coco (3 pcs)", description: "Bread filled with sweetened coconut", price: 34.99, category: "Bakery" },
{ name: "Angelina Cheese Ensaymada (2 pcs)", description: "Soft brioche with margarine and cheese", price: 38.99, category: "Bakery" },
{ name: "Angelina Kalihim (Red Bread, 2 pcs)", description: "Sweet bread with bright red filling", price: 29.99, category: "Bakery" },
{ name: "Angelina Tasty Loaf Bread 400g", description: "Everyday white loaf alternative", price: 52.99, category: "Bakery" },
{ name: "Angelina Whole Wheat Bread 400g", description: "Healthier high-fiber option", price: 57.99, category: "Bakery" }
{ name: "Angelina Tasty Bread 600g", description: "Local bakery large loaf bread", price: 74.99, category: "Bakery" },
{ name: "Angelina Wheat Bread 600g", description: "600g fiber-rich loaf from Angelina", price: 78.99, category: "Bakery" }

  // 🥤 Beverages – Powdered, Bottled, and Canned
{ name: "Milo Chocolate Powder 24g", description: "Energizing choco malt drink sachet", price: 9.99, category: "Beverages" },
{ name: "Bear Brand Fortified Milk Powder 33g", description: "Nutritious milk drink for kids", price: 10.99, category: "Beverages" },
{ name: "Ovaltine Chocolate Malt Drink 30g", description: "Energy-packed malt drink", price: 10.99, category: "Beverages" },

{ name: "Coke Regular 500mL PET Bottle", description: "Classic cola soft drink", price: 28.99, category: "Beverages" },
{ name: "Sprite 500mL PET Bottle", description: "Lemon-lime fizzy drink", price: 28.99, category: "Beverages" },
{ name: "Royal Tru Orange 500mL PET", description: "Orange-flavored soda", price: 28.99, category: "Beverages" },

{ name: "Pepsi 500mL Bottle", description: "Bold cola beverage", price: 27.99, category: "Beverages" },
{ name: "Mountain Dew 500mL", description: "Citrus energy soda", price: 27.99, category: "Beverages" },

{ name: "Zest-O Mango Juice Drink 250mL", description: "Mango variant of Zest-O", price: 11.99, category: "Beverages" },
{ name: "Zest-O Dalandan Juice 250mL", description: "Filipino-style citrus juice", price: 11.99, category: "Beverages" },

{ name: "Minute Maid Pulpy Orange 300mL", description: "Real pulpy orange juice drink", price: 25.99, category: "Beverages" },
{ name: "Real Leaf Green Tea Honey Lemon 480mL", description: "Naturally brewed tea drink", price: 26.99, category: "Beverages" },

{ name: "Gatorade Blue Bolt 500mL", description: "Electrolyte sports drink", price: 38.99, category: "Beverages" },
{ name: "Pocari Sweat 330mL", description: "Ion supply drink for hydration", price: 39.99, category: "Beverages" },

{ name: "Cobra Energy Drink 350mL", description: "Popular local energy drink", price: 16.99, category: "Beverages" },
{ name: "Sting Energy Drink 330mL", description: "Affordable energy boost", price: 15.99, category: "Beverages" }

 // 🥫 Canned Goods – Beef, Sardines, Luncheon, Meals
{ name: "Argentina Corned Beef 210g", description: "Larger can of a breakfast classic", price: 58.99, category: "Canned Goods" },
{ name: "Palm Corned Beef 326g", description: "Imported chunky corned beef", price: 112.99, category: "Canned Goods" },

{ name: "Purefoods Luncheon Meat 350g", description: "Premium Filipino-style luncheon meat", price: 89.99, category: "Canned Goods" },
{ name: "Maling Luncheon Meat 397g", description: "Popular Chinese-style luncheon meat", price: 78.99, category: "Canned Goods" },
{ name: "Holiday Luncheon Meat 350g", description: "Affordable meaty option", price: 72.99, category: "Canned Goods" },

{ name: "555 Sardines Hot & Spicy 155g", description: "Sardines with extra kick", price: 20.99, category: "Canned Goods" },
{ name: "Ligo Sardines in Tomato Sauce 155g", description: "Trusted Filipino brand", price: 20.49, category: "Canned Goods" },
{ name: "Young's Town Sardines 155g", description: "Classic tomato-sauced sardines", price: 19.49, category: "Canned Goods" },

{ name: "555 Tuna Flakes in Oil 155g", description: "Lightly seasoned tuna flakes", price: 32.99, category: "Canned Goods" },
{ name: "Century Tuna Hot & Spicy 180g", description: "High-protein spicy tuna", price: 45.99, category: "Canned Goods" },
{ name: "San Marino Corned Tuna 180g", description: "Chunky and affordable tuna", price: 39.99, category: "Canned Goods" },

{ name: "CDO Karne Norte 150g", description: "Budget-friendly corned beef", price: 32.99, category: "Canned Goods" },
{ name: "Swift Meaty Corned Beef 150g", description: "Rich and saucy variant", price: 34.99, category: "Canned Goods" },

{ name: "Purefoods Caldereta 155g", description: "Ready-to-eat beef caldereta", price: 48.99, category: "Canned Goods" },
{ name: "Purefoods Afritada 155g", description: "Delicious chicken afritada in can", price: 47.99, category: "Canned Goods" },
{ name: "Purefoods Mechado 155g", description: "Pinoy-style beef mechado", price: 48.99, category: "Canned Goods" }

  // 🍜 Noodles – Pancit Canton, Mami, Cup, Korean
{ name: "Lucky Me Pancit Canton Chilimansi", description: "Spicy calamansi flavor", price: 14.99, category: "Noodles" },
{ name: "Lucky Me Pancit Canton Extra Hot", description: "Extra spicy stir-fry noodles", price: 15.99, category: "Noodles" },
{ name: "Lucky Me Pancit Canton Sweet & Spicy", description: "Balanced sweetness and heat", price: 14.99, category: "Noodles" },
{ name: "Lucky Me Instant La Paz Batchoy", description: "Filipino noodle soup with pork flavor", price: 14.49, category: "Noodles" },

{ name: "Nissin Cup Noodles Seafood 64g", description: "Seafood-flavored cup noodles", price: 22.99, category: "Noodles" },
{ name: "Nissin Cup Noodles Beef 64g", description: "Beef-flavored noodle cup", price: 22.99, category: "Noodles" },
{ name: "Nissin Ramen Kyushu Tonkotsu 100g", description: "Japanese-style creamy pork broth ramen", price: 42.99, category: "Noodles" },

{ name: "Samyang Hot Chicken Ramen (Single Pack)", description: "Famous Korean spicy noodles", price: 58.99, category: "Noodles" },
{ name: "Samyang 2x Spicy Hot Chicken Ramen", description: "Double spicy Korean noodles", price: 62.99, category: "Noodles" },
{ name: "Ottogi Jin Ramen Mild", description: "Mild Korean-style noodle soup", price: 49.99, category: "Noodles" },

{ name: "Koka Instant Noodles Chicken Flavor", description: "Halal-certified Singaporean noodles", price: 21.99, category: "Noodles" },
{ name: "Quickchow Instant Mami Beef", description: "Affordable mami-style noodles", price: 10.99, category: "Noodles" },
{ name: "Quickchow Instant Mami Chicken", description: "Budget chicken noodle soup", price: 10.99, category: "Noodles" }

  // 🍚 Rice
  { name: "Sinandomeng Rice 1kg", description: "Local white rice (premium grain)", price: 64.99, category: "Rice" },
  { name: "Dinorado Rice 1kg", description: "Aromatic & soft cooking rice", price: 69.99, category: "Rice" },

 // 🍳 Cooking Essentials – Soy Sauce, Vinegar, Spices, Condiments
{ name: "Datu Puti Toyo 1L", description: "Classic Filipino soy sauce", price: 29.99, category: "Cooking" },
{ name: "Silver Swan Soy Sauce 1L", description: "Trusted household soy sauce", price: 31.99, category: "Cooking" },
{ name: "Datu Puti Vinegar 1L", description: "All-purpose vinegar for cooking", price: 26.99, category: "Cooking" },

{ name: "Knorr Liquid Seasoning 250mL", description: "Enhances umami flavor in dishes", price: 58.99, category: "Cooking" },
{ name: "Lea & Perrins Worcestershire Sauce 290mL", description: "Great for marinades", price: 104.99, category: "Cooking" },

{ name: "Mama Sita's Adobo Mix 50g", description: "Ready-to-use adobo seasoning", price: 12.99, category: "Cooking" },
{ name: "Del Monte Tomato Sauce 250g", description: "Perfect for pasta and Filipino dishes", price: 19.99, category: "Cooking" },
{ name: "UFC Banana Ketchup 320g", description: "Sweet and tangy Filipino ketchup", price: 18.99, category: "Cooking" },
{ name: "Heinz Tomato Ketchup 320g", description: "Popular international ketchup", price: 32.99, category: "Cooking" },

{ name: "McCormick Black Pepper Ground 30g", description: "Bold, aromatic pepper", price: 42.99, category: "Cooking" },
{ name: "Ajinomoto Ginisa Flavor Seasoning Mix 8g", description: "For flavorful sautéing", price: 6.99, category: "Cooking" },
{ name: "Knorr Cubes Chicken (10s)", description: "Bouillon cubes for soups and sauces", price: 39.99, category: "Cooking" },
{ name: "Knorr Cubes Beef (10s)", description: "Flavorful beef bouillon", price: 41.99, category: "Cooking" }

  // 🧻 Tissue
  { name: "Sanicare Toilet Paper 2-Ply (3 rolls)", description: "Soft and strong bath tissue", price: 46.99, category: "Tissue" },
  { name: "Freshee Bathroom Tissue (4 rolls)", description: "Economical toilet tissue", price: 49.99, category: "Tissue" },
  { name: "Kleenex Facial Tissue 100 pulls", description: "Soft tissue for face and hygiene", price: 36.99, category: "Tissue" },
  { name: "Mighty Wipes Paper Towel Roll", description: "Absorbent kitchen towel", price: 44.99, category: "Tissue" },
  { name: "Sanicare Interfolded Paper Towel (175 pulls)", description: "Ideal for kitchen or bathroom use", price: 59.99, category: "Tissue" },

  // 🧽 Kitchen
  { name: "Joy Dishwashing Liquid Kalamansi 200mL", description: "Powerful grease remover, citrus scent", price: 27.99, category: "Kitchen" },
  { name: "Surf Dishwashing Liquid 200mL", description: "Budget-friendly dish cleaner", price: 24.99, category: "Kitchen" },
  { name: "Smart Dishwashing Paste Kalamansi 400g", description: "Thick dishwashing paste", price: 34.99, category: "Kitchen" },
  { name: "Scotch-Brite Scrub Pad (per piece)", description: "Durable dish and pot scrubber", price: 11.99, category: "Kitchen" },
  { name: "Generic Sponge Scrubber (per piece)", description: "Affordable kitchen sponge", price: 9.99, category: "Kitchen" },

  // 🧴 Toilet Cleaners
{ name: "Harpic Power Plus Toilet Cleaner 500mL", description: "Removes limescale and 99.9% germs", price: 84.99, category: "Toilet Cleaners" },
{ name: "Mr. Muscle Toilet Bowl Cleaner 500mL", description: "Tough on stains, pleasant scent", price: 78.99, category: "Toilet Cleaners" },
{ name: "Domex Lavender Toilet Cleaner 500mL", description: "Kills germs with a fresh lavender scent", price: 64.99, category: "Toilet Cleaners" },
{ name: "Zonrox ColorSafe Toilet Cleaner 500mL", description: "Safe bleach for colored toilet surfaces", price: 43.99, category: "Toilet Cleaners" },
{ name: "Blue Bowl Toilet Tablet (1 pc)", description: "Drop-in toilet tank cleaner with blue dye", price: 24.99, category: "Toilet Cleaners" },
{ name: "Domex Ultra Thick Bleach 1L", description: "Extra size for extended cleaning", price: 99.99, category: "Toilet Cleaners" },
{ name: "Domex Power Fresh Gel Citrus 500mL", description: "Gel-based cleaner with citrus scent", price: 72.99, category: "Toilet Cleaners" },
{ name: "Harpic Flushmatic In-Cistern Block (50g)", description: "Continuous cleaning with every flush", price: 34.99, category: "Toilet Cleaners" },
{ name: "Zonrox All-Around Bleach Floral 250mL", description: "Multipurpose disinfectant with floral scent", price: 22.99, category: "Toilet Cleaners" },
{ name: "Clorox ToiletWand Refills (6 pcs)", description: "Disposable scrub heads for ToiletWand", price: 169.99, category: "Toilet Cleaners" }

 // 🐶 Pets
{ name: "Pedigree Dog Food Beef 1.2kg", description: "Nutritious dry food for adult dogs", price: 189.99, category: "Pets" },
{ name: "Whiskas Cat Food Tuna 1.1kg", description: "Dry cat food with tuna flavor", price: 199.99, category: "Pets" },
{ name: "Cosi Pet Dog Shampoo 250mL", description: "Gentle shampoo for pets", price: 69.99, category: "Pets" },
{ name: "Dog Treats (Biscuits)", description: "Crunchy treats for dog training", price: 39.99, category: "Pets" },
{ name: "Pet Bowl (Plastic)", description: "Feeding bowl for pets", price: 29.99, category: "Pets" },

// 👶 Baby
{ name: "EQ Dry Diapers Medium (24 pcs)", description: "Soft and absorbent baby diapers", price: 195.00, category: "Baby" },
{ name: "EQ Plus Baby Wipes 50s", description: "Gentle wipes for baby care", price: 54.99, category: "Baby" },
{ name: "Johnson’s Baby Powder 200g", description: "Mild powder to keep baby dry", price: 82.99, category: "Baby" },
{ name: "Nestogen 1 Infant Formula 135g", description: "Infant formula for 0–6 months", price: 119.99, category: "Baby" },
{ name: "Wilkins Distilled Water 1L", description: "Safe water for babies", price: 29.99, category: "Baby" },

// 🧼 Toiletries
{ name: "Head & Shoulders Shampoo 170mL", description: "Anti-dandruff shampoo with cooling menthol", price: 94.99, category: "Toiletries" },
{ name: "Lifebuoy Antibacterial Soap 90g", description: "Health soap for germ protection", price: 22.99, category: "Toiletries" },
{ name: "Johnson's Baby Powder 200g", description: "Gentle baby powder for skin comfort", price: 67.99, category: "Toiletries" },
{ name: "Cream Silk Conditioner Pink 180mL", description: "Damage control conditioner", price: 94.99, category: "Toiletries" },
{ name: "Dove White Beauty Bar 90g", description: "Moisturizing beauty soap", price: 44.99, category: "Toiletries" },
{ name: "Colgate Toothbrush Extra Clean (Soft)", description: "Soft bristles for everyday use", price: 23.99, category: "Toiletries" },
{ name: "Rexona Deodorant Roll-On 25mL", description: "Long-lasting freshness", price: 49.99, category: "Toiletries" },
{ name: "Modess Cottony Soft Maxi Wings 8s", description: "Absorbent pads for daily use", price: 42.99, category: "Toiletries" },
{ name: "Pond’s Facial Wash 100g", description: "Brightening foam facial cleanser", price: 92.99, category: "Toiletries" },
{ name: "Himalaya Herbals Neem Face Wash 100mL", description: "Natural cleanser for acne-prone skin", price: 119.99, category: "Toiletries" },
{ name: "Belo Kojic Whitening Soap 65g", description: "Whitening with Kojic Acid & Tranexamic Acid", price: 64.99, category: "Toiletries" },
{ name: "Nivea Men Whitening Facial Wash 100g", description: "Deep clean for oily skin", price: 98.99, category: "Toiletries" },
{ name: "Colgate Mouthwash Plax Peppermint 250mL", description: "Kills bacteria without burning", price: 85.99, category: "Toiletries" },
{ name: "Myra E Lotion 200mL", description: "Vitamin E-rich lotion for soft skin", price: 109.99, category: "Toiletries" }

// 🧹 Cleaning
{ name: "Zonrox Bleach 500mL", description: "Multi-use household disinfectant", price: 29.99, category: "Cleaning" },
{ name: "Lysol Disinfectant Spray 170g", description: "Kills 99.9% of germs", price: 169.99, category: "Cleaning" },
{ name: "Mr. Clean All Purpose Cleaner 500mL", description: "For floors, tiles, and more", price: 79.99, category: "Cleaning" },
{ name: "Ajax Powder Cleanser 350g", description: "For kitchen and bathroom surfaces", price: 47.99, category: "Cleaning" },
{ name: "Floor Mop with Handle", description: "Manual mop for floors", price: 129.99, category: "Cleaning" },

// 🧺 Laundry
{ name: "Ariel Liquid Detergent 1L", description: "Powerful stain remover in liquid form", price: 134.99, category: "Laundry" },
{ name: "Tide Powder Detergent 850g", description: "Trusted cleaning power", price: 89.99, category: "Laundry" },
{ name: "Smart Liquid Detergent 1L", description: "Budget-friendly liquid cleaner", price: 82.99, category: "Laundry" },
{ name: "Downy Antibac Fabric Conditioner 500mL", description: "Freshness + antibacterial protection", price: 68.99, category: "Laundry" },
{ name: "Perla White Soap Bar 90g", description: "Gentle laundry bar with coconut oil", price: 17.99, category: "Laundry" },
{ name: "Zonrox ColorSafe Detergent Powder 500g", description: "Stain-fighting powder safe for colored clothes", price: 48.99, category: "Laundry" },
{ name: "Calla Detergent Powder 850g", description: "Floral-scented detergent", price: 74.99, category: "Laundry" },
{ name: "Ariel Power Gel Sachet (55mL x 6)", description: "Sachet pack for handwash or small loads", price: 42.99, category: "Laundry" },
{ name: "Surf Bar Detergent 380g", description: "Bar soap for manual laundry washing", price: 28.99, category: "Laundry" },
{ name: "Downy Premium Parfum Collection 580mL", description: "Long-lasting scent booster", price: 109.99, category: "Laundry" }

// ☕ 3in1 Coffee
{ name: "Nescafé Creamy White 3in1 (28g x 10)", description: "Creamy and mild blend", price: 96.99, category: "3in1 Coffee" },
{ name: "Great Taste Brown 3in1 (30g x 10)", description: "Brown sugar coffee flavor", price: 88.99, category: "3in1 Coffee" },
{ name: "Kopiko Brown Coffee (30g x 10)", description: "Rich brown sugar flavor", price: 92.99, category: "3in1 Coffee" },
{ name: "San Mig Super Coffee 3in1 Strong (30g x 10)", description: "Extra strong energy boost", price: 86.99, category: "3in1 Coffee" },
{ name: "Nescafé Black Roast 3in1 (25g x 10)", description: "Bolder roast, stronger taste", price: 99.99, category: "3in1 Coffee" },
{ name: "Kopiko Cappuccino (25g x 10)", description: "Cappuccino-style coffee with choco granules", price: 99.99, category: "3in1 Coffee" },
{ name: "Alaska Fortified Choco 3in1 (30g x 10)", description: "Choco-milk drink mix", price: 64.99, category: "3in1 Coffee" },
{ name: "Energen Chocolate Cereal Drink (5s)", description: "Choco breakfast with vitamins", price: 49.99, category: "3in1 Coffee" },
{ name: "Top Creamery Coffee Blend 3in1 (10s)", description: "Premium cafe-style blend", price: 109.99, category: "3in1 Coffee" },
{ name: "Blend 45 Original Coffee Mix (30g x 10)", description: "Classic Pinoy budget blend", price: 79.99, category: "3in1 Coffee" }
];
// Initialize quantity tracker
const quantities = new Array(products.length).fill(0);
