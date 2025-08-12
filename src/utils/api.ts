import axios from 'axios';
import { Product } from '../context/CartContext';

const API_BASE_URL = 'https://dummyjson.com';

// Beauty-related keywords to filter products
const BEAUTY_KEYWORDS = [
  'essence', 'mascara', 'lipstick', 'foundation', 'concealer', 'eyeliner',
  'eyeshadow', 'blush', 'bronzer', 'highlighter', 'powder', 'cream',
  'serum', 'moisturizer', 'cleanser', 'toner', 'mask', 'scrub',
  'perfume', 'cologne', 'fragrance', 'beauty', 'cosmetic', 'makeup',
  'skincare', 'hair', 'nail', 'brush', 'sponge', 'mirror'
];

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    console.log('Fetching products from API...');
    const response = await api.get('/products');
    console.log('API Response structure:', Object.keys(response.data));
    
    const allProducts = response.data.products;
    console.log('Total products received:', allProducts?.length || 0);
    
    if (!allProducts || allProducts.length === 0) {
      console.log('No products found in API response');
      return [];
    }
    
    // Log the first product to see its structure
    if (allProducts.length > 0) {
      console.log('First product structure:', Object.keys(allProducts[0]));
      console.log('First product:', allProducts[0]);
    }
    
    // For now, let's return all products without filtering to see if the API is working
    console.log('Returning all products without beauty filter');
    return allProducts;
    
    // Comment out the beauty filter for now to debug
    /*
    // Filter products to only include beauty/cosmetic related items
    const beautyProducts = allProducts.filter((product: Product) => {
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      const category = product.category.toLowerCase();
      const brand = product.brand.toLowerCase();
      
      return BEAUTY_KEYWORDS.some(keyword => 
        title.includes(keyword) || 
        description.includes(keyword) || 
        category.includes(keyword) || 
        brand.includes(keyword)
      );
    });
    
    console.log('Beauty products filtered:', beautyProducts.length);
    return beautyProducts;
    */
  } catch (error: any) {
    console.error('Error fetching products:', error?.message || error || 'Unknown error');
    return [];
  }
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching product:', error?.message || error || 'Unknown error');
    return null;
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
    const allProducts = response.data.products;
    
    // Apply beauty filter to search results
    const beautyProducts = allProducts.filter((product: Product) => {
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      const category = product.category.toLowerCase();
      const brand = product.brand.toLowerCase();
      
      return BEAUTY_KEYWORDS.some(keyword => 
        title.includes(keyword) || 
        description.includes(keyword) || 
        category.includes(keyword) || 
        brand.includes(keyword)
      );
    });
    
    return beautyProducts;
  } catch (error: any) {
    console.error('Error searching products:', error?.message || error || 'Unknown error');
    return [];
  }
};
