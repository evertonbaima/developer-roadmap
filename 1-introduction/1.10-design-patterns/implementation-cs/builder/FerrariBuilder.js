const ICarBuilder = require('./ICarBuilder');
const Car = require('./Car');

class FerrariBuilder extends ICarBuilder {
    constructor() {
        super();
    }

    getResult() {
        return this.numDoors === 2 ? new Car('Ferrari', '488 Spider', this.colour, this.numDoors) : null;
    }
}

module.exports = FerrariBuilder;