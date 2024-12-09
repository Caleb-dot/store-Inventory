class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}


class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}


const milk = new PerishableProductProperties("Milk", 1.5, 10, "2024-12-31");
const yogurt = new PerishableProductProperties("Yogurt", 0.99, 20, "2024-12-15");

console.log(milk.toString());
console.log(yogurt.toString());



class ProductProperties {
    

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}


const apple = new ProductProperties("Apple", 2.5, 50);
const orange = new ProductProperties("Orange", 1.8, 30);
const products = [milk, yogurt, apple, orange];

ProductProperties.applyDiscount(products, 0.15); // Apply 15% discount


class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}


const banana = new ProductProperties("Banana", 0.5, 100);
const bread = new PerishableProductProperties("Bread", 2.0, 15, "2024-12-20");
const eggs = new ProductProperties("Eggs", 3.0, 12);

// Creating Store
const store = new Store();

// Adding Products to Store
store.addProduct(apple);
store.addProduct(orange);
store.addProduct(milk);
store.addProduct(yogurt);
store.addProduct(banana);
store.addProduct(bread);
store.addProduct(eggs);

// Displaying Inventory Value Before Discount
console.log("Total Inventory Value (Before Discount): $", store.getInventoryValue().toFixed(2));

// Applying 15% Discount
ProductProperties.applyDiscount(store.inventory, 0.15);

// Displaying Inventory Value After Discount
console.log("Total Inventory Value (After Discount): $", store.getInventoryValue().toFixed(2));

// Finding a Product by Name
const foundProduct = store.findProductByName("Milk");
if (foundProduct) {
    console.log("Found Product:", foundProduct.toString());
} else {
    console.log("Product not found.");
}