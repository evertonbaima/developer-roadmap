class Singleton {
    constructor() {
        this.niceProperty = `I'm a nice property :D`;
    }

    get instance() {
        if (!this._instance) {
            this._instance = new Singleton();
        }

        return this._instance;
    }
}

module.exports = Singleton;