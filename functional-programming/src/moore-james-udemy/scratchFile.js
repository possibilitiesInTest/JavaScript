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

/////////////////////////////////////////////////
// using reduce to extract info from arrays

const grades  = [60, 55, 80, 90, 99, 92, 75, 72];

const total = grades.reduce(sum);

function sum(acc, grade) {
    return acc + grade;
}

const count = grades.length;

const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade){
    const {a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;
    if (grade >= 90) {
        return {...acc, a: a + 1};
    } else if (grade >= 80) {
        return {...acc, b: b + 1};
    } else if (grade >= 70) {
        return {...acc, c: c + 1};
    } else if (grade >= 60) {
        return {...acc, d: d + 1};
    } else {
        return { ...acc, f: f + 1};
    }
}

console.log(total, total / count, letterGradeCount);


// 623
// 77.875
//     [object Object] {
//     a: 3,
//         b: 1,
//         c: 2,
//         d: 1,
//         f: 1
// }


const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}

const countGroupedByReview = reviews.reduce(groupBy, {});

function groupBy (acc, review){
    const count = acc[review] || 0;
    return {...acc, [review]: count + 1}
}

console.log(countGroupedByReview);

// [object Object] {
//     1: 2,
//         2: 2,
//         2.5: 1,
//         3: 2,
//         4: 2,
//         4.5: 2,
//         5: 3
// }

/////////////////////////////////////////////
// currying & partial application

const studentGrades = [
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
];

const messages = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good',
};

function letterGrade(points){
    if(points >= 90){
        return 'a';
    } else if (points >= 80){
        return 'b';
    } else if (points >= 70){
        return 'c';
    } else if (points >= 60){
        return 'd';
    } else {
        return 'f';
    }
}

function feedBack(feedBackRules){
    return function(student){
        const grade = letterGrade(student.grade);
        const message = feedBackRules[grade];
        return `${message} ${student.name}, you got an ${grade}`;
    }
}

const gradeFeedback = studentGrades.map(feedBack(messages));

console.log(gradeFeedback);

