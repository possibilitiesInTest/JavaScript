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