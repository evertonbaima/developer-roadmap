const Button = require('./Button');

class MotifButton extends Button {
    constructor() {
        super();
    }

    click() {
        console.log(`Motif Button clicked.`);
    }
}

module.exports = MotifButton;
