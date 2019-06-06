const ItemFactory = require('./ItemFactory');

var factory = new ItemFactory();

var firstDoransBlade = factory.buy(factory.ITEM_DORANS_BLADE);
var firstDoransRing = factory.buy(factory.ITEM_DORANS_RING);
var firstDoransShield = factory.buy(factory.ITEM_DORANS_SHIELD);

var secondDoransBlade = factory.buy(factory.ITEM_DORANS_BLADE);
var secondDoransRing = factory.buy(factory.ITEM_DORANS_RING);
var secondDoransShield = factory.buy(factory.ITEM_DORANS_SHIELD);

var thirdDoransBlade = factory.buy(factory.ITEM_DORANS_BLADE);
var thirdDoransRing = factory.buy(factory.ITEM_DORANS_RING);
var thirdDoransShield = factory.buy(factory.ITEM_DORANS_SHIELD);

console.log({
    first: {
        firstDoransBlade,
        firstDoransRing,
        firstDoransShield
    }
});

console.log({
    second: {
        secondDoransBlade,
        secondDoransRing,
        secondDoransShield
    }
});

console.log({
    third: {
        thirdDoransBlade,
        thirdDoransRing,
        thirdDoransShield
    }
});