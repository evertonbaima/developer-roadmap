class Pizza {
    /**
     * 
     * @param {number} size 
     */
    constructor(size) {
        this.size = size;
        this.cheese = false;
        this.tomato = false;
        this.bacon = false;
    }
}

module.exports = Pizza;