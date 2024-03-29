class Wallet {
    #balance = 0;
    #transactions = [];


    constructor() {
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount) {
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdraw(amount) {
        if(amount >= this.#balance){
            console.log('Not enough funds');
            return;
        }
        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount) {
        console.log(`Depositng ${amount}`);

        this._transactions.push({
            type: 'deposit',
            amount 
        })
    }

    #processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`);

        this._transactions.push({
            type: 'withdraw',
            amount 
        })
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions;
    }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
// console.log(wallet._balance);
// console.log(wallet.balance);
// console.log(wallet.transactions);

// console.log(wallet.#balance);
console.log(wallet.transactions);






































// // Constructor function
// function Person (firstName, lastName){
//     this._firstName = firstName;
//     this._lastName = lastName;

//     Object.defineProperty(this, 'firstName', {
//         get: function () {
//             return this.captializeFirst(this._firstName);
//         },
//         set: function (value) {
//             this._firstName = value;
//         }
//     });

//     Object.defineProperty(this, 'lastName', {
//         get: function () {
//             return this.captializeFirst(this._lastName);
//         },
//         set: function (value) {
//             this._lasstName = value;
//         }
//     });

//     Object.defineProperty(this, 'fullName', {
//         get: function () {
//             return this.firstName + " " + this.lastName;
//         },
//     });

// }

// Person.prototype.captializeFirst = function(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
// };

// //Object literal
// const PersonObj = {
//     _firstName: 'jane',
//     _lastName: 'doe',

//     get firstName() {
//         return Person.prototype.captializeFirst(this._firstName)
//     },

//     set firstName(value) {
//         this._firstName = value;
//     },

//     get lastName() {
//         return Person.prototype.captializeFirst(this._lastName);
//     },

//     set lastName(value) {
//         this._lastName = value;
//     },
   
//     get fullName() {
//         return this._firstName +  " " + this.lastName;
//     }
// }

// const person1 = new Person('john', 'doe');
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);

// const person2 = new Person('jane', 'dough');
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.fullName);





























// class Person {
//     constructor (firstName, lastName) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get firstName() {
//         // return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
//         return this.captializeFirst(this._firstName);
//     }

//     set firstName(value) {
//         this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
//     }

//     get lastName() {
//         // return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
//         return this.captializeFirst(this._lastName);
//     }

//     set lastName(value) {
//         this._lastName = value.charAt(0).toUpperCase() + value.slice(1);
//     }

//     captializeFirst(value) {
//         return value.charAt(0).toUpperCase() + value.slice(1);
//     }

//     get fullName() {
//         return `${this.firstName} ${this._lastName}`;
//     }
// }


// const person1 = new Person('john', 'doe');
// console.log(person1.firstName);
// console.log(person1.lastName);


// person1.firstName = 'joseph';
// person1.lastName = 'smith';
// console.log(person1);
// console.log(person1.fullName);

































// class App {
//     constructor() {
//         this.serverName = 'localhost';

//         document.querySelector('button').addEventListener('Click', this.getServerName.bind(this));
//     }

//     getServerName() {
//         console.log(this.serverName);
//     }
// }

// const app = new App();
// // app.getServerName();




































// class Rectangle {
//     constructor(name, height, width) {
//         this.name = name;
//         this.height = height;
//         this.width = width;
//     }

//     area() {
//         return this.height * this.width;
//     }

//     static getClass() {
//         return 'Rectangle';
//     }
// }


// const rect = new Rectangle('Rect', 10, 10);
// console.log(rect.area());
// console.log(Rectangle.getClass());











































// // Parent class
// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

//     logName() {
//         console.log('Shape name: ', this.name);
//     }
// }

// // Sub Class
// class Rectangle extends Shape {
//     constructor(name, width, height) {
//         super(name);

//         this.height = height;
//         this.width = width;
//     }
// }

// class Circle extends Shape {
//     constructor(name, radius) {
//         super(name);

//         this.readius = radius;
//     }

//     logName() {
//         console.log('Circle Name: ' + this.name)
//     }
// }




// const rect = new Rectangle('Rect 1', 20, 20);
// console.log(rect);
// rect.logName();

// const cir = new Circle('Cir 1', 30);
// cir.logName();

// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);




























// function Player(name) {
//     this.name = name;
//     this.lvl = 1;
//     this.points = 0;
// }

// Player.prototype.gainXp = function (xp) {
//     this.points += xp;

//     if(this.points >= 10) 
//     {   this.lvl++;
//         this.points -= 10;
//     }
// }

// Player.prototype.describe = function(){
//     return `${this.name} is level ${this.lvl} with ${this.points}
//     experience points`;
// }

// const player1 = new Player('Bob');
// const player2 = new Player('Alice');

// player1.gainXp(4);
// player2.gainXp(7);
// player1.gainXp(5);
// player2.gainXp(1);
// player1.gainXp(7);
// player2.gainXp(9);
// player1.gainXp(5);
// player2.gainXp(2);

// console.log(player1.describe());
// console.log(player2.describe());






























// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function() {
//         return this.width * this.height;
//     };
// }

// const rect = new Rectangle('React', 10, 10);
// console.log(rect);

// Rectangle.prototype.area = function () {
//     return (this.width * this.height);
// }

// const rectanglePrototypes = {
//     area: function () {
//         return this.width * this.height
//     },
//     perimeter: function () {
//         return 2 * (this.width + this.height)
//     },
//     isSquare: function () {
//         return (this.height === this.width)
//     }
// }


// function createRectangle(height, width) {
//     return Object.create(rectanglePrototypes, {
//         height: {
//             value: height,
//         },
//         width: {
//             value: width,
//         },
//     });
// }

// const rect = createRectangle(10, 20);
// console.log(rect);
// console.log(rect.area());
// console.log(rect.isSquare());

// const rect2 = createRectangle(20, 20);
// console.log(rect2.area());























// const strLit = 'hello';
// const strObj = new String('HELLO');

// console.log(strLit, typeof strLit);
// console.log(strObj, typeof strObj);

// console.log(strLit.toUpperCase());
// console.log(strLit[0]);

// const funcLit = function(x) {
//     return x * x;
// }

// console.log(funcLit, typeof funcLit);

// const funcObj = new Function('x', 'return x * x');

// console.log(funcObj(3));

// const obj1 = {};
// const obj2 = new Object();

// console.log(obj1, typeof obj1);
// console.log(obj2, typeof obj2);

