export const products = [
  {
    id: "rice",
    name: "Rice",
    category: "Grains",
    description: "Premium quality rice varieties including Basmati, Parboiled, and Long Grain rice from India, Vietnam, and Thailand",
    image: "/rice.jpg",
    origin: ["India", "Vietnam", "Thailand"],
    destinations: ["African Countries", "Saudi Arabia", "Iran", "Iraq", "Malaysia", "Philippines", "Brazil", "Persian Gulf countries"],
    varieties: [
      "IR64 Parboiled & Raw Rice (Long Grain) - Good Quality",
      "IR36 Parboiled & Raw Rice (Long Grain) - Affordable price",
      "Swarna Parboiled & Raw Rice (Medium Grain)",
      "Sona Masoori Rice (Short Grain)",
      "100% Broken Rice (Raw & Parboiled)",
      "1121 Sella Golden Basmati Rice",
      "Pusa Steam Basmati Rice",
    ],
    specifications: [
      "Moisture content: 12-14%",
      "Broken grains: <5%",
      "Purity: 95% minimum",
      "Shelf life: 12-24 months",
    ],
    certs: [],
    packaging: null,
  },
  {
    id: "cashew",
    name: "Cashew Nuts",
    category: "Nuts",
    description: "Raw Cashew Nuts (RCN) and processed Cashew Kernels from Africa, India, and Vietnam to international standards",
    image: "/cashew.jpg",
    origin: ["Raw Cashew Nuts: Ivory Coast, Benin, Ghana, Gambia, Guinea-Bissau, Nigeria, Tanzania, Indonesia, Cambodia", "Cashew Kernels: India, Vietnam"],
    destinations: ["Raw Cashew Nuts: India & Vietnam, Worldwide", "Cashew Kernels: Worldwide"],
    varieties: [
      "White Wholes (WW): W180, W210, W240, W320, W450, W500",
      "Scorched Wholes (SW): SW180, SW210, SW240, SW320, SW450, SW500",
      "Splits",
      "LWP (Long White Pieces)",
      "SWP (Small White Pieces)",
      "BB (Baby Bites)",
      "Dessert Wholes SSW (Scorched wholes seconds)",
      "DW (Dessert wholes)",
    ],
    specifications: [
      "Quality: As per international standards",
      "Standards: CEPC / AFI quality parameters",
      "Packaging: Vacuum Flaxi pack or Tin Pack",
      "RCN: Proper Quality, Packing, Loading, and Price",
    ],
    certs: ["CEPC", "AFI"],
    packaging: {
      type: "Vacuum Flaxi pack or Tin Pack",
      description: "Vacuum-sealed flexible packaging or tin containers for maximum freshness and shelf life",
    },
  },
  {
    id: "cotton",
    name: "Cotton",
    category: "Fibers",
    description: "High-quality raw cotton and cotton products for textile manufacturing",
    image: "/cotton-bales-in-warehouse.jpg",
    origin: ["Gujarat, India", "Benin", "Togo", "Burkina Faso", "Other African Countries"],
    destinations: ["China", "Bangladesh", "Vietnam", "Indonesia", "Malaysia", "Many more countries"],
    varieties: ["Raw Cotton", "Cotton Seeds", "Cottonseed Oil"],
    specifications: [
      "Quality Products from renowned Companies",
    ],
    certs: [],
    packaging: null,
  },
  {
    id: "oilseeds",
    name: "Oilseeds",
    category: "Seeds",
    description: "Premium quality sesame, sunflower, and groundnut seeds",
    image: "/oilseeds.jpg",
    origin: ["Gujarat, India", "African Countries", "Myanmar", "Sudan", "Burkina Faso", "Senegal"],
    destinations: ["China", "Vietnam", "Indonesia", "Malaysia", "Russia", "Gulf Countries", "European Countries"],
    varieties: ["Peanut / Groundnut", "Sesame Seed", "Cottonseed", "Cottonseed Meal", "Cottonseed Hulls", "Cottonseed Oil"],
    specifications: ["As per require quality and quantity", "Best Quality", "As per Requirements"],
    certs: [],
    packaging: null,
  },
  {
    id: "spices",
    name: "Spices",
    category: "Spices",
    description: "Authentic Indian spices and seasonings with rich aroma and flavor",
    image: "/spices.jpg",
    origin: ["India", "Gujarat, India", "Vietnam", "Indonesia", "Cambodia", "Sri Lanka", "China"],
    destinations: ["All Over the World", "Asia", "Canada", "Europe", "Sri Lanka", "China", "Philippines", "Bangladesh", "Middle East", "South Korea", "UK", "US", "Latin America"],
    varieties: ["Indian Red Dry Chilly", "Cumin Seed", "Black Pepper", "Cinnamon", "Star Aniseed"],
    specifications: ["As per Buyer's Requirement", "Best Quality and Affordable Price", "Require Quality and Affordable Price"],
    certs: [],
    packaging: null,
  },
  {
    id: "tiles",
    name: "Tiles",
    category: "Building Materials",
    description: "Ceramic and porcelain tiles for residential and commercial applications",
    image: "/tiles.jpg",
    origin: ["Morbi, India"],
    destinations: ["Worldwide"],
    varieties: ["Porcelain tiles", "Ceramic Tiles", "Vitrified Tiles", "Wall tiles", "Outdoor Tiles", "Other varieties"],
    specifications: [
      "Good Quality",
      "Wide range of Designs",
      "Competitive Price",
    ],
    certs: [],
    packaging: null,
  },
  {
    id: "pharma",
    name: "Pharmaceutical Products",
    category: "Healthcare",
    description: "Quality pharmaceutical ingredients and finished products",
    image: "/pharmaceutical-products-clean.jpg",
    origin: ["India"],
    destinations: ["West Africa", "Middle East", "SouthEast Asia"],
    varieties: ["Active Ingredients", "Generic Medicines", "Nutraceuticals", "Medical Supplies"],
    specifications: ["WHO-GMP certified", "Temperature controlled", "Full documentation", "Regulatory compliant"],
    certs: ["WHO-GMP"],
    packaging: {
      type: "Temperature controlled packaging",
      description: "Specialized packaging to maintain temperature requirements during transport",
    },
  },
  {
    id: "supermarket",
    name: "Supermarket Products",
    category: "FMCG",
    description: "Fast-moving consumer goods and packaged food products",
    image: "/supermarket-products-shelf.jpg",
    origin: ["India", "Thailand"],
    destinations: ["West Africa", "Middle East", "SouthEast Asia"],
    varieties: ["Packaged Foods", "Beverages", "Personal Care", "Household Items"],
    specifications: ["Branded and private label", "Long shelf life", "Export packaging", "Halal certified options"],
    certs: ["Halal"],
    packaging: {
      type: "Export packaging",
      description: "Branded and private label packaging suitable for international export",
    },
  },
  {
    id: "edible-oil",
    name: "Edible Oil",
    category: "FMCG",
    description: "Premium quality edible oils including sunflower, soybean, palm, and groundnut oils",
    image: "/edibleoil.jpg",
    origin: ["India", "Vietnam", "Thailand"],
    destinations: ["West Africa", "Middle East", "SouthEast Asia", "South Asia"],
    varieties: ["Sunflower Oil", "Soybean Oil", "Palm Oil", "Groundnut Oil", "Mustard Oil", "Rice Bran Oil"],
    specifications: [
      "FFA: <0.1%",
      "Peroxide value: <2 meq/kg",
      "Moisture: <0.1%",
      "Packaging: Food grade containers",
    ],
    certs: [],
    packaging: {
      type: "Food grade containers",
      description: "Food-grade packaging containers ensuring product safety and quality",
    },
  },
  {
    id: "castor-oil",
    name: "Castor Oil",
    category: "FMCG",
    description: "High-quality castor oil for industrial and pharmaceutical applications",
    image: "/castoroil.jpg",
    origin: ["India"],
    destinations: ["Europe", "Middle East", "SouthEast Asia", "South Asia"],
    varieties: ["Refined Castor Oil", "Cold Pressed", "Pharmaceutical Grade", "Industrial Grade"],
    specifications: [
      "Acid value: <2 mg KOH/g",
      "Saponification value: 176-186",
      "Moisture: <0.5%",
      "Color: Pale yellow to colorless",
    ],
    certs: [],
    packaging: null,
  },
  {
    id: "pulses",
    name: "Pulses",
    category: "Grains",
    description: "Premium quality pulses including lentils, chickpeas, beans, and peas",
    image: "/pulses.jpg",
    origin: ["India", "Canada", "Australia"],
    destinations: ["West Africa", "Middle East", "Europe", "SouthEast Asia", "South Asia"],
    varieties: [
      "Red Lentils",
      "Yellow Lentils",
      "Chickpeas (Kabuli & Desi)",
      "Black Gram",
      "Green Gram",
      "Kidney Beans",
      "Black Beans",
    ],
    specifications: [
      "Moisture: 10-12%",
      "Foreign matter: <1%",
      "Broken: <2%",
      "Protein content: 20-25%",
    ],
    certs: [],
    packaging: null,
  },
]

/**
 * Get a product by its ID
 * @param {string} id - Product ID
 * @returns {Object|null} Product object or null if not found
 */
export function getProductById(id) {
  return products.find((product) => product.id === id) || null
}

/**
 * Get all products
 * @returns {Array} Array of all products
 */
export function getAllProducts() {
  return products
}

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Array of products in the category
 */
export function getProductsByCategory(category) {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

/**
 * Get all unique categories
 * @returns {Array} Array of unique category names
 */
export function getCategories() {
  return ["all", ...new Set(products.map((product) => product.category))]
}

