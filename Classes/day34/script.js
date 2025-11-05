// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// function checkVotingEligibility() {
//     let input = prompt("Enter your age:");
    
//     // Check for null (user clicked cancel)
//     if (input === null) {
//         console.log("Not eligible - Input cancelled");
//         return;
//     }
    
//     // Trim whitespace
//     input = input.trim();
    
//     // Check for empty string
//     if (input === "") {
//         console.log("Not eligible - No input provided");
//         return;
//     }
    
//     // Convert to number
//     const age = Number(input);
    
//     // Check all edge cases
//     if (isNaN(age)) {
//         console.log("Not eligible - Invalid input (not a number)");
//     } else if (age < 0) {
//         console.log("Not eligible - Age cannot be negative");
//     } else if (!Number.isInteger(age)) {
//         console.log("Not eligible - Age must be a whole number");
//     } else if (age > 150) {
//         console.log("Not eligible - Age is unrealistic");
//     } else if (age === 0) {
//         console.log("Not eligible - Age cannot be zero");
//     } else if (age >= 18) {
//         console.log("Eligible");
//     } else {
//         console.log("Not eligible");
//     }
// }

// checkVotingEligibility();


// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// // Using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 × ${i} = ${5 * i}`);
// }



// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count = 0;

// for (let i = 1; i <= 15; i++) {
//     if (i > 8) {
//         count++;
//     }
// }

// console.log(`Count of numbers greater than 8: ${count}`);
// // Output: Count of numbers greater than 8: 7


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.


// const CORRECT_PASSWORD = "secret123";

// function checkPassword() {
//     let password = prompt("Enter password:");
    
//     // Handle cancel button
//     if (password === null) {
//         console.log("Access Cancelled");
//         return;
//     }
    
//     // Handle empty input
//     if (password.trim() === "") {
//         console.log("Access Denied - Password cannot be empty");
//         return;
//     }
    
//     // Compare
//     if (password === CORRECT_PASSWORD) {
//         console.log("✓ Access Granted");
//         alert("Welcome!");
//     } else {
//         console.log("✗ Access Denied");
//         alert("Incorrect password!");
//     }
// }

// checkPassword();


// Level 2 – Slightly Tougher but Logical


// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”


// const CORRECT_PASSWORD = "secret123";
// const MAX_ATTEMPTS = 3;

// let attempts = 0;
// let locked = false;

// function checkPassword() {
//     while (attempts < MAX_ATTEMPTS && !locked) {
//         attempts++;
        
//         let password = prompt(`Enter password (Attempt ${attempts}/${MAX_ATTEMPTS}):`);
        
//         // Handle cancel
//         if (password === null) {
//             alert("Login cancelled");
//             return;
//         }
        
//         // Handle empty
//         if (password.trim() === "") {
//             alert("Password cannot be empty");
//             if (attempts >= MAX_ATTEMPTS) {
//                 locked = true;
//                 alert("🔒 Account locked");
//             }
//             continue;
//         }
        
//         // Check password
//         if (password === CORRECT_PASSWORD) {
//             alert("✓ Access Granted!");
//             console.log(`Success on attempt ${attempts}`);
//             return; // Early exit on success
//         } else {
//             if (attempts < MAX_ATTEMPTS) {
//                 alert(`✗ Incorrect password. ${MAX_ATTEMPTS - attempts} attempt(s) remaining.`);
//             } else {
//                 locked = true;
//                 alert("🔒 Account locked after 3 failed attempts");
//             }
//         }
//     }
// }

// checkPassword();


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// function countYesWords() {
//     let yesCount = 0;
//     let word = "";
//     let continueLoop = true;
    
//     while (continueLoop) {
//         word = prompt("Enter a word (type 'stop' to end):");
        
//         // Handle cancel button
//         if (word === null) {
//             alert(`Session cancelled. "yes" count: ${yesCount}`);
//             return;
//         }
        
//         // Handle empty input
//         if (word.trim() === "") {
//             alert("Empty input, please enter a word");
//             continue;
//         }
        
//         // Convert to lowercase and trim
//         const cleanWord = word.trim().toLowerCase();
        
//         // Count "yes"
//         if (cleanWord === "yes") {
//             yesCount++;
//         }
        
//         // Check for "stop"
//         if (cleanWord === "stop") {
//             continueLoop = false;
//         }
//     }
    
//     console.log(`You typed "yes" ${yesCount} time(s)`);
//     alert(`Final count: ${yesCount}`);
// }

// countYesWords();


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// Using for loop
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

// // Output: 7, 14, 21, 28, 35, 42, 49


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }

// console.log(`Sum of odd numbers from 1 to 30: ${sum}`);
// // Output: Sum of odd numbers from 1 to 30: 225


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// function askUntilEven() {
//     let isEven = false;
//     let attempts = 0;
    
//     while (!isEven) {
//         attempts++;
//         let input = prompt(`Attempt ${attempts} - Enter a number:`);
        
//         // Handle cancel button
//         if (input === null) {
//             alert("Cancelled");
//             return;
//         }
        
//         // Handle empty input
//         if (input.trim() === "") {
//             alert("Empty input. Please try again.");
//             continue;
//         }
        
//         const number = Number(input.trim());
        
//         // Validate
//         if (isNaN(number)) {
//             alert("Invalid number. Please try again.");
//             continue;
//         }
        
//         if (!Number.isInteger(number)) {
//             alert("Please enter an integer.");
//             continue;
//         }
        
//         // Check if even
//         if (number % 2 === 0) {
//             alert(`✓ Success! ${number} is even.\nTotal attempts: ${attempts}`);
//             isEven = true;
//         } else {
//             alert(`✗ ${number} is odd. Try again.`);
//         }
//     }
// }

// askUntilEven();



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// function printNumbersBetween() {
//     // Get inputs
//     let startInput = prompt("Enter start number:");
//     let endInput = prompt("Enter end number:");
    
//     // Edge case: User clicked cancel
//     if (startInput === null || endInput === null) {
//         console.log("Operation cancelled");
//         return;
//     }
    
//     // Edge case: Empty inputs
//     if (startInput.trim() === "" || endInput.trim() === "") {
//         alert("Error: Empty input provided");
//         console.log("Error: Empty input");
//         return;
//     }
    
//     // Convert to numbers
//     const start = Number(startInput.trim());
//     const end = Number(endInput.trim());
    
//     // Edge case: Non-numeric input
//     if (isNaN(start) || isNaN(end)) {
//         alert("Error: Please enter valid numbers");
//         console.log("Error: Invalid numbers");
//         return;
//     }
    
//     // Edge case: Not integers
//     if (!Number.isInteger(start) || !Number.isInteger(end)) {
//         alert("Error: Please enter integers only");
//         console.log("Error: Decimals not allowed");
//         return;
//     }
    
//     // Edge case: Infinity values
//     if (!isFinite(start) || !isFinite(end)) {
//         alert("Error: Numbers must be finite");
//         console.log("Error: Infinite values not allowed");
//         return;
//     }
    
//     // Edge case: Start > End
//     if (start > end) {
//         alert("Error: Start must be less than or equal to end");
//         console.log("Error: Invalid range");
//         return;
//     }
    
//     // Edge case: Range too large (prevent browser freeze)
//     if ((end - start) > 10000) {
//         alert("Error: Range too large (max 10,000)");
//         console.log("Error: Range exceeds limit");
//         return;
//     }
    
//     // Valid input - print numbers
//     console.log(`\nNumbers from ${start} to ${end}:`);
    
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
    
//     console.log(`\nTotal numbers: ${end - start + 1}`);
//     alert(`Check console for ${end - start + 1} numbers from ${start} to ${end}`);
// }

// printNumbersBetween();


