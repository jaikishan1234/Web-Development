// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// const a = 10;
// const b = 3;

// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.3333333333333335
// console.log(a % b);  // 1


// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

// Regular way
// let x = 5;
// x = x + 3;  // x is now 8

// // Using +=
// let x = 5;
// x += 3;  // x is now 8

// // Regular way
// let x = 5;
// x = x - 3;  // x is now 2

// // Using -=
// let x = 5;
// x -= 3;  // x is now 2

// // Regular way
// let x = 5;
// x = x * 3;  // x is now 15

// // Using *=
// let x = 5;
// x *= 3;  // x is now 15

// // Regular way
// let x = 5;
// x = x / 3;  // x is now 1.6666666666666667

// // Using /=
// let x = 5;
// x /= 3;  // x is now 1.6666666666666667

// let a = 5;
// a += 3;  // 8
// console.log(a);

// let b = 5;
// b -= 3;  // 2
// console.log(b);

// let c = 5;
// c *= 3;  // 15
// console.log(c);

// let d = 5;
// d /= 3;  // 1.6666666666666667
// console.log(d);


// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count = 5;
// console.log("Before:", count);  // Before: 5
// count++;
// console.log("After:", count);   // After: 6

// let count = 5;
// console.log("Before:", count);  // Before: 5
// count--;
// console.log("After:", count);   // After: 4

// Increment
// let count = 5;
// console.log("Initial value:", count);        // Initial value: 5
// count++;
// console.log("After increment:", count);      // After increment: 6

// // Decrement (resetting count to 5)
// count = 5;
// console.log("Initial value:", count);        // Initial value: 5
// count--;
// console.log("After decrement:", count);      // After decrement: 4

// Post-increment (count++): Returns the current value, then increments
// Pre-increment (++count): Increments first, then returns the new value
// The same logic applies to count-- (post-decrement) and --count (pre-decrement). The ++ operator adds 1 to the variable, while -- subtracts 1.


// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

// console.log(5 == "5");   // true
// console.log(5 === "5");  // false

// The Key Difference
// == (Loose Equality): Compares only the values after performing type coercion (automatic type conversion). JavaScript converts the string "5" to the number 5 before comparing, so they are considered equal.​

// === (Strict Equality): Compares both the value AND type without any type conversion. Since 5 is a number and "5" is a string, they are different types, so the comparison returns false.

// Loose equality (==) - performs type coercion
// console.log(5 == "5");        // true (string "5" converted to number 5)
// console.log(0 == false);      // true (false converted to 0)
// console.log(null == undefined); // true

// // Strict equality (===) - no type coercion
// console.log(5 === "5");       // false (different types: number vs string)
// console.log(0 === false);     // false (different types: number vs boolean)
// console.log(null === undefined); // false (different types)

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

// console.log(10 > 5);   // true (10 is greater than 5)
// console.log(10 < 20);  // true (10 is less than 20)
// console.log(10 === 10); // true (10 is equal to 10)

// let result = (10 > 5) && (10 < 20) && (10 === 10);
// console.log(result);  // true (all conditions are true)

// let num = 10;

// // Check each condition separately
// console.log("Is 10 greater than 5?", num > 5);       // true
// console.log("Is 10 less than 20?", num < 20);        // true
// console.log("Is 10 equal to 10?", num === 10);       // true

// // Check all conditions together
// let allTrue = (num > 5) && (num < 20) && (num === 10);
// console.log("All conditions true?", allTrue);         // true

// Comparison Operators Used:

// > (greater than) - checks if the left value is greater than the right value​

// < (less than) - checks if the left value is less than the right value​

// === (strict equality) - checks if values are equal in both value and type​

// All three comparisons return true because 10 is indeed greater than 5, less than 20, and equal to itself


// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

// Logical AND (&&)
//console.log(true && false);   // false

// Logical OR (||)
//console.log(true || false);   // true

// Logical NOT (!)
//console.log(!(true));         // false

