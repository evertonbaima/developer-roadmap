const Address = require('./Address');

class Customer {
    constructor(name) {
        this.name = name;
        this.address = new Address();
        this.phone = null;
    }
}

module.exports = Customer;