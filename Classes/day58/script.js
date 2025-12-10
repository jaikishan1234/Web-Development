
// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// const user = {
//   name: "John Doe",
//   email: "john@example.com",
//   login: function () {
//     console.log("User logged in");
//   }
// };

// // Example usage:
// user.login();

// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.


// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   login() {
//     console.log("User logged in");
//   }
// }

// // Create 5 users
// const user1 = new User("Alice", "alice@gmail.com");
// const user2 = new User("Bob", "bob@gmail.com");
// const user3 = new User("Charlie", "charlie@gmail.com");
// const user4 = new User("David", "david@gmail.com");
// const user5 = new User("Eve", "eve@gmail.com");

// // Store in array
// const users = [user1, user2, user3, user4, user5];

// // Example usage
// users[0].login();



// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.


// const product = {
//   name: "Laptop",
//   price: 50000,

//   getFinalPrice: function (discountPercent) {
//     const discountAmount = (this.price * discountPercent) / 100;
//     return this.price - discountAmount;
//   }
// };

// // Example usage:
// const finalPrice = product.getFinalPrice(10); // 10% discount
// console.log(finalPrice); // 45000


// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// ⸻

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed


// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   drive() {
//     console.log(`${this.brand} is driving at ${this.speed} km/h`);
//   }
// }

// // Example usage:
// const car1 = new Car("Toyota", 120);
// const car2 = new Car("BMW", 180);

// car1.drive(); // Toyota is driving at 120 km/h
// car2.drive(); // BMW is driving at 180 km/h



// 	5.	Create two different car objects from the same class and verify that their data is different.

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   speak() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
// }

// // Create two different animal objects
// const animal1 = new Animal("Dog", "Woof!");
// const animal2 = new Animal("Cat", "Meow!");

// // Verify their data is different
// console.log(animal1.name, animal1.sound); // Dog Woof!
// console.log(animal2.name, animal2.sound); // Cat Meow!

// animal1.speak();
// animal2.speak();


// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// If classes did not exist, we would write this logic using individual objects or factory functions. For every new object, we would have to manually define all properties and methods again and again. For example, if we needed 50 users, we would either copy-paste the same structure 50 times or write a function to return similar objects.

// This approach works for small projects, but when the project becomes large, many problems occur. There is a lot of repeated code, which makes the program longer and harder to read. If we want to change a method (like login()), we would have to update it in many places, which increases the chance of bugs and mistakes. Also, organizing and managing data becomes messy and confusing.

// Classes solve these problems by acting like a blueprint. We write the structure and behavior only once, and then we can create as many objects as we want in a clean and organized way. This makes the code more readable, reusable, and easier to maintain in large projects.

// ⸻



// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student {
//   constructor(name, rollNo) {
//     this.name = name;
//     this.rollNo = rollNo;
//   }

//   introduce() {
//     console.log(`Hi, I am ${this.name} and my roll number is ${this.rollNo}.`);
//   }
// }

// // Example usage:
// const s1 = new Student("Aarav", 12);
// const s2 = new Student("Mia", 27);

// s1.introduce(); 
// s2.introduce();


// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.


// class Student {
//   constructor(name, rollNo) {
//     this.name = name;
//     this.rollNo = rollNo;
//   }

//   introduce() {
//     console.log(`Hi, I am ${this.name} and my roll number is ${this.rollNo}.`);
//   }
// }

// const s1 = new Student("Rahul", 21);
// s1.introduce();

// This works because:

// this.name → means “the current object’s name”

// this.rollNo → means “the current object’s roll number”

// Each object gets its own separate data

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// class Student {
//   constructor(name, rollNo) {
//     name = name;
//     rollNo = rollNo;
//   }

//   introduce() {
//     console.log(`Hi, I am ${this.name} and my roll number is ${this.rollNo}.`);
//   }
// }

// const s1 = new Student("Rahul", 21);
// s1.introduce();

// When you write: name = name;

// You are just assigning the parameter to itself, not to the object.
// So the object (s1) never actually receives:

// this.name
// this.rollNo

// The this keyword is necessary inside the constructor to store values inside the current object. If we remove this, the values are not saved in the object, and we get undefined when trying to access them later.

// ⸻

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).

// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   this.login = function () {
//     console.log(`${this.name} logged in`);
//   };
// }

// // Example usage:
// const u1 = new User("Aisha", "aisha@gmail.com");
// u1.login();


// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// Login Method INSIDE the Constructor (Less Efficient)
// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   // Method inside the constructor
//   this.login = function () {
//     console.log(this.name + " logged in");
//   };
// }

// // Example usage:
// const user1 = new User("Aman", "aman@gmail.com");
// const user2 = new User("Neha", "neha@gmail.com");

// user1.login();
// user2.login();


// Login Method on the PROTOTYPE (Best Practice ✅)
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }

// // Method added to prototype
// User.prototype.login = function () {
//   console.log(this.name + " logged in");
// };

// // Example usage:
// const user1 = new User("Aman", "aman@gmail.com");
// const user2 = new User("Neha", "neha@gmail.com");

// user1.login();
// user2.login();


// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// Case 1: login Method on the PROTOTYPE
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.login = function () {
//   console.log(this.name + " logged in");
// };

// // Create two users
// const user1 = new User("Aman", "aman@gmail.com");
// const user2 = new User("Neha", "neha@gmail.com");

// // Compare their login methods
// console.log(user1.login === user2.login); // true

// Why is the result true?

// Because:

// The login method is stored once in the prototype

// Both user1 and user2 share the same function in memory

// So both are pointing to the same function reference

// That’s why:
// user1.login === user2.login  // true

// Case 2: login Method INSIDE the Constructor
//function User(name, email) {
//   this.name = name;
//   this.email = email;

//   this.login = function () {
//     console.log(this.name + " logged in");
//   };
// }

// const user1 = new User("Aman", "aman@gmail.com");
// const user2 = new User("Neha", "neha@gmail.com");

// console.log(user1.login === user2.login); // false

// Why is the result false here?

// Because:

// Each object gets its own separate copy of the login function

// Even though the code looks the same, they are different function objects in memory


// Final Short Explanation
// When the login method is added to the prototype, both objects share the same function, so equality returns true. When the method is defined inside the constructor, each object gets a separate copy, so equality returns false.


// The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻




// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.

// function printName() {
//   console.log(this.name);
// }

// const user = {
//   name: "Rahul"
// };

// printName.call(user); 



// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it


// function printName() {
//   console.log(this.name);
// }

// const person = {
//   name: "Riya"
// };

// printName.call(person);  
// printName.apply(person); 

// const boundFunction = printName.bind(person);
// boundFunction();



// 	15.	Borrow a method from one object and run it for another object using call.

// const user1 = {
//   name: "Aman",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// const user2 = {
//   name: "Neha"
// };

// user1.greet.call(user2); 

// The goal is to understand how this can be manually controlled.
// Displaying Day 58 - Question Sheet 1.md.