// example 1

/* require let, var, const 
   for variable declaration
*/

'use strict';

city = 'London'; 
console.log(city);
 
 
 
 
// example 2

/*
parameters must be unique

*/

'use strict';

function myFunc(a, a, b) {
    console.log(a, a, b);
}
myFunc(1, 2, 3);
 
 
 
 
// example 3
 
/*
errors thrown for attempts to delete
native definitions
*/

'use strict';

delete Object.prototype;


// use strict: fail FAST & fail LOUDLY