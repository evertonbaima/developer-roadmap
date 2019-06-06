class Window {
    constructor() {
        if (this.constructor === Window) {
            throw new TypeError('Abstract class "Window" cannot be instantiated directly.');
        }

        if (this.load === undefined) {
            throw new TypeError('Classes extending the widget abstract class must implement "load".');
        }

        if (this.close === undefined) {
            throw new TypeError('Classes extending the widget abstract class must implement "close".');
        }
    }
}

module.exports = Window;
