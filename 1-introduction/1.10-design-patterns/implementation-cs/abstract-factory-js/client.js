const QtWidgetFactory = require('./QtWidgetFactory');
const MotifWidgetFactory = require('./MotifWidgetFactory');

var factory = null;
var window = null;
var button = null;

console.log('-- QtWidgetFactory -------------------------------');
factory = new QtWidgetFactory();
window = factory.createWindow();
button = factory.createButton();

window.load();
button.click();
window.close();

console.log('-- MotifWidgetFactory ----------------------------');
factory = new MotifWidgetFactory();
window = factory.createWindow();
button = factory.createButton();

window.load();
button.click();
window.close();
