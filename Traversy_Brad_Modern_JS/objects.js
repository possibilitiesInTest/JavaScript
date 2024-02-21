function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (xp) {
    this.points += xp;

    if(this.points >= 10) 
    {   this.lvl++;
        this.points -= 10;
    }
}

Player.prototype.describe = function(){
    return `${this.name} is level ${this.lvl} with ${this.points}
    experience points`;
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(5);
player2.gainXp(1);
player1.gainXp(7);
player2.gainXp(9);
player1.gainXp(5);
player2.gainXp(2);

console.log(player1.describe());
console.log(player2.describe());






























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