// How They Work
// AND (&&) Operator: Returns true only if both operands are true. If either operand is false, it returns false


// console.log(true && true);    // true
// console.log(true && false);   // false
// console.log(false && true);   // false
// console.log(false && false);  // false


// OR (||) Operator: Returns true if at least one operand is true​. Only returns false when both operands are false

// console.log(true || true);    // true
// console.log(true || false);   // true
// console.log(false || true);   // true
// console.log(false || false);  // false


// NOT (!) Operator: Inverts the boolean value. Converts true to false and false to true.

// console.log(!true);           // false
// console.log(!false);          // true
// console.log(!(2 < 3));        // false (because 2 < 3 is true)

// let age = 25;
// let hasLicense = true;

// // AND: Check if person can drive (needs both conditions)
// console.log(age >= 18 && hasLicense);  // true

// // OR: Check if person gets discount (senior OR student)
// let isSenior = false;
// let isStudent = true;
// console.log(isSenior || isStudent);    // true

// // NOT: Check if person is NOT an adult
// console.log(!(age >= 18));             // false

// These logical operators are commonly used in conditional statements to combine multiple conditions and control program flow


// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

// Expression 1: (5 > 3 && 10 > 8)
// console.log(5 > 3 && 10 > 8);  // true

// Expression 2: (5 > 3 || 10 < 8)
// console.log(5 > 3 || 10 < 8);  // true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

// Bitwise AND
// console.log(5 & 1);   // 1

// Bitwise OR
// console.log(5 | 1);   // 5

// Observation
// Bitwise operators work on the binary representation of numbers:​

// For 5 & 1 (Bitwise AND):

// 5 in binary: 101

// 1 in binary: 001

// The & operator compares each bit and returns 1 only if both bits are 1​

// Result: 001 which equals 1​

// For 5 | 1 (Bitwise OR):

// 5 in binary: 101

// 1 in binary: 001

// The | operator compares each bit and returns 1 if either bit is 1​

// Result: 101 which equals 5​

// Key Observation
// Bitwise AND (&) produces a smaller or equal number because it only keeps bits that are 1 in both operands​. Bitwise OR (|) produces a larger or equal number because it keeps bits that are 1 in either operand​. These operators work at the bit level, unlike logical operators (&&, ||) which work with boolean values



// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);
// var a = 10

// In JavaScript, when you use the var keyword to declare a variable, the declaration is hoisted (moved) to the top of its scope during the compilation phase, but the assignment remains in place. This means your code is interpreted as:

// var a;           // declaration hoisted to top
// console.log(a);  // a exists but has no value yet
// a = 10;          // assignment happens here

// Why It's Undefined
// When console.log(a) executes, the variable a has already been declared due to hoisting, so JavaScript knows it exists. However, the assignment (a = 10) hasn't been executed yet, so a has the default value of undefined.​

// This behavior is specific to var. If you used let or const instead, you would get a ReferenceError because these keywords create a "temporal dead zone" where the variable cannot be accessed before its declaration line.​

// Key Takeaway
// With var, the declaration is hoisted but not the initialization, resulting in undefined when accessing the variable before its assignment.


// b. Predict output of:
// console.log(b);
// let b = 10

// The output will be ReferenceError: Cannot access 'b' before initialization.​

// How let Hoisting Differs from var
// Variables declared with let are hoisted to the top of their block scope, but unlike var, they are not initialized. This creates a "temporal dead zone" (TDZ) from the start of the block until the declaration line is reached.​

// Why You Get a ReferenceError
// When you try to access b before its declaration, JavaScript knows the variable exists (it was hoisted), but it refuses to let you access it because it's in the temporal dead zone. The error message explicitly states "Cannot access 'b' before initialization" rather than "b is not defined," which proves the variable was hoisted.

// console.log(a);  // undefined (var is initialized)
// var a = 10;

// console.log(b);  // ReferenceError (let is not initialized)
// let b = 10;

