class ICarBuilder {
    constructor() {
        this.colour = '';
        this.numDoors = 0;

        if (this.getResult === undefined) {
            throw new TypeError('Classes extending the widget abstract class must implement "getResult".');
        }
    }
}

module.exports = ICarBuilder;