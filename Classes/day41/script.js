// Pure Function
// function abcd(a, b) {
//     console.log(a+b)
// }
// abcd(1,2)


//Impure Function
// let global = 0;
// function impure(a) {
//     global++
//     console.log(a + global)
// }

// impure(2)



// obj Destructing
// function abcd(obj) {
//     console.log(obj);
// }

// abcd({ name: "Bob", age: 27 });



// let obj = {
//     name : "bob",
//     fnc: function () {
//         console.log(this);
//     },
//     fnc2: () => {
//         console.log(this);
//     }
// };
// obj.fnc();
// obj.fnc2();

// let obj = {
//     name : "bob",
//     fnc: function () {
//         console.log(this);
//         function fnc2() {
//             console.log(this)
//         }
//         fnc2();
//     },
    
// };
// obj.fnc();



// Map function
// let arr = [1,2,3,4,5]
// let newArr = arr.map(function(val) {
//     return val * val
// });
// console.log(newArr)



// Filter Function
// let arr = [1,2,3,4,5,6,7,8,9]
// let newArr = arr.filter(function(val){
//     return val%2 === 0;
// })
// console.log(newArr)



// Reduce Function
// let salary = [10000, 300000, 540000]
// let ans = salary.reduce(function(acc, val) {
//     return acc + val
// }, 0);
// console.log(ans)




// Some function
// let names = ["xyz", "abcsf", "defsf"];

// let ans = names.some(function(val) {
//     return val.length > 3;
// })

// console.log(ans)



// Every Function
// let names = ["xyz", "abcsf", "defsf"];

// let ans = names.every(function(val) {
//     return val.length > 3;
// })

// console.log(ans)




// Freeze Function 
// const obj = {
//   prop: 42,
//   name: "John"
// };

// Object.freeze(obj);

// obj.prop = 33;        // Won't change (fails silently in non-strict mode)
// obj.age = 25;         // Won't add new property
// delete obj.name;      // Won't delete property

// console.log(obj.prop); // Output: 42



// Seal Function
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// Object.seal(person);

// person.age = 51;           // ✅ Works - can modify existing properties
// console.log(person.age);   // Output: 51

// person.address = "NYC";    // ❌ Won't add new property
// delete person.lastName;    // ❌ Won't delete property

// console.log(person);       // { firstName: "John", lastName: "Doe", age: 51 }




// Nested Objects
// let obj = {
//     user: {
//         name: "bob",
//         address: {
//             city: "jaipur",
//         },
//     },
// };

// let { city: cityCopy } = obj.user.address;
// console.log(cityCopy); 
