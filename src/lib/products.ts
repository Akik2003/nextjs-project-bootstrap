export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

// Sample product data based on Giftlaya.com research
const sampleProducts: Product[] = [
  // Cakes
  {
    id: "1",
    title: "Red Velvet Cake",
    description: "Delicious red velvet cake with cream cheese frosting, perfect for celebrations and special occasions.",
    price: 899,
    category: "cakes",
    imageUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    rating: 4.8,
    reviews: 156
  },
  {
    id: "2",
    title: "Chocolate Truffle Cake",
    description: "Rich chocolate truffle cake with dark chocolate ganache and chocolate shavings.",
    price: 1299,
    category: "cakes",
    imageUrl: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    rating: 4.9,
    reviews: 203
  },
  {
    id: "3",
    title: "Vanilla Birthday Cake",
    description: "Classic vanilla sponge cake with buttercream frosting, ideal for birthday celebrations.",
    price: 699,
    category: "cakes",
    imageUrl: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "4",
    title: "Black Forest Cake",
    description: "Traditional black forest cake with cherries, whipped cream, and chocolate sponge.",
    price: 1099,
    category: "cakes",
    imageUrl: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg",
    rating: 4.7,
    reviews: 134
  },

  // Flowers
  {
    id: "5",
    title: "Red Rose Bouquet",
    description: "Beautiful bouquet of 12 fresh red roses, perfect for expressing love and romance.",
    price: 469,
    category: "flowers",
    imageUrl: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
    rating: 4.5,
    reviews: 78
  },
  {
    id: "6",
    title: "Mixed Flower Arrangement",
    description: "Colorful mixed flower arrangement with lilies, roses, and seasonal blooms.",
    price: 799,
    category: "flowers",
    imageUrl: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
    rating: 4.6,
    reviews: 92
  },
  {
    id: "7",
    title: "White Lily Bouquet",
    description: "Elegant white lily bouquet symbolizing purity and new beginnings.",
    price: 599,
    category: "flowers",
    imageUrl: "https://images.pexels.com/photos/1068855/pexels-photo-1068855.jpeg",
    rating: 4.4,
    reviews: 67
  },

  // Gifts
  {
    id: "8",
    title: "Personalized Photo Frame",
    description: "Custom photo frame with personalized engraving, perfect for memorable moments.",
    price: 349,
    category: "gifts",
    imageUrl: "https://images.pexels.com/photos/1749900/pexels-photo-1749900.jpeg",
    rating: 4.3,
    reviews: 45
  },
  {
    id: "9",
    title: "Chocolate Gift Box",
    description: "Premium chocolate gift box with assorted handcrafted chocolates and truffles.",
    price: 899,
    category: "gifts",
    imageUrl: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
    rating: 4.7,
    reviews: 112
  },
  {
    id: "10",
    title: "Customized Mug",
    description: "Personalized ceramic mug with custom text and design, great for daily use.",
    price: 299,
    category: "gifts",
    imageUrl: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg",
    rating: 4.2,
    reviews: 38
  },

  // Decorations
  {
    id: "11",
    title: "Birthday Decoration Kit",
    description: "Complete birthday decoration kit with balloons, banners, and party accessories.",
    price: 599,
    category: "decorations",
    imageUrl: "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg",
    rating: 4.5,
    reviews: 73
  },
  {
    id: "12",
    title: "Anniversary Decoration Set",
    description: "Romantic anniversary decoration set with candles, flowers, and elegant accessories.",
    price: 1299,
    category: "decorations",
    imageUrl: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg",
    rating: 4.8,
    reviews: 95
  }
];

// Data fetching functions with error handling
export async function getAllProducts(): Promise<Product[]> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return sampleProducts;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    const filteredProducts = sampleProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
    return filteredProducts;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw new Error(`Failed to fetch products for category: ${category}`);
  }
}

export async function getProductById(productId: string): Promise<Product | null> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    const product = sampleProducts.find(product => product.id === productId);
    return product || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw new Error(`Failed to fetch product with ID: ${productId}`);
  }
}

export function getCategories(): string[] {
  const categories = Array.from(new Set(sampleProducts.map(product => product.category)));
  return categories;
}
