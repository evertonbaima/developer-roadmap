class Item {
    constructor() {
        this.id = new Date().getTime();
        
        if (this.constructor === Item) {
            throw new TypeError('Abstract class "Item" cannot be instantiated directly.');
        }

        if (this.clone === undefined) {
            throw new TypeError('Classes extending the Item abstract class must implement "clone".');
        }
    }
}

module.exports = Item;