const Item = require('./Item');
const DoransBlade = require('./DoransBlade');
const DoransRing = require('./DoransRing');
const DoransShield = require('./DoransShield');

class ItemFactory {
    constructor() {
        this.ITEM_DORANS_BLADE = 'DORANS_BLADE';
        this.ITEM_DORANS_RING = 'DORANS_RING';
        this.ITEM_DORANS_SHIELD = 'DORANS_SHIELD';

        this._DORANS_BLADE = new DoransBlade();
        this._DORANS_RING = new DoransRing();
        this._DORANS_SHIELD = new DoransShield();
    }

    /**
     * @param {string} item Initial item.
     * @returns {Item} New champion.
     */
    buy(item) {
        switch (item) {
            case this.ITEM_DORANS_BLADE:
                return this._DORANS_BLADE.clone();
            case this.ITEM_DORANS_RING:
                return this._DORANS_RING.clone();
            case this.ITEM_DORANS_SHIELD:
                return this._DORANS_SHIELD.clone();
            default:
                throw new NotSupportedException();
        }
    }
}

module.exports = ItemFactory;