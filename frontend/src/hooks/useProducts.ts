import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import type { Product, Category, Banner } from "../types";

const isPlaceholder = !import.meta.env.VITE_SUPABASE_URL ||
                      import.meta.env.VITE_SUPABASE_URL.includes("placeholder");

// Complete Mock Categories matching the CategoryGrid icon mapping
export const mockCategories: Category[] = [
  { id: "cat-1", name: "Electronics", slug: "electronics", parent_id: null, image_url: null, description: "Latest gadgets and gear", sort_order: 1, is_active: true },
  { id: "cat-2", name: "Fashion", slug: "fashion", parent_id: null, image_url: null, description: "Trendy clothes and accessories", sort_order: 2, is_active: true },
  { id: "cat-3", name: "Home & Kitchen", slug: "home-kitchen", parent_id: null, image_url: null, description: "Home decor and kitchen tools", sort_order: 3, is_active: true },
  { id: "cat-4", name: "Beauty & Personal Care", slug: "beauty-personal-care", parent_id: null, image_url: null, description: "Skincare, cosmetics, and more", sort_order: 4, is_active: true },
  { id: "cat-5", name: "Sports & Outdoors", slug: "sports-outdoors", parent_id: null, image_url: null, description: "Athletic wear and outdoor gear", sort_order: 5, is_active: true },
  { id: "cat-6", name: "Books", slug: "books", parent_id: null, image_url: null, description: "Novels, textbooks, and guides", sort_order: 6, is_active: true },
  { id: "cat-7", name: "Toys & Games", slug: "toys-games", parent_id: null, image_url: null, description: "Fun toys for all ages", sort_order: 7, is_active: true },
  { id: "cat-8", name: "Automotive", slug: "automotive", parent_id: null, image_url: null, description: "Car accessories and tools", sort_order: 8, is_active: true },
  { id: "cat-9", name: "Grocery", slug: "grocery", parent_id: null, image_url: null, description: "Daily essentials and treats", sort_order: 9, is_active: true },
  { id: "cat-10", name: "Office Products", slug: "office-products", parent_id: null, image_url: null, description: "Stationery and office tech", sort_order: 10, is_active: true },
  { id: "cat-11", name: "Health & Wellness", slug: "health-wellness", parent_id: null, image_url: null, description: "Vitamins and wellness aids", sort_order: 11, is_active: true },
  { id: "cat-12", name: "Baby Products", slug: "baby-products", parent_id: null, image_url: null, description: "Care items for newborns and toddlers", sort_order: 12, is_active: true },
  { id: "cat-13", name: "Musical Instruments", slug: "musical-instruments", parent_id: null, image_url: null, description: "Guitars, keyboards, and drums", sort_order: 13, is_active: true },
  { id: "cat-14", name: "Garden & Outdoor", slug: "garden-outdoor", parent_id: null, image_url: null, description: "Plants, seeds, and yard tools", sort_order: 14, is_active: true },
  { id: "cat-15", name: "Luggage & Travel", slug: "luggage-travel", parent_id: null, image_url: null, description: "Bags, suitcases, and travel gear", sort_order: 15, is_active: true },
  { id: "cat-16", name: "Art & Craft Supplies", slug: "art-craft-supplies", parent_id: null, image_url: null, description: "Paints, sketchbooks, and craft tools", sort_order: 16, is_active: true },
  { id: "cat-17", name: "Gift Cards", slug: "gift-cards", parent_id: null, image_url: null, description: "Share the joy of shopping", sort_order: 17, is_active: true },
  { id: "cat-18", name: "Industrial Supplies", slug: "industrial-supplies", parent_id: null, image_url: null, description: "Hardware and industrial tools", sort_order: 18, is_active: true },
  { id: "cat-19", name: "Pet Supplies", slug: "pet-supplies", parent_id: null, image_url: null, description: "Food and toys for your pets", sort_order: 19, is_active: true },
  { id: "cat-20", name: "Video Games", slug: "video-games", parent_id: null, image_url: null, description: "Consoles and game titles", sort_order: 20, is_active: true }
];

// Complete Mock Banners matching the slideshow banners in the screenshots
export const mockBanners: Banner[] = [
  {
    id: "banner-1",
    title: "Home Refresh",
    subtitle: "Transform your living space",
    image_url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    background_color: "#2e4f4f",
    text_color: "#ffffff",
    link_url: "/category/home-kitchen",
    sort_order: 1,
    is_active: true
  },
  {
    id: "banner-2",
    title: "New Arrivals",
    subtitle: "Latest tech at best prices",
    image_url: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1600&q=80",
    background_color: "#1a1a1a",
    text_color: "#ffffff",
    link_url: "/category/electronics",
    sort_order: 2,
    is_active: true
  }
];

// Mock Products matching all sections (Trending, Bestsellers, Deals, Sponsored, Categories)
export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Wireless Noise Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    description: "Experience premium audio quality and advanced active noise cancellation.",
    brand: "Sony",
    category_id: "cat-1",
    price: 249.99,
    original_price: 349.99,
    discount_percentage: 28,
    rating: 4.8,
    review_count: 1240,
    stock_quantity: 45,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    specifications: { "Model": "WH-1000XM4", "Battery": "30 hours" },
    created_at: "2026-06-01T12:00:00Z"
  },
  {
    id: "prod-2",
    name: "Minimalist Leather Watch",
    slug: "minimalist-leather-watch",
    description: "A sleek and elegant watch featuring a genuine leather strap and minimalist dial.",
    brand: "Fossil",
    category_id: "cat-2",
    price: 89.00,
    original_price: 120.00,
    discount_percentage: 25,
    rating: 4.5,
    review_count: 382,
    stock_quantity: 25,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    specifications: { "Case Diameter": "40mm", "Strap Material": "Leather" },
    created_at: "2026-06-02T12:00:00Z"
  },
  {
    id: "prod-3",
    name: "Ergonomic Office Chair",
    slug: "ergonomic-office-chair",
    description: "High-back office chair with adjustable lumbar support and breathable mesh.",
    brand: "Steelcase",
    category_id: "cat-10",
    price: 189.99,
    original_price: 279.99,
    discount_percentage: 32,
    rating: 4.6,
    review_count: 520,
    stock_quantity: 12,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: true,
    fast_delivery: false,
    image_url: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80",
    specifications: { "Material": "Mesh & Steel", "Weight Capacity": "300 lbs" },
    created_at: "2026-06-03T12:00:00Z"
  },
  {
    id: "prod-4",
    name: "Non-Stick Chef's Pan (12-Inch)",
    slug: "non-stick-chefs-pan-12-inch",
    description: "Hard-anodized aluminum pan with advanced non-stick coating for easy cooking.",
    brand: "Calphalon",
    category_id: "cat-3",
    price: 59.99,
    original_price: 79.99,
    discount_percentage: 25,
    rating: 4.7,
    review_count: 890,
    stock_quantity: 30,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    specifications: { "Diameter": "12 Inches", "Material": "Aluminum" },
    created_at: "2026-06-04T12:00:00Z"
  },
  {
    id: "prod-5",
    name: "Organic Hydrating Lavender Cream",
    slug: "organic-hydrating-lavender-cream",
    description: "Deeply moisturizing organic cream infused with soothing lavender essential oil.",
    brand: "Aveda",
    category_id: "cat-4",
    price: 24.99,
    original_price: 34.99,
    discount_percentage: 28,
    rating: 4.4,
    review_count: 198,
    stock_quantity: 60,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: true,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    specifications: { "Volume": "150ml", "Skin Type": "All" },
    created_at: "2026-06-05T12:00:00Z"
  },
  {
    id: "prod-6",
    name: "Acoustic Guitar Starter Kit",
    slug: "acoustic-guitar-starter-kit",
    description: "Full-size steel string acoustic guitar with gig bag, tuner, strap, and picks.",
    brand: "Yamaha",
    category_id: "cat-13",
    price: 149.99,
    original_price: 199.99,
    discount_percentage: 25,
    rating: 4.7,
    review_count: 450,
    stock_quantity: 15,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: false,
    image_url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    specifications: { "Size": "Full Size", "Strings": "Steel" },
    created_at: "2026-06-06T12:00:00Z"
  },
  {
    id: "prod-7",
    name: "Stainless Steel Insulated Water Bottle",
    slug: "stainless-steel-insulated-water-bottle",
    description: "Double-wall vacuum insulated bottle keeps drinks cold for up to 24 hours.",
    brand: "Hydro Flask",
    category_id: "cat-5",
    price: 34.99,
    original_price: 34.99,
    discount_percentage: 0,
    rating: 4.9,
    review_count: 2340,
    stock_quantity: 120,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    specifications: { "Capacity": "32 oz", "Material": "Stainless Steel" },
    created_at: "2026-06-07T12:00:00Z"
  },
  {
    id: "prod-8",
    name: "Retro Arcade Gaming Console",
    slug: "retro-arcade-gaming-console",
    description: "Classic gaming console with 500 pre-installed retro games and two controllers.",
    brand: "Sega",
    category_id: "cat-20",
    price: 79.99,
    original_price: 99.99,
    discount_percentage: 20,
    rating: 4.3,
    review_count: 210,
    stock_quantity: 40,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=600&q=80",
    specifications: { "Games Included": "500", "Output": "HDMI" },
    created_at: "2026-06-08T12:00:00Z"
  },
  {
    id: "prod-9",
    name: "Roasted Arabica Coffee Beans (1kg)",
    slug: "roasted-arabica-coffee-beans-1kg",
    description: "Rich and smooth medium roast whole bean coffee sourced from sustainable farms.",
    brand: "Starbucks",
    category_id: "cat-9",
    price: 29.99,
    original_price: 39.99,
    discount_percentage: 25,
    rating: 4.8,
    review_count: 820,
    stock_quantity: 80,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80",
    specifications: { "Weight": "1kg", "Roast": "Medium" },
    created_at: "2026-06-09T12:00:00Z"
  },
  {
    id: "prod-10",
    name: "Wireless Ergonomic Computer Mouse",
    slug: "wireless-ergonomic-computer-mouse",
    description: "Rechargeable silent wireless mouse with adjustable DPI and thumb grip.",
    brand: "Logitech",
    category_id: "cat-1",
    price: 39.99,
    original_price: 59.99,
    discount_percentage: 33,
    rating: 4.6,
    review_count: 1140,
    stock_quantity: 95,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specifications: { "DPI": "1600", "Battery Life": "Up to 70 days" },
    created_at: "2026-06-10T12:00:00Z"
  },
  {
    id: "prod-11",
    name: "Waterproof Duffel Bag (45L)",
    slug: "waterproof-duffel-bag-45l",
    description: "Durable waterproof travel duffel bag with shoe compartment and backpack straps.",
    brand: "Patagonia",
    category_id: "cat-15",
    price: 75.00,
    original_price: 110.00,
    discount_percentage: 31,
    rating: 4.5,
    review_count: 188,
    stock_quantity: 18,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: true,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    specifications: { "Capacity": "45L", "Waterproof": "Yes" },
    created_at: "2026-06-11T12:00:00Z"
  },
  {
    id: "prod-12",
    name: "The Art of Computer Programming",
    slug: "the-art-of-computer-programming",
    description: "An classic seminal reference book on algorithms and data structures.",
    brand: "Addison-Wesley",
    category_id: "cat-6",
    price: 55.00,
    original_price: 55.00,
    discount_percentage: 0,
    rating: 4.9,
    review_count: 95,
    stock_quantity: 8,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: false,
    image_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    specifications: { "Author": "Donald Knuth", "Format": "Hardcover" },
    created_at: "2026-06-12T12:00:00Z"
  },
  {
    id: "prod-13",
    name: "Building Block Castle Set",
    slug: "building-block-castle-set",
    description: "Creative architectural blocks set for building historic medieval castles.",
    brand: "LEGO",
    category_id: "cat-7",
    price: 45.00,
    original_price: 45.00,
    discount_percentage: 0,
    rating: 4.8,
    review_count: 240,
    stock_quantity: 20,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    specifications: { "Piece Count": "800", "Age Range": "8+" },
    created_at: "2026-06-13T12:00:00Z"
  },
  {
    id: "prod-14",
    name: "Portable Car Air Compressor",
    slug: "portable-car-air-compressor",
    description: "12V DC digital tire inflator with auto shut-off, emergency LED flashlights.",
    brand: "AstroAI",
    category_id: "cat-8",
    price: 32.99,
    original_price: 49.99,
    discount_percentage: 34,
    rating: 4.5,
    review_count: 1450,
    stock_quantity: 40,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80",
    specifications: { "Voltage": "12V DC", "Max Pressure": "150 PSI" },
    created_at: "2026-06-14T12:00:00Z"
  },
  {
    id: "prod-15",
    name: "Multivitamin Daily Gummies",
    slug: "multivitamin-daily-gummies",
    description: "Tasty daily nutritional support gummy vitamins with fruit flavors.",
    brand: "Centrum",
    category_id: "cat-11",
    price: 18.50,
    original_price: 24.00,
    discount_percentage: 22,
    rating: 4.6,
    review_count: 3100,
    stock_quantity: 150,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    specifications: { "Quantity": "120 Gummies", "Flavor": "Berry" },
    created_at: "2026-06-15T12:00:00Z"
  },
  {
    id: "prod-16",
    name: "Soft Cotton Baby Swaddle Blankets",
    slug: "soft-cotton-baby-swaddle-blankets",
    description: "Premium breathable muslin swaddle wraps for newborns and infants.",
    brand: "Aden & Anais",
    category_id: "cat-12",
    price: 28.00,
    original_price: 35.00,
    discount_percentage: 20,
    rating: 4.8,
    review_count: 670,
    stock_quantity: 50,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    specifications: { "Material": "100% Muslin Cotton", "Size": "47 x 47 inches" },
    created_at: "2026-06-16T12:00:00Z"
  },
  {
    id: "prod-17",
    name: "Professional Garden Pruning Shears",
    slug: "professional-garden-pruning-shears",
    description: "Sharp and reliable bypass hand pruner with heavy-duty steel blades.",
    brand: "Fiskars",
    category_id: "cat-14",
    price: 19.99,
    original_price: 26.99,
    discount_percentage: 25,
    rating: 4.7,
    review_count: 1540,
    stock_quantity: 75,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    specifications: { "Blade Material": "Carbon Steel", "Cutting Capacity": "5/8 Inch" },
    created_at: "2026-06-17T12:00:00Z"
  },
  {
    id: "prod-18",
    name: "Professional Acrylic Paint Set (24 Colors)",
    slug: "professional-acrylic-paint-set-24-colors",
    description: "Rich pigments that blend easily. Perfect for canvas, wood, crafts, and rock painting.",
    brand: "Arteza",
    category_id: "cat-16",
    price: 24.99,
    original_price: 32.99,
    discount_percentage: 24,
    rating: 4.6,
    review_count: 580,
    stock_quantity: 35,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    specifications: { "Color Count": "24", "Volume": "12ml per tube" },
    created_at: "2026-06-18T12:00:00Z"
  },
  {
    id: "prod-19",
    name: "7days Market $50 eGift Card",
    slug: "7days-market-50-egift-card",
    description: "Easy and instant digital shopping gift card delivered via email.",
    brand: "7days Market",
    category_id: "cat-17",
    price: 50.00,
    original_price: 50.00,
    discount_percentage: 0,
    rating: 4.9,
    review_count: 4200,
    stock_quantity: 9999,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    specifications: { "Delivery": "Instant Email", "Expiration": "None" },
    created_at: "2026-06-19T12:00:00Z"
  },
  {
    id: "prod-20",
    name: "Digital Vernier Caliper (150mm)",
    slug: "digital-vernier-caliper-150mm",
    description: "Stainless steel electronic caliper with LCD display screen and inch/metric conversion.",
    brand: "Neiko",
    category_id: "cat-18",
    price: 22.99,
    original_price: 34.99,
    discount_percentage: 34,
    rating: 4.5,
    review_count: 670,
    stock_quantity: 45,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specifications: { "Range": "0-6 inches / 0-150mm", "Resolution": "0.01mm" },
    created_at: "2026-06-20T12:00:00Z"
  },
  {
    id: "prod-21",
    name: "Orthopedic Memory Foam Dog Bed",
    slug: "orthopedic-memory-foam-dog-bed",
    description: "Joint relief memory foam pet mattress with removable washable cover.",
    brand: "Furhaven",
    category_id: "cat-19",
    price: 49.99,
    original_price: 69.99,
    discount_percentage: 28,
    rating: 4.7,
    review_count: 1840,
    stock_quantity: 60,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
    specifications: { "Size": "Large (36\" x 27\")", "Material": "Memory Foam" },
    created_at: "2026-06-21T12:00:00Z"
  },
  {
    id: "prod-22",
    name: "Mechanical Gaming Keyboard",
    slug: "mechanical-gaming-keyboard-redragon",
    description: "High-performance mechanical keyboard with tactile blue switches and custom rainbow LED backlighting.",
    brand: "Redragon",
    category_id: "cat-1",
    price: 59.99,
    original_price: 79.99,
    discount_percentage: 25,
    rating: 4.6,
    review_count: 820,
    stock_quantity: 40,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specifications: { "Switches": "Tactile Blue", "Backlight": "RGB" },
    created_at: "2026-06-21T01:00:00Z"
  },
  {
    id: "prod-23",
    name: "Bluetooth Speaker",
    slug: "bluetooth-speaker-jbl",
    description: "Portable waterproof speaker with deep bass and up to 12 hours of playtime.",
    brand: "JBL",
    category_id: "cat-1",
    price: 49.99,
    original_price: 69.99,
    discount_percentage: 29,
    rating: 4.7,
    review_count: 1430,
    stock_quantity: 65,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    specifications: { "Battery": "12 hours", "Waterproof": "IPX7" },
    created_at: "2026-06-21T02:00:00Z"
  },
  {
    id: "prod-24",
    name: "USB-C Fast Charger 30W",
    slug: "usb-c-fast-charger-30w-anker",
    description: "Compact and powerful charger with PowerIQ 3.0 technology for fast charging phones and laptops.",
    brand: "Anker",
    category_id: "cat-1",
    price: 19.99,
    original_price: 29.99,
    discount_percentage: 33,
    rating: 4.8,
    review_count: 3100,
    stock_quantity: 150,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    specifications: { "Output": "30W", "Port Type": "USB-C" },
    created_at: "2026-06-21T03:00:00Z"
  },
  {
    id: "prod-25",
    name: "Wireless Earbuds",
    slug: "wireless-earbuds-soundcore",
    description: "True wireless earbuds with touch control, active noise cancellation, and customizable EQ presets.",
    brand: "Soundcore",
    category_id: "cat-1",
    price: 39.99,
    original_price: 59.99,
    discount_percentage: 33,
    rating: 4.5,
    review_count: 2450,
    stock_quantity: 90,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: true,
    is_trending: true,
    is_sponsored: true,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    specifications: { "Playtime": "28 hours with case", "Bluetooth": "5.2" },
    created_at: "2026-06-21T04:00:00Z"
  },
  {
    id: "prod-26",
    name: "Full HD Webcam",
    slug: "full-hd-webcam-logitech",
    description: "1080p video streaming webcam with automatic light correction and dual stereo microphones.",
    brand: "Logitech",
    category_id: "cat-1",
    price: 69.99,
    original_price: 89.99,
    discount_percentage: 22,
    rating: 4.6,
    review_count: 1840,
    stock_quantity: 55,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1603184017968-963d6f7881f1?auto=format&fit=crop&w=600&q=80",
    specifications: { "Resolution": "1080p / 30fps", "Focus Type": "Autofocus" },
    created_at: "2026-06-21T05:00:00Z"
  },
  {
    id: "prod-27",
    name: "Portable SSD 500GB",
    slug: "portable-ssd-500gb-samsung",
    description: "Superfast external solid state drive with reading speeds up to 1050MB/s and drop resistance.",
    brand: "Samsung",
    category_id: "cat-1",
    price: 59.99,
    original_price: 79.99,
    discount_percentage: 25,
    rating: 4.8,
    review_count: 1980,
    stock_quantity: 75,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1597872200969-2b65dff50a4b?auto=format&fit=crop&w=600&q=80",
    specifications: { "Transfer Speed": "Up to 1050 MB/s", "Interface": "USB 3.2 Gen 2" },
    created_at: "2026-06-21T06:00:00Z"
  },
  {
    id: "prod-28",
    name: "Gaming Mouse Pad XL",
    slug: "gaming-mouse-pad-xl-steelseries",
    description: "Extra large micro-woven cloth mousepad optimized for low and high CPI tracking movements.",
    brand: "SteelSeries",
    category_id: "cat-1",
    price: 14.99,
    original_price: 24.99,
    discount_percentage: 40,
    rating: 4.7,
    review_count: 3450,
    stock_quantity: 200,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80",
    specifications: { "Dimensions": "900 x 400 x 4mm", "Material": "Cloth / Rubber" },
    created_at: "2026-06-21T07:00:00Z"
  },
  {
    id: "prod-29",
    name: "Smart Fitness Band",
    slug: "smart-fitness-band-xiaomi",
    description: "Vibrant AMOLED display fitness band tracking heart rate, sleep quality, and 30 workout modes.",
    brand: "Xiaomi",
    category_id: "cat-1",
    price: 34.99,
    original_price: 49.99,
    discount_percentage: 30,
    rating: 4.4,
    review_count: 980,
    stock_quantity: 85,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    specifications: { "Display": "1.62\" AMOLED", "Battery Life": "14 days" },
    created_at: "2026-06-21T08:00:00Z"
  },
  {
    id: "prod-30",
    name: "Power Bank 20000mAh",
    slug: "power-bank-20000mah-anker",
    description: "Ultra-high capacity power bank with fast charging technology and dual outputs.",
    brand: "Anker",
    category_id: "cat-1",
    price: 39.99,
    original_price: 54.99,
    discount_percentage: 27,
    rating: 4.8,
    review_count: 4890,
    stock_quantity: 110,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1609592424109-dd0e15af6a21?auto=format&fit=crop&w=600&q=80",
    specifications: { "Capacity": "20000 mAh", "Ports": "2 USB-A, 1 USB-C" },
    created_at: "2026-06-21T09:00:00Z"
  },
  {
    id: "prod-31",
    name: "Laptop Cooling Pad",
    slug: "laptop-cooling-pad-havit",
    description: "Slim and quiet laptop cooling pad with 3 quiet blue LED fans and adjustable heights.",
    brand: "Havit",
    category_id: "cat-1",
    price: 24.99,
    original_price: 34.99,
    discount_percentage: 29,
    rating: 4.3,
    review_count: 760,
    stock_quantity: 40,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: true,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specifications: { "Fans": "3 Fans (110mm)", "Compatibility": "15.6\" - 17\" Laptops" },
    created_at: "2026-06-21T10:00:00Z"
  },
  {
    id: "prod-32",
    name: "Wireless Router AC1200",
    slug: "wireless-router-ac1200-tp-link",
    description: "Dual-band WiFi router with 4 external antennas for stable long-range wireless networks.",
    brand: "TP-Link",
    category_id: "cat-1",
    price: 49.99,
    original_price: 69.99,
    discount_percentage: 29,
    rating: 4.5,
    review_count: 1820,
    stock_quantity: 60,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specifications: { "Speed": "867Mbps at 5GHz, 300Mbps at 2.4GHz", "Antennas": "4 External" },
    created_at: "2026-06-21T11:00:00Z"
  },
  {
    id: "prod-33",
    name: "Smart Plug (Pack of 2)",
    slug: "smart-plug-pack-of-2-tp-link",
    description: "Smart WiFi outlet plug compatible with Alexa & Google Home, no hub required.",
    brand: "TP-Link",
    category_id: "cat-1",
    price: 24.99,
    original_price: 34.99,
    discount_percentage: 29,
    rating: 4.6,
    review_count: 2890,
    stock_quantity: 95,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    specifications: { "Quantity": "2 Plugs", "App Support": "Kasa Smart" },
    created_at: "2026-06-21T12:00:00Z"
  },
  {
    id: "prod-34",
    name: "External Hard Drive 1TB",
    slug: "external-hard-drive-1tb-seagate",
    description: "Sleek and simple portable external hard drive with high-speed USB 3.0 drag-and-drop file saving.",
    brand: "Seagate",
    category_id: "cat-1",
    price: 54.99,
    original_price: 74.99,
    discount_percentage: 27,
    rating: 4.6,
    review_count: 4120,
    stock_quantity: 80,
    is_in_stock: true,
    is_bestseller: true,
    is_new_arrival: false,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80",
    specifications: { "Capacity": "1 TB", "Interface": "USB 3.0" },
    created_at: "2026-06-21T13:00:00Z"
  },
  {
    id: "prod-35",
    name: "Bluetooth Keyboard",
    slug: "bluetooth-keyboard-logitech",
    description: "Slim and lightweight multi-device wireless Bluetooth keyboard for computers, tablets, and phones.",
    brand: "Logitech",
    category_id: "cat-1",
    price: 44.99,
    original_price: 59.99,
    discount_percentage: 25,
    rating: 4.6,
    review_count: 1670,
    stock_quantity: 70,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
    specifications: { "Layout": "Compact QWERTY", "Connectivity": "Bluetooth (3 Devices)" },
    created_at: "2026-06-21T14:00:00Z"
  },
  {
    id: "prod-36",
    name: "Smart Watch",
    slug: "smart-watch-amazfit",
    description: "Sleek smart watch with built-in GPS, 60+ sports modes, 9-day battery life, and oxygen monitoring.",
    brand: "Amazfit",
    category_id: "cat-1",
    price: 89.99,
    original_price: 119.99,
    discount_percentage: 25,
    rating: 4.5,
    review_count: 1120,
    stock_quantity: 45,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    specifications: { "Display": "1.43\" Color screen", "Water Resistance": "5 ATM" },
    created_at: "2026-06-21T15:00:00Z"
  },
  {
    id: "prod-37",
    name: "Monitor Light Bar",
    slug: "monitor-light-bar-xiaomi",
    description: "Space-saving desk lamp that hangs on the monitor, providing glare-free desk surface illumination.",
    brand: "Xiaomi",
    category_id: "cat-1",
    price: 39.99,
    original_price: 49.99,
    discount_percentage: 20,
    rating: 4.7,
    review_count: 630,
    stock_quantity: 30,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    specifications: { "Power Source": "USB Type-C", "Brightness Control": "Wireless Remote" },
    created_at: "2026-06-21T16:00:00Z"
  },
  {
    id: "prod-38",
    name: "Ring Light Kit",
    slug: "ring-light-kit-neewer",
    description: "18-inch LED dimmable ring light kit with stand, hot shoe adapter, and smartphone holder.",
    brand: "Neewer",
    category_id: "cat-1",
    price: 29.99,
    original_price: 39.99,
    discount_percentage: 25,
    rating: 4.6,
    review_count: 1450,
    stock_quantity: 50,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: false,
    is_deal_of_day: true,
    is_trending: false,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    specifications: { "Outer Diameter": "18 Inches", "Dimmable Range": "1% - 100%" },
    created_at: "2026-06-21T17:00:00Z"
  },
  {
    id: "prod-39",
    name: "USB Hub 7-Port",
    slug: "usb-hub-7-port-ugreen",
    description: "Multiport USB 3.0 data hub with individual power switches and LED status indicators.",
    brand: "UGREEN",
    category_id: "cat-1",
    price: 22.99,
    original_price: 29.99,
    discount_percentage: 23,
    rating: 4.5,
    review_count: 870,
    stock_quantity: 75,
    is_in_stock: true,
    is_bestseller: false,
    is_new_arrival: true,
    is_deal_of_day: false,
    is_trending: true,
    is_sponsored: false,
    fast_delivery: true,
    image_url: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=600&q=80",
    specifications: { "USB Ports": "7 USB 3.0 Ports", "Transfer Rate": "Up to 5 Gbps" },
    created_at: "2026-06-21T17:30:00Z"
  }
];

// Append Category objects for runtime access where product.categories is expected
mockProducts.forEach(p => {
  p.categories = mockCategories.find(c => c.id === p.category_id);
});

// Helper function to simulate Supabase database filtering and sorting
function getFilteredMockProducts(options?: Parameters<typeof useProducts>[0]) {
  let list = [...mockProducts];
  
  if (options?.categorySlug) {
    const category = mockCategories.find(c => c.slug === options.categorySlug);
    if (category) {
      list = list.filter(p => p.category_id === category.id);
    } else {
      return [];
    }
  }
  
  if (options?.search) {
    const s = options.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s));
  }
  
  if (options?.minPrice !== undefined) {
    list = list.filter(p => p.price >= options.minPrice!);
  }
  if (options?.maxPrice !== undefined) {
    list = list.filter(p => p.price <= options.maxPrice!);
  }
  if (options?.minRating) {
    list = list.filter(p => p.rating >= options.minRating!);
  }
  
  if (options?.bestseller) list = list.filter(p => p.is_bestseller);
  if (options?.newArrival) list = list.filter(p => p.is_new_arrival);
  if (options?.dealOfDay) list = list.filter(p => p.is_deal_of_day);
  if (options?.trending) list = list.filter(p => p.is_trending);
  if (options?.sponsored) list = list.filter(p => p.is_sponsored);
  
  if (options?.sortBy) {
    switch (options.sortBy) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        list.sort((a, b) => b.review_count - a.review_count);
        break;
      case "newest":
      default:
        // sort by newest date
        list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
    }
  } else {
    list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }
  
  if (options?.limit) {
    list = list.slice(0, options.limit);
  }
  
  return list;
}

export function useProducts(options?: {
  categorySlug?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sortBy?: string;
  limit?: number;
  bestseller?: boolean;
  newArrival?: boolean;
  dealOfDay?: boolean;
  trending?: boolean;
  sponsored?: boolean;
}) {
  return useQuery({
    queryKey: ["products", options],
    queryFn: async () => {
      if (isPlaceholder) {
        return getFilteredMockProducts(options);
      }
      try {
        let query = supabase
          .from("products")
          .select("*, categories(*)")
          .eq("is_in_stock", true);

        if (options?.categorySlug) {
          const { data: category } = await supabase
            .from("categories")
            .select("id")
            .eq("slug", options.categorySlug)
            .single();
          if (category) {
            query = query.eq("category_id", category.id);
          }
        }

        if (options?.search) {
          query = query.or(
            `name.ilike.%${options.search}%,brand.ilike.%${options.search}%`
          );
        }

        if (options?.minPrice !== undefined) {
          query = query.gte("price", options.minPrice);
        }
        if (options?.maxPrice !== undefined) {
          query = query.lte("price", options.maxPrice);
        }

        if (options?.minRating) {
          query = query.gte("rating", options.minRating);
        }

        if (options?.bestseller) query = query.eq("is_bestseller", true);
        if (options?.newArrival) query = query.eq("is_new_arrival", true);
        if (options?.dealOfDay) query = query.eq("is_deal_of_day", true);
        if (options?.trending) query = query.eq("is_trending", true);
        if (options?.sponsored) query = query.eq("is_sponsored", true);

        if (options?.sortBy) {
          switch (options.sortBy) {
            case "price_asc":
              query = query.order("price", { ascending: true });
              break;
            case "price_desc":
              query = query.order("price", { ascending: false });
              break;
            case "rating":
              query = query.order("rating", { ascending: false });
              break;
            case "newest":
              query = query.order("created_at", { ascending: false });
              break;
            case "popular":
              query = query.order("review_count", { ascending: false });
              break;
            default:
              query = query.order("created_at", { ascending: false });
          }
        } else {
          query = query.order("created_at", { ascending: false });
        }

        if (options?.limit) {
          query = query.limit(options.limit);
        }

        const { data, error } = await query;
        if (error) throw error;
        if (!data || data.length === 0) {
          return getFilteredMockProducts(options);
        }
        return (data || []) as unknown as Product[];
      } catch (e) {
        console.warn("Supabase query failed, falling back to mock products:", e);
        return getFilteredMockProducts(options);
      }
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      if (isPlaceholder) {
        const mock = mockProducts.find(p => p.slug === slug);
        if (!mock) throw new Error("Product not found");
        return mock;
      }
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*, categories(*)")
          .eq("slug", slug)
          .single();
        if (error) throw error;
        return data as unknown as Product;
      } catch (e) {
        console.warn(`Supabase query for product ${slug} failed, falling back to mock:`, e);
        const mock = mockProducts.find(p => p.slug === slug);
        if (!mock) throw new Error("Product not found");
        return mock;
      }
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      if (isPlaceholder) {
        return mockCategories;
      }
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .eq("is_active", true)
          .order("sort_order");
        if (error) throw error;
        if (!data || data.length === 0) {
          return mockCategories;
        }
        return (data || []) as Category[];
      } catch (e) {
        console.warn("Supabase query for categories failed, falling back to mock:", e);
        return mockCategories;
      }
    },
  });
}

export function useBanners() {
  return useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      if (isPlaceholder) {
        return mockBanners;
      }
      try {
        const { data, error } = await supabase
          .from("banners")
          .select("*")
          .eq("is_active", true)
          .order("sort_order");
        if (error) throw error;
        if (!data || data.length === 0) {
          return mockBanners;
        }
        return (data || []) as Banner[];
      } catch (e) {
        console.warn("Supabase query for banners failed, falling back to mock:", e);
        return mockBanners;
      }
    },
  });
}

export function useRelatedProducts(categoryId: string, excludeId: string, limit = 6) {
  return useQuery({
    queryKey: ["related-products", categoryId, excludeId],
    queryFn: async () => {
      if (isPlaceholder) {
        return mockProducts.filter(p => p.category_id === categoryId && p.id !== excludeId).slice(0, limit);
      }
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("category_id", categoryId)
          .neq("id", excludeId)
          .eq("is_in_stock", true)
          .limit(limit);
        if (error) throw error;
        if (!data || data.length === 0) {
          return mockProducts.filter(p => p.category_id === categoryId && p.id !== excludeId).slice(0, limit);
        }
        return (data || []) as unknown as Product[];
      } catch (e) {
        console.warn("Supabase query for related products failed, falling back to mock:", e);
        return mockProducts.filter(p => p.category_id === categoryId && p.id !== excludeId).slice(0, limit);
      }
    },
  });
}

