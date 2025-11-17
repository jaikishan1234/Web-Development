// function add(a, b) {
//     return a+b;
// }

// let ans = add(4,5)
// console.log(ans)



// function greeting(guest) {
//     console.log(`Hi ${guest}`)
// }
// greeting("Guest")



// Rest Operator
// function addUnlimited(...nums) {
//     let sum = 0;
//     nums.forEach(function(val) {
//         sum += val
//     });
//     console.log(sum)
// }

// addUnlimited(1,2,3,4,5);


// function addUnlimited(...nums) {
//     let sum = 0;
//     for(let i=0; i<nums.length; i++)
//     {
//         sum = sum + nums[i]
//     }
//     console.log(sum)
// }

// addUnlimited(1,2,3,4,5);


// function addUnlimited(...nums) {
//     let ans = nums.reduce(function (acc, val) {
//         return acc + val;
//     }, 0);
//     console.log(ans);
// }

// addUnlimited(1,2,3,4,5);



//IIFE

// (function(){
//     console.log("I run Instantly")
// })();




// function parent() {
//     let a = 13;
//     function child() {
//         console.log(a);
//     }
//     child();
// }
// parent();




// let arr = ["apple", "mango", "orange", "litchi", "Watermelon"];
// arr.push("Pears");
// arr.unshift("Banana");
// console.log(arr)




// let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }




// let obj = {
//     name: "Bob",
//     age: "27",
//     city: "Nagpur"
// }

// for (let i in obj) {
//     console.log(i)
//     console.log(obj[i])
// }




// setTimeout(function () {
//     console.log("Time's Up")
// }, 2000)