const ChampionFactory = require('./ChampionFactory');

var factory = new ChampionFactory();
var marksman = factory.summon(factory.ROLE_MARKSMAN);
var support = factory.summon(factory.ROLE_SUPPORT);

console.log(`The marksman is ${marksman.name}`);
console.log(`The support is ${support.name}`);