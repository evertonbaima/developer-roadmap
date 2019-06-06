function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
    
    this.bio = function () {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };

    this.greeting = function () {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
var person2 = Object.create(person1);

person1.bio();
person2.bio();
