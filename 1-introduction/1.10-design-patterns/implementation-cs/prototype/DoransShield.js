const Item = require('./Item');

class DoransShield extends Item {
    constructor() {
        super();
        
        this.name = `Doran's Shield`;
        // TODO
    }

    clone() {
        return {
            id: this.id,
            name: this.name
        };
    }
}

module.exports = DoransShield;