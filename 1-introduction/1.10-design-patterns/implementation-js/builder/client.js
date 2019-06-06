const FerrariBuilder = require('./FerrariBuilder');
const SportsCarBuildDirector = require('./SportsCarBuildDirector');

var builder = new FerrariBuilder();
var director = new SportsCarBuildDirector(builder);

director.construct();
var myRaceCar = builder.getResult();

console.log(myRaceCar);