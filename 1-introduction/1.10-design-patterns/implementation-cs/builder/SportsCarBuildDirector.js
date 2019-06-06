class SportsCarBuildDirector {
    constructor(builder) {
        this._builder = builder;
    }

    construct() {
        this._builder.colour = 'Red';
        this._builder.numDoors = 2;
    }
}

module.exports = SportsCarBuildDirector;