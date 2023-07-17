class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(product) {
      if (!this.isValidProduct(product)) {
        console.log('Error: Invalid product data');
        return;
      }
  
      if (this.isDuplicateCode(product.code)) {
        console.log('Error: Duplicate product code');
        return;
      }
  
      const newProduct = { ...product, id: ++this.lastProductId };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.log('Error: Product not found');
      }
      return product;
    }
  
    isValidProduct(product) {
      return (
        product.title &&
        product.description &&
        product.price &&
        product.thumbnail &&
        product.code &&
        product.stock
      );
    }
  
    isDuplicateCode(code) {
      return this.products.some(product => product.code === code);
    }
  }


  const manager = new ProductManager();

// Agregar productos
manager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 10,
  thumbnail: 'ruta/imagen1.jpg',
  code: 'P1',
  stock: 5
});

manager.addProduct({
  title: 'Producto 2',
  description: 'Descripción del producto 2',
  price: 15,
  thumbnail: 'ruta/imagen2.jpg',
  code: 'P2',
  stock: 8
});

// Obtener todos los productos
const products = manager.getProducts();
console.log(products);

// Obtener un producto por su ID
const product = manager.getProductById(1);
console.log(product);

// Obtener un producto inexistente por su ID
const nonExistingProduct = manager.getProductById(999);
