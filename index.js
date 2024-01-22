class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const product = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      };
  
      this.products.push(product);
      return product; 
    }
  
    removeProduct(code) {
      this.products = this.products.filter(product => product.code !== code);
    }
  
    getProductByCode(code) {
      return this.products.find(product => product.code === code);
    }
  
    getAllProducts() {
      return this.products;
    }
  }
  
