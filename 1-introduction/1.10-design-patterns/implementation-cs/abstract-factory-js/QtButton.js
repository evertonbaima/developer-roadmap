const Button = require('./Button');

class QtButton extends Button {
    constructor() {
        super();
    }

    click() {
        console.log(`Qt Button clicked.`);
    }
}

module.exports = QtButton;
