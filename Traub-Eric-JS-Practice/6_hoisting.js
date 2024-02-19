/* ex 1
first console log fails
due to variable hoisting
before variable assignment
*/

console.log(color);
var color = "red";
console.log(color);



//ex 2
var color;
console.log(color);
color = "orange";
console.log(color);



// ex 3
/*
function expression vs
function declaration
*/

console.log(getProduct(2, 3));
var getProduct = function(num1, num2) {
  return num1 * num2;
};
console.log(getProduct(2, 3));



// ex 4

console.log(getProduct(2, 3));
function getProduct(num1, num2) {
  return num1 * num2;
}



// ex 5
/*
hoisting of varibles only 
occur within encompassing function
*/

var globalVar = 'global';
(function() {
  var name = 'Jen';
  var getAge = function() {
    return '30';
  };
  function getState() {
    return 'Delaware'; 
  }
})();


// ex 6
 
function getTotal() {
    console.log(multiplier);
    console.log(total);
    
    let total = 0;
    for(var i = 0; i < 10; i++) {
      let valueToAdd = i;
      var multiplier = 2;
      total += valueToAdd * multiplier;
    }
    return total;
  }
  getTotal();
   
   
   
  // ex 7
  /*
  keywords with let, const are not initialized
  until they are declared
  */
   
  function getTotal() {
    let total;
    var multiplier;
    
    total = 0;
    
    for(var i = 0; i < 10; i++) {
      let valueToAdd;
      valueToAdd = i;
      multiplier = 2;
      total += valueToAdd * multiplier;
    }
    return total;
  }
   
  getTotal();