const OrderBuilder = require('./OrderBuilder');

const order1 = new OrderBuilder()
                .to('Garen')
                    .at('Demacia', 1325)
                .addPizza('large')
                    .withCheese(true)
                    .withTomato(true)
                    .withBacon(false)
                .finish();

const order2 = new OrderBuilder()
                .to('Sivir')
                    .at('Shurima', 7)
                .addPizza('small')
                    .withoutCheese()
                    .withTomato()
                    .withoutBacon()
                .addPizza('medium')
                    .withCheese()
                    .withoutTomato()
                    .withBacon()
                .finish();

const order3 = new OrderBuilder()
                .to('Taric')
                    .at('Mt. Targon', 999999999)
                .addPizza('giant')
                    .withCheese()
                    .withTomato()
                    .withBacon()
                .addPizza('small')
                    .withoutCheese()
                    .withTomato()
                    .withoutBacon()
                .addPizza('small')
                    .withCheese()
                    .withoutTomato()
                    .withBacon()
                .finish();

console.log(order1.toString());
console.log('');
console.log(order2.toString());
console.log('');
console.log(order3.toString());