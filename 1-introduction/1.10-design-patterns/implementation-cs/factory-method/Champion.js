class Champion {
    constructor() {
        if (this.constructor === Champion) {
            throw new TypeError('Abstract class "Champion" cannot be instantiated directly.');
        }
    }
}

module.exports = Champion;