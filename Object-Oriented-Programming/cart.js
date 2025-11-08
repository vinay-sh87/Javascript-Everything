class Product {
    #id;
    #name;
    #price;
    #description;
    #stockQuantity;

    constructor(id, name, price, description, stockQuantity = 0) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#description = description;
        this.#stockQuantity = stockQuantity;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get price() { return this.#price; }
    get description() { return this.#description }
    get stockQuantity() { return this.#stockQuantity }

    updateStock(quantity) {
        if (this.#stockQuantity + quantity < 0) {
            throw new Error("Insufficient stock");
        }
        this.#stockQuantity += quantity;
    }
    isAvailable() {
        return this.#stockQuantity > 0;
    }
    getProductType() {
        throw new Error("product type not defined");
    }
    displayInfo() {
        return `${this.#name} - $${this.#price} (${this.isAvailable() ? 'In Stock' : 'Out of Stock'})`;
    }

}

class Electronics extends Product {
    #warrentyPeriod;
    #brand;
    constructor(id, name, price, description, stockQuantity, warrentyPeriod, brand) {
        super(id, name, price, description, stockQuantity);
        this.#warrentyPeriod = warrentyPeriod;
        this.#brand = brand;
    }
    getProductType() { return "Electronics" }
    displayInfo() {
        return `${super.displayInfo()} - Brand: ${this.#brand} ${this.#warrentyPeriod} months warranty`;
    }

}

class Clothing extends Product {
    #size;
    #color;
    #material;
    constructor(id, name, price, description, stockQuantity, size, color, material) {
        super(id, name, price, description, stockQuantity);
        this.#size = size;
        this.#color = color;
        this.#material = material;
    }
    getProductType() { return "Clothing" }
    displayInfo() {
        return `${super.displayInfo()} - Size: ${this.#size} Color: ${this.#color} Material: ${this.#material}`;
    }
}

class ShoppingCart {
    #items;
    constructor() {
        this.#items = new Map();
    }
    addItem(product, quantity) {
        if (!product.isAvailable()) {
            throw new Error("Product is not available");
        }
        if (quantity > product.stockQuantity) {
            throw new Error("Insufficient stock");
        }
        if (this.#items.get(product.id)) {
            this.#items.get(product.id).quantity += quantity;
        } else {
            this.#items.set(product.id, { product, quantity });
        }
    }
    removeItem(product, quantity = null) {
        if (!this.#items.get(product.id)) return false;
        if (this.#items.get(product.id).quantity < quantity) return false;
        if (quantity === null || quantity >= this.#items.get(product.id).quantity) {
            this.#items.delete(product.id);
        }
        else {
            this.#items.get(product.id).quantity -= quantity;
        }
        return true;
    }
    getTotal() {
        let total = 0;
        for (const item of this.#items.values()) {
            total += item.product.price * item.quantity;
        }
        return total;
    }
    getItems() {
        return Array.from(this.#items.values());
    }
    clear() {
        this.#items.clear();
    }
    isEmpty() {
        return this.#items.size === 0;
    }
}

class Order {
    #orderId;
    #customer;
    #items;
    #orderDate;
    #status;
    #totalAmount;

    static #nextOrderId = 1;

    constructor(customer, cart) {
        this.#orderId = Order.#nextOrderId++;
        this.#customer = customer;
        this.#items = new Map(cart.getItems().map(item => [item.product.id, { ...item }])); this.#orderDate = new Date();
        this.#status = "pending";
        this.#totalAmount = cart.getTotal();
    }

    processPayment() {
        this.#status = "paid";
        for (const item of this.#items.values()) {
            item.product.updateStock(-item.quantity);
        }
        return true;
    }

    shipOrder() {
        if (this.#status !== "paid") {
            throw new Error("Can't ship order that is not paid");
        }
        this.#status = "shipped";
        return true;
    }

    getOrderSummery() {
        return {
            orderId: this.#orderId,
            customer: this.#customer,
            items: Array.from(this.#items.values()),
            orderDate: this.#orderDate,
            status: this.#status,
            totalAmount: this.#totalAmount
        };
    }
}

class Customer {
    #customerId;
    #name;
    #email;
    #address;
    #orderHistory;

    static #nextCustomerId = 1;
    constructor(name, email, address) {
        this.#customerId = Customer.#nextCustomerId++;
        this.#name = name;
        this.#email = email;
        this.#address = address;
        this.#orderHistory = [];
    }

    placeOrder(cart) {
        if (cart.isEmpty()) {
            throw new Error("Can't place order with empty cart");
        }
        const order = new Order(this, cart);
        if (order.processPayment()) {
            this.#orderHistory.push(order);
            cart.clear();
            return order;
        }
        throw new Error("Payment Failed");
    }
    getOrderHistory() {
        return this.#orderHistory.map(order => order.getOrderSummery());
    }

    // getters 
    get customerId() { return this.#customerId; }
    get name() { return this.#name; }
    get email() { return this.#email; }
    get address() { return this.#address; }
}

class ECommerceStore {
    static #instance = null;
    #customers;
    #products;

    constructor() {
        if (ECommerceStore.#instance) {
            return ECommerceStore.#instance;
        }

        this.#products = new Map();
        this.#customers = new Map();
        ECommerceStore.#instance = this;
    }
    static getInstance() {
        if (!ECommerceStore.#instance) {
            ECommerceStore.#instance = new ECommerceStore();
        }
        return ECommerceStore.#instance;
    }

    // product management
    addProduct(product) {
        this.#products.set(product.id, product);
    }
    getProduct(productId) {
        return this.#products.get(productId);
    }
    getAllProducts() {
        return Array.from(this.#products.values());
    }
    getAvailableProducts() {
        return this.getAllProducts().filter(product => product.isAvailable());
    }

    // customer management
    registerCustomer(name, email, address) {
        const customer = new Customer(name, email, address);
        this.#customers.set(customer.customerId, customer);
        return customer;
    }

    getCustomer(customerId) {
        return this.#customers.get(customerId);
    }
}

const product = new Product(2, "Phone", 30000, "Nothing Phone", 3);
const product1 = new Product(3, "Laptop", 120000, "Acer Predator", 2);
const customer = new Customer("Vinay Sharma", 'vin@gmail.com', 'address');
const cart = new ShoppingCart();
cart.addItem(product, 2);
cart.addItem(product1, 1);
const store = ECommerceStore.getInstance();
store.addProduct(product);
store.addProduct(product1);
store.registerCustomer(customer.name, customer.email, customer.address);
const order = customer.placeOrder(cart);
console.log(order.getOrderSummery().items[0].product.displayInfo());
console.log(order.getOrderSummery().items[1].product.displayInfo());
console.log(order.getOrderSummery().totalAmount);
console.log(order.getOrderSummery().status);