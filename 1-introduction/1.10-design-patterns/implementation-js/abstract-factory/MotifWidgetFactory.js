const WidgetFactory = require('./WidgetFactory');
const MotifButton = require('./MotifButton');
const MotifWindow = require('./MotifWindow');

class MotifWidgetFactory extends WidgetFactory {
    constructor() {
        super();
    }

    /**
     * @returns {MotifButton} Concrete Button class
     */
    createButton() {
        return new MotifButton();
    }

    /**
     * @returns {MotifWindow} Concrete Window class
     */
    createWindow() {
        return new MotifWindow();
    }
}

module.exports = MotifWidgetFactory;
