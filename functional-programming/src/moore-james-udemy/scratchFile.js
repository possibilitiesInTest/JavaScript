const name = 'James';

const greet(salutation, person) =>
    salutation + " " + person;

const greeting = greet('Good Day', name);

console.log(greeting);

// I'm using the "greet" function on line 3 above,
// but "greet" doesn't actually exist.
// You need to write the greet function so it returns
// 'Good Day James!'

// Destructuring && Spread Operator

const meal = {
    id: 1,
    description: 'Breakfast'
};

const updatedMeal = {
    ...meal,
    description: "Brunch",
    calories: 500
};

console.log(meal, updatedMeal);

const { description, calories } = updatedMeal;

console.log(description, calories);

const {id, ...mealWithoutId } = updatedMeal;

console.log(mealWithoutId);

////////////////////////////////////////////

const meal = {
    description: 'Dinner',
};
// 1. In an Immutable way, add a property to the
// meal called calories setting it's value to 200,
// then log the result to the console
const updatedMeal = {
    ...meal,
    calories: 200
};

console.log(updatedMeal);

// 2. In an Immutable way, increase the calories
// by 100 and print the result to the console
const updatedMeal2 = {
    ...updatedMeal,
    calories: updatedMeal.calories + 100
};
console.log(updatedMeal2);

// 3. In an Immutable way, remove the calories property and log the result to the console
const {calories, ...everythingButCals} = updatedMeal2;
console.log(everythingButCals);

///////////////////////////////////////////////////////
