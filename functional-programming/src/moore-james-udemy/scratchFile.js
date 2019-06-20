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
// Map && Filter

const meals = [
    { id: 1, description: 'Breakfast', calories: 420},
    { id: 2, description: 'Lunch', calores: 250}
];

const meal = {
    id: 3,
    description: 'Snack',
    calories: 180
};

const updatedMeals = [...meals, meal];

// console.log(meals, updatedMeals);

const updatedMealsDescription = updatedMeals.map(updateDescription);

function updateDescription(meal) {
    if (meal.id === 2) {
        return {
            ...meal,
            description: 'Early Lunch',
        };
    }
    return meal;
}

// console.log(updatedMealDescription);

const filteredMeals = updatedMeals.filter(function(meal){
    return meal.id !== 1;
});

console.log(updatedMealsDescription, filteredMeals);

///////////////////////////////////////////////////
// Map && Filter

// 1. create a constant named friends,
// which is an array that contains 2
// names of your choosing.
const friends = [ "Charlie", "Kat"];


// 2. Create a new constant named updatedFriends,
// which includes the friends array values plus
// one additional name
const updatedFriends = [ ...friends, "Bob"];

// 3. Create a new constant named friendNameLengths,
// which is based on the array updatedFriends,
// but instead of having the friends names,
// have the array store the length of each persons name.
const friendNameLengths = updatedFriends.map(nameLength);

function nameLength(name) {
    return name.length;
}


// 4. Create a new constant named shorterNamedFriends,
// which will be a list of the friends except the friend with the longest name.
const longestNameLength = Math.max(...friendNameLengths);


const shorterNamedFriends = updatedFriends.filter(
    function(friend){
        return friend.length < longestNameLength;
    })


// 5. Print each variable to the console.
console.log(friends, updatedFriends, friendNameLengths, shorterNamedFriends);

