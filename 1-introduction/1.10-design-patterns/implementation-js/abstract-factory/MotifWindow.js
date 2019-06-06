const Window = require('./Window');

class MotifWindow extends Window {
    constructor() {
        super();
    }

    load() {
        console.log(`Motif Window loaded.`);
    }
    
    close() {
        console.log(`Motif Window closed.`);
    }
}

module.exports = MotifWindow;
