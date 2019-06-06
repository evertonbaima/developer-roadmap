const Order = require('./Order');
const Customer = require('./Customer');
const Address = require('./Address');
const Pizza = require('./Pizza');

class OrderBuilder {
    constructor() {
        this.customer = new Customer();
        this.pizza = null;
        this.allPizzas = [];
    }

    /**
     * 
     * @param {string} customerName 
     * @return {OrderBuilder}
     */
    to(customerName) {
        this.customer.name = customerName;
        return this;
    }

    /**
     * 
     * @param {string} street 
     * @param {number} number 
     */
    at(street, number) {
        this.customer.address = new Address(street, number);
        return this;
    }

    /**
     * 
     * @param {string} size 
     * @return {OrderBuilder}
     */
    addPizza(size) {
        this.pizza = new Pizza(size);
        this.allPizzas.push(this.pizza);

        return this;
    }

    /**
     * @param {Boolean} value
     * @return {OrderBuilder}
     */
    withCheese(value) {
        this.pizza.cheese = (typeof(value) === 'boolean' ? value : true);
        return this;
    }

    /**
     * 
     * @return {OrderBuilder}
     */
    withoutCheese() {
        this.pizza.cheese = false;
        return this;
    }

    /**
     * @param {Boolean} value
     * @return {OrderBuilder}
     */
    withTomato(value) {
        this.pizza.tomato = (typeof(value) === 'boolean' ? value : true);
        return this;
    }

    /**
     * 
     * @return {OrderBuilder}
     */
    withoutTomato() {
        this.pizza.tomato = false;
        return this;
    }

    /**
     * @param {Boolean} value
     * @return {OrderBuilder}
     */
    withBacon(value) {
        this.pizza.bacon = (typeof(value) === 'boolean' ? value : true);
        return this;
    }

    /**
     * 
     * @return {OrderBuilder}
     */
    withoutBacon() {
        this.pizza.bacon = false;
        return this;
    }

    /**
     * 
     */
    finish() {
        return new Order(this.customer, this.allPizzas);
    }
}

module.exports = OrderBuilder;