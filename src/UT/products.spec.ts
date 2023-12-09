import { ProductStore, Product } from "../models/products";

const store = new ProductStore();

describe("Test product model methods", () => {
  it("should create a new product", async () => {
    const newProduct: Product = {
      name: "Macbook",
      price: 200000,
      category: "Laptop",
    };
    const createdProduct = await store.createProduct(newProduct);
    expect(createdProduct.name).toBe(newProduct.name);
    expect(createdProduct.price).toBe(newProduct.price);
    expect(createdProduct.category).toBe(newProduct.category);
    // Add more assertions based on your data model and expectations
  });

  it("should fetch all products", async () => {
    // Create some test products in the database
    const product1: Product = {
      name: "Product1",
      price: 100,
      category: "Category1",
    };
    const product2: Product = {
      name: "Product2",
      price: 200,
      category: "Category2",
    };
    await store.createProduct(product1);
    await store.createProduct(product2);

    // Fetch all products
    const products = await store.index();
    expect(products.length).toBeGreaterThanOrEqual(2);
    // Add more assertions based on your data model and expectations
  });

  it("should fetch product info by ID", async () => {
    // Create a test product in the database
    const newProduct: Product = {
      name: "Test Product",
      price: 300,
      category: "TestCategory",
    };
    const createdProduct = await store.createProduct(newProduct);

    // Fetch product info by ID
    const fetchedProduct = await store.showProductInfo(createdProduct.id);
    expect(fetchedProduct.name).toBe(newProduct.name);
    expect(fetchedProduct.price).toBe(newProduct.price);
    expect(fetchedProduct.category).toBe(newProduct.category);
    // Add more assertions based on your data model and expectations
  });

  // Add similar tests for other model methods (getProductByCategory, etc.)
});