// With var, the declaration is hoisted and automatically initialized to undefined. With let, the declaration is hoisted but remains uninitialized, making it inaccessible until the actual declaration line executes.​

// The Temporal Dead Zone
// The temporal dead zone is the period between entering the scope where the variable is declared and the actual declaration statement. Accessing the variable during this period throws a ReferenceError


// c. Predict output of:
// test()
// function test() { console.log(“Hello”) }

// The output will be Hello.​

// How Function Declaration Hoisting Works
// Function declarations are fully hoisted to the top of their scope, including both the declaration and the function body. This means you can call the function before it appears in your code without any errors.​

// During the compilation phase, JavaScript moves the entire function definition to the top of the scope, so your code is effectively interpreted as:

// function test() {
//   console.log("Hello")
// }
// test()  // "Hello"


// Why This Differs from Variables
// Unlike variables declared with var (which are hoisted but initialized to undefined) or let/const (which remain in the temporal dead zone), function declarations are hoisted with their complete implementation. This is called "value hoisting" where both the name and the function body are available before the declaration line.​

// Function Expressions vs Function Declarations
// This behavior only applies to function declarations. If you used a function expression instead, you would get an error:

// test()  // TypeError: test is not a function
// var test = function() {
//   console.log("Hello")
// }

// With function expressions, only the variable declaration is hoisted (initialized to undefined), not the function assignment.


// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.

// When you run this code, you get TypeError: hello is not a function.

// Why This Error Occurs
// Function expressions behave very differently from function declarations when it comes to hoisting. With function expressions, only the variable declaration is hoisted to the top of the scope, not the function assignment.​

// Here's how JavaScript interprets your code during compilation

// var hello;           // variable declaration hoisted to top
// hello();             // trying to call undefined()
// hello = function() { // assignment stays in place
//   console.log("Hi")
// }


// When the code executes, the variable hello exists at the top because var declarations are hoisted and initialized to undefined. However, the actual function assignment (= function() {...}) remains where you wrote it and hasn't been executed yet.​

// So when you try to call hello(), you're essentially trying to execute undefined(), which causes JavaScript to throw a TypeError because undefined is not a function.​

// Key Difference from Function Declarations
// This is fundamentally different from function declarations, which are fully hoisted with their entire implementation. If you had written:

// hello()
// function hello() {
//   console.log("Hi")
// }

// This would work perfectly and print "Hi" because the entire function declaration (both name and body) is moved to the top during hoisting.​

// With let or const
// If you used let or const instead of var, you would get a different error - ReferenceError: Cannot access 'hello' before initialization - because these keywords create a temporal dead zone where the variable cannot be accessed at all before initialization



// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?


// Function declarations are fully hoisted (including their entire implementation), while variable declarations are hoisted but their assignments are not, and function expressions behave like variables where only the variable name is hoisted but not the function assignment






// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.


// let age = prompt("Enter your age:");

// if (age > 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }


// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = Number(prompt("Enter your marks:"));

// if (marks >= 90) {
//   console.log("A grade");
// } else if (marks >= 75) {
//   console.log("B grade");
// } else if (marks >= 50) {
//   console.log("C grade");
// } else {
//   console.log("Fail");
// }


// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Bhopal";

// if (city === "Bhopal") {
//   console.log("MP");
// } else if (city === "Delhi") {
//   console.log("Capital");
// } else {
//   console.log("Unknown City");
// }


// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score = 40;
// let result = (score > 35) ? "Pass" : "Fail";
// console.log(result);



// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temperature = 35; // example value
// let result = (temperature > 30) ? "Hot" : "Pleasant";
// console.log(result);


// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.


// let day = Number(prompt("Enter day number (1-7):"));

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Day");
// }



// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”


// let age = Number(prompt("Enter your age:"));
// let country = prompt("Enter your country:");

// if (age > 18 && country === "India") {
//   console.log("Eligible for Vote");
// } else {
//   console.log("Not Eligible");
// }


