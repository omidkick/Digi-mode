import { create } from "zustand";
import { ProductType, ProductsType } from "@/types";
import { products as mockProducts } from "@/data/mockData";

// Define the Product Store State and Actions
type ProductStoreState = {
  products: ProductsType;
  isLoading: boolean;
  error: string | null;
};

type ProductStoreActions = {
  // Get single product by ID
  getProductById: (id: string | number) => ProductType | undefined;
  
  // Get all products
  getAllProducts: () => ProductsType;
  
  // Get products by category
  getProductsByCategory: (category: string) => ProductsType;
  
  // Initialize products (simulate API call)
  initializeProducts: () => Promise<void>;
};

const useProductStore = create<ProductStoreState & ProductStoreActions>()(
  (set, get) => ({
    // Initial State
    products: [],
    isLoading: false,
    error: null,

    // Get single product by ID
    getProductById: (id: string | number) => {
      const { products } = get();
      return products.find((product) => product.id === id || product.id === Number(id));
    },

    // Get all products
    getAllProducts: () => {
      return get().products;
    },

    // Get products by category
    getProductsByCategory: (category: string) => {
      const { products } = get();
      if (category === "all") return products;
      return products.filter((product) => product.category === category);
    },

    // Initialize products (simulate API call - can replace with real API later)
    initializeProducts: async () => {
      try {
        set({ isLoading: true, error: null });

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        // For now, we're loading from mock data
        // Later, you can replace this with: const response = await fetch('/api/products');
        // const data = await response.json();
        
        set({ 
          products: mockProducts,
          isLoading: false 
        });
      } catch (error) {
        set({
          error: error instanceof Error ? error.message : "Failed to load products",
          isLoading: false,
        });
      }
    },
  })
);

export default useProductStore;