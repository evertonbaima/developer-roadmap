const WidgetFactory = require('./WidgetFactory');
const QtButton = require('./QtButton');
const QtWindow = require('./QtWindow');

class QtWidgetFactory extends WidgetFactory {
    constructor() {
        super();
    }

    /**
     * @returns {QtButton} Concrete Button class
     */
    createButton() {
        return new QtButton();
    }

    /**
     * @returns {QtWindow} Concrete Window class
     */
    createWindow() {
        return new QtWindow();
    }
}

module.exports = QtWidgetFactory;
