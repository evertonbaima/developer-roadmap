const Item = require('./Item');

class DoransBlade extends Item {
    constructor() {
        super();
        
        this.name = `Doran's Blade`;
        // TODO
    }

    clone() {
        return {
            id: this.id,
            name: this.name
        };
    }
}

module.exports = DoransBlade;