const Window = require('./Window');

class QtWindow extends Window {
    constructor() {
        super();
    }

    load() {
        console.log(`Qt Window loaded.`);
    }
    
    close() {
        console.log(`Qt Window closed.`);
    }
}

module.exports = QtWindow;
