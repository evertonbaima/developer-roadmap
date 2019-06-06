const Champion = require('./Champion');

class SupportChampion extends Champion {
    constructor() {
        super();

        this.name = 'Rakan';
        this.ap = 32;
        this.ad = 11;
    }
}

module.exports = SupportChampion;