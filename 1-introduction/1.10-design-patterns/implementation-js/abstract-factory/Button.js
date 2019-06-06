class Button {
    constructor() {
        if (this.constructor === Button) {
            throw new TypeError('Abstract class "WidgetFactory" cannot be instantiated directly.');
        }

        if (this.click === undefined) {
            throw new TypeError('Classes extending the widget abstract class must implement "click".');
        }
    }
}

module.exports = Button;
