// 1. Intro TO JS
// Alert
// alert("Hello from Shreyians!")

// If HTML is skeleton , CSS is Clothes then JS is working parts .

// JS is applied everywhere in modern websites for example if i click any button in a webpage it will do some chnages or behaviour in your websites likes redirect to something or adding products in cart page of amazon or any shopping websites. Js can help us to chnage the behaviour of modern websites



// 2. Linking JS Files
// console.log("Connected!");


// 3. Running Js in Browser Console
// 2+2

// alert("hi")

// prompt(“Your name?”)

// let city = “Bhopal”; 
// city


// 4. Working with Strings
// let msg = "I Love India";
// console.log(msg);
// console.log(msg.includes("Love"));

// console.log(msg.slice(2, 6));

// console.log(msg.split(" "));

// let msg1 = "I love Delhi";
// msg1 = msg1.replace("love", "study at");
// console.log(msg1); 

// let name = "Devil";
// console.log(`Hey ${name}, welcome to JS!`);


// 5. Statements and Semicolons
// console.log("hello")
// console.log("hello")
// console.log("hello")


// 6. Comments
// devil

/*
This program stores a user's name
Uses template literals to create a greeting message
Then logs the personalized greeting to the console
*/
// let name = "Harsh";
// console.log(`Hey ${name}, welcome to JS!`);

// let name = "Harsh";
// console.log("First message");
// console.log("This message is hidden");
// console.log("Third message");


// 7. Expressions vs Statements
// a. Type 5 + 10 (expression).
// b. Type let x = 10; (statement).
// c. Which one gives a value immediately?
// The expression 5 + 10 gives a value immediately

// let y = (5 + 10) * 2;
// console.log(y)

// 8. Data Types
// let age = 25;
// let name = "Harsh";
// let isStudent = true;
// let skills = ["JS", "HTML"];
// let user = { city: "Bhopal" };
// let x = null;
// let y;
// let z = Symbol("id");

// console.log(typeof age);        // "number"
// console.log(typeof name);       // "string"
// console.log(typeof isStudent);  // "boolean"
// console.log(typeof skills);     // "object" (arrays are objects)
// console.log(typeof user);       // "object"
// console.log(typeof x);          // "object" (null returns object - known bug)
// console.log(typeof y);          // "undefined"
// console.log(typeof z);          // "symbol"

// age = "25"; // Changed from number to string
// console.log(typeof age); // "string" (was "number" before)

// name = 123; // Changed from string to number
// console.log(typeof name); // "number" (was "string" before)

// let result1 = 5 + "10";
// console.log(result1);        // "510"
// console.log(typeof result1); // "string"

// let result2 = 25 + " years";
// console.log(result2);        // "25 years"
// console.log(typeof result2); // "string"

// let result3 = 5 + 10;
// console.log(result3);        // 15
// console.log(typeof result3); // "number"


// 9. Special Values

//console.log(1 / 0);           // Infinity
//console.log(0 / 0);           // NaN
//console.log(Number("abc"));   // NaN
//console.log(undefined + 1);   // NaN

//1 / 0 // Infinity -> Dividing a positive number by zero results in Infinity. JavaScript follows the IEEE 754 standard, which represents division by zero as positive or negative infinity rather than throwing an error.

//0 / 0 // NaN -> Zero divided by zero produces NaN (Not a Number). This operation is mathematically indeterminate, so JavaScript returns NaN to indicate an undefined mathematical operation.

//Number("abc") // NaN -> Attempting to convert a non-numeric string to a number returns NaN. Since "abc" cannot be parsed as a valid number, JavaScript returns NaN.​

// undefined + 1 // NaN -> Any arithmetic operation involving undefined results in NaN. When JavaScript tries to perform math with undefined, it cannot produce a valid number, so it returns NaN.

// When to Use null vs undefined
// Use undefined when JavaScript automatically indicates absence (uninitialized variables); use null when you intentionally want to assign "no value" or explicitly clear a variable.

// Explanation: undefined means JavaScript doesn't know the value yet (automatic), while null means you're explicitly saying "this should be empty" (intentional). For example, let x; is automatically undefined, but let user = null; explicitly states the user doesn't exist yet.



// 10. Primitive vs Reference

let x = 5; 
let y = x; 
y = 10; 
console.log(x, y); // Output: 5 10

let obj1 = { name: "Harsh" }; 
let obj2 = obj1; 
obj2.name = "Sheryians";
console.log(obj1.name); // Output: "Sheryians"

// The objects change together, while the primitive numbers remain independent.​

// In the primitive example, x remains 5 and y becomes 10 - they are separate. In the object example, both obj1.name and obj2.name become "Sheryians" because they reference the same object in memory.

// Primitives (numbers, strings, booleans) are copied by value. When you assign y = x, JavaScript creates a completely new copy of the value 5 and stores it in a separate memory location. Changing y doesn't affect x because they're independent copies.​

// Objects (arrays, objects, functions) are copied by reference. When you assign obj2 = obj1, JavaScript doesn't create a new object - instead, both variables point to the same object in memory. When you modify obj2.name, you're actually modifying the shared object that both variables reference.


// ┌─────────┐
// │  x: 5   │ ← Separate memory location
// └─────────┘

// ┌─────────┐
// │  y: 10  │ ← Different memory location
// └─────────┘

// ┌──────────┐              ┌───────────────────────────┐
// │ obj1: ──→├─────────────→│ { name: "Sheryians" }    │
// └──────────┘              │                           │
//                           │  (Single object in memory)│
// ┌──────────┐              │                           │
// │ obj2: ──→├─────────────→│                           │
// └──────────┘              └───────────────────────────┘
//      Both variables point to the SAME object!

// Key Memory Concept: Primitive variables hold the actual value, while object variables hold a reference (pointer/address) to where the object is stored in memory. This is why modifying through one object reference affects all references to that same object/












