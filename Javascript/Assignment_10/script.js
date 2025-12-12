
// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

// const laptop = {
//     brand: "Dell",
//     price: 1200,
//     start: function () {
//         console.log("Laptop started");
//     }
// };

// // Example use:
// laptop.start();  // Output: Laptop started


// 	2.	Add one more method to the same object that increases the price by 10 percent.

// const laptop = {
//     brand: "Dell",
//     price: 1200,
//     start: function () {
//         console.log("Laptop started");
//     },
//     increasePrice: function () {
//         this.price = this.price * 1.10;
//         console.log(`New price is: ${this.price}`);
//     }
// };

// // Example use:
// laptop.increasePrice();  // New price is: 1320


// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.

// You repeat the same code (properties + methods) for every laptop.

// Easy to introduce mistakes (typos, missing methods, inconsistent structure).

// Each object creates its own copy of methods, wasting memory.

// Changing a shared behavior means updating all objects manually.

// No central place to validate or enforce rules for new laptops.

// Hard to extend or create specialized laptop types later.

// Code becomes harder to read and manage as the number of objects grows.

// Testing becomes harder because objects may not be consistently structured.

// Serialization (like JSON) becomes messy since methods don’t carry over.

// Overall: the approach doesn’t scale and becomes painful to maintain.

// ⸻




// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }

//     showDetails() {
//         console.log(`Name: ${this.name}, Salary: ${this.salary}`);
//     }
// }

// // Example:
// const e1 = new Employee("John", 45000);
// e1.showDetails();




// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }

//     showDetails() {
//         console.log(`Name: ${this.name}, Salary: ${this.salary}`);
//     }
// }

// // Creating three employees
// const emp1 = new Employee("Alice", 50000);
// const emp2 = new Employee("Bob", 60000);
// const emp3 = new Employee("Charlie", 70000);

// // Modify one employee
// emp1.salary = 55000;

// // Show details to verify others are unchanged
// emp1.showDetails();  // Salary: 55000
// emp2.showDetails();  // Salary: 60000
// emp3.showDetails();  // Salary: 70000



// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

// A class lets you create many objects with the same structure without repeating code.

// All objects created from the class follow the same blueprint, so no typos or missing properties.

// Methods are defined once in the class and shared, saving memory and keeping behavior consistent.

// If you need to change something (like how a method works), you update it in one place.

// Classes make the code easier to read, manage, and scale as your project grows.

// They support inheritance, so you can build new types of objects without rewriting everything.

// Overall, classes help keep your code clean, organized, and less error-prone.

// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.

// class BankAccount {
//     constructor(accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
// }

// // Example:
// const acc1 = new BankAccount("John Doe", 1000);
// console.log(acc1);


// 	8.	Inside the constructor, store both values using this.

// class BankAccount {
//     constructor(accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
// }



// 	9.	Add a method deposit(amount) that increases the balance.

// class BankAccount {
//     constructor(accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//         console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
//     }
// }

// // Example:
// const acc1 = new BankAccount("Alex", 1000);
// acc1.deposit(500); // Deposited: 500. New balance: 1500


// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

// class BankAccount {
//     constructor(accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//         console.log(`${this.accountHolderName} deposited ${amount}. New balance: ${this.balance}`);
//     }

//     showBalance() {
//         console.log(`${this.accountHolderName} balance: ${this.balance}`);
//     }
// }

// // Create two accounts
// const acc1 = new BankAccount("Alice", 1000);
// const acc2 = new BankAccount("Bob", 500);

// // Deposit into only the first account
// acc1.deposit(300); // Alice deposited 300. New balance: 1300

// // Show balances for both to verify second is unchanged
// acc1.showBalance(); // Alice balance: 1300
// acc2.showBalance(); // Bob balance: 500


// Why the second account is not affected

// Each new BankAccount(...) call creates a separate object (an instance) with its own properties (accountHolderName and balance).

// this.balance refers to the balance property on that specific instance. Changing acc1.balance only alters acc1’s data.

// The deposit method may be defined once (shared on the prototype), but it acts on whatever instance calls it — so the same method can update different instances independently.

// In short: instances hold their own state; methods operate on the instance that invoked them.

// ⸻



// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.

// const profile = {
//   username: "coolCoder42",
//   printName() {
//     console.log(this.username);
//   }
// };

// profile.printName(); // logs: "coolCoder42"


// 	12.	Call the method normally and observe the output.

// const profile = {
//   username: "coolCoder42",
//   printName() {
//     console.log(this.username);
//   }
// };

// // Call the method normally:
// profile.printName();


// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.


// What happens when you detach the method

// Short answer: when you store the method in a separate variable and call it, this is lost — so this.username becomes undefined (in strict mode) or refers to the global object (non-strict).


// 	14.	Modify the code so that this works correctly again.

// class Profile {
//   constructor(username) {
//     this.username = username;
//     this.printName = this.printName.bind(this);
//   }
//   printName() {
//     console.log(this.username);
//   }
// }

// const p = new Profile("coolCoder42");
// const detached = p.printName;
// detached(); // logs: "coolCoder42"


// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.

// function Vehicle(type, wheels) {
//   this.type = type;
//   this.wheels = wheels;
// }


// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.

// function Vehicle(type, wheels) {
//   this.type = type;
//   this.wheels = wheels;

//   // method created anew for every instance
//   this.describe = function() {
//     console.log(`A ${this.type} with ${this.wheels} wheels.`);
//   };
// }

// const v1 = new Vehicle("car", 4);
// const v2 = new Vehicle("motorbike", 2);

// v1.describe(); // "A car with 4 wheels."
// v2.describe(); // "A motorbike with 2 wheels."

// // Are the describe functions the same object?
// console.log(v1.describe === v2.describe); // → false


// 	17.	Move the same method to Vehicle.prototype and repeat the test.

// function Vehicle(type, wheels) {
//   this.type = type;
//   this.wheels = wheels;
// }

// // method on the prototype — shared by all instances
// Vehicle.prototype.describe = function() {
//   console.log(`A ${this.type} with ${this.wheels} wheels.`);
// };

// const v1 = new Vehicle("car", 4);
// const v2 = new Vehicle("motorbike", 2);

// v1.describe(); // → "A car with 4 wheels."
// v2.describe(); // → "A motorbike with 2 wheels."

// console.log(v1.describe === v2.describe); // → true


// 	18.	Explain why the prototype approach is preferred.

// Why the prototype approach is preferred:

// Saves memory — only one shared method instead of a new copy for every object.

// Faster object creation — no need to create a new function each time the constructor runs.

// Consistent behavior — all instances use the same method, making debugging easier.

// Prototype system is built for this — JavaScript’s inheritance model expects shared methods on the prototype.

// Easier updates — changing the prototype method updates behavior for all instances at once.

// If you want even shorter bullet points, I can shrink it down further!



// ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.

// function showBrand() {
//   console.log(this.brand);
// }


// 	20.	Create two different objects with brand values.

// const obj1 = {
//   brand: "Toyota"
// };

// const obj2 = {
//   brand: "Honda"
// };


// 	21.	Use call to execute showBrand for both objects.

// function showBrand() {
//   console.log(this.brand);
// }

// const obj1 = {
//   brand: "Toyota"
// };

// const obj2 = {
//   brand: "Honda"
// };

// showBrand.call(obj1); // → "Toyota"
// showBrand.call(obj2); // → "Honda"


// 	22.	Explain what problem call is solving here.

// call() lets us manually set what `this` should refer to.
// Without call(), showBrand() has no object to use as `this`,
// so `this.brand` would be undefined.
//
// By using showBrand.call(obj1) or showBrand.call(obj2),
// we "attach" the function to different objects at call time.
// This allows one function to be reused for multiple objects
// without copying it into each one.



// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.

// function introduce(city, role) {
//   console.log(`Name: ${this.name}, City: ${city}, Role: ${role}`);
// }

// 	24.	Create an object with a name property.

// const person = {
//   name: "Alice"
// };

// 	25.	Use apply to call introduce using the object and an array of arguments.

// introduce.apply(person, ["New York", "Developer"]);

// 	26.	Explain in simple words how apply differs from call.

// Same goal: both call and apply let you set what this will be when a function runs.

// Main difference: how you pass the function’s arguments.

// call(thisArg, arg1, arg2, ...) — pass arguments one by one.

// apply(thisArg, [arg1, arg2, ...]) — pass arguments as a single array.

// function introduce(city, role) {
//   console.log(`Name: ${this.name}, City: ${city}, Role: ${role}`);
// }

// const person = { name: "Alice" };

// // Using call: arguments listed individually
// introduce.call(person, "New York", "Developer");
// // -> Name: Alice, City: New York, Role: Developer

// // Using apply: arguments passed as an array
// introduce.apply(person, ["San Francisco", "Engineer"]);
// // -> Name: Alice, City: San Francisco, Role: Engineer


// ⸻


// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.

// function greet() {
//   console.log("Hello " + this.name);
// }

// 	28.	Bind this function to an object and store the returned function in a variable.

// const user = {
//   name: "Alice"
// };

// const greetAlice = greet.bind(user);


// 	29.	Call the bound function later and observe the output.

// greetAlice(); 


// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

// Why bind is useful for later execution / callbacks

// Locks this to the object — bind(obj) returns a new function that always uses obj as this, no matter how or when it’s called.

// Prevents this from being lost — when you pass a method as a callback (e.g. to setTimeout, event listeners, or other APIs), the method is called as a plain function and loses its original receiver. bind prevents that.

// Makes callbacks predictable — code using the bound function can be written without worrying about the caller’s environment.

// Useful for event handlers & async code — guarantees the handler sees the right object (very common in UI code and timers).

// Enables partial application — bind can also preset leading arguments (e.g. fn.bind(obj, arg1)), combining context fixing with simple currying.

// Alternative patterns exist — wrapper arrow functions or storing the method as an arrow-bound field in classes can also work. Note: bind creates a new function each time, so if you bind repeatedly you’ll create multiple function objects (sometimes you want to cache the bound function).

// "use strict";

// const user = {
//   name: "Alice",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// // BAD: passing the method directly — `this` is lost when called by setTimeout
// setTimeout(user.greet, 100); // likely prints: "Hello undefined" (or "Hello " in browsers)

// // GOOD: bind the method so it keeps the correct `this`
// const boundGreet = user.greet.bind(user);
// setTimeout(boundGreet, 200); // prints: "Hello Alice"

// // Equivalent wrapper (alternative to bind)
// setTimeout(() => user.greet(), 300); // also prints: "Hello Alice"


// Displaying Day 58 - Question Sheet 2.md.