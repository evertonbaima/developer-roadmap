const Champion = require('./Champion');

class MarksmanChampion extends Champion {
    constructor() {
        super();

        this.name = 'Xahya';
        this.ap = 12;
        this.ad = 31;
    }
}

module.exports = MarksmanChampion;