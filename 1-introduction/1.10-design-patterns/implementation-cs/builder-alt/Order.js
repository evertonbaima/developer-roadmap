const Customer = require('./Customer');
const Pizza = require('./Pizza');

class Order {
    /**
     * 
     * @param {Customer} customer 
     * @param {Pizza[]} pizzas 
     */
    constructor(customer, pizzas) {
        this.customer = customer;
        this.pizzas = pizzas;
    }

    toString() {
        var str = `To ${this.customer.name}, at ${this.customer.address.street} ${this.customer.address.number}:`;

        for (var i = 0; i < this.pizzas.length; i++) {
            var item = this.pizzas[i];
            var opt = [];
            item.cheese && opt.push('cheese');
            item.tomato && opt.push('tomato');
            item.bacon && opt.push('bacon');

            str += `\n  - a ${item.size} pizza ${opt.length ? `with ${opt.join(', and ')};` : 'without additionals;'}`
        }

        return str;
    }
}

module.exports = Order;