const Item = require('./Item');

class DoransRing extends Item {
    constructor() {
        super();
        
        this.name = `Doran's Ring`;
        // TODO
    }

    clone() {
        return {
            id: this.id,
            name: this.name
        };
    }
}

module.exports = DoransRing;