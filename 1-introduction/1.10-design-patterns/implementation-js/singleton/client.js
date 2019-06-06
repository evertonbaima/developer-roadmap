const Singleton = require('./Singleton');

var instanceA = Singleton.instance;
var instanceB = Singleton.instance;

console.log('instanceA', instanceA.niceProperty);
console.log('instanceB', instanceB.niceProperty);

console.log('-----');

instanceB.niceProperty = `Sometimes I may change >:)`;

console.log('instanceA', instanceA.niceProperty);
console.log('instanceB', instanceB.niceProperty);
