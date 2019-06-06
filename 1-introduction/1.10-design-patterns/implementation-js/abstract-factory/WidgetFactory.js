class WidgetFactory {
    constructor() {
        if (this.constructor === WidgetFactory) {
            throw new TypeError('Abstract class "WidgetFactory" cannot be instantiated directly.');
        }

        if (this.createButton === undefined) {
            throw new TypeError('Classes extending the widget abstract class must implement "createButton".');
        }

        if (this.createWindow === undefined) {
            throw new TypeError('Classes extending the widget abstract class must implement "createWindow".');
        }
    }
}

module.exports = WidgetFactory;
