// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// function printFirstNOddNumbers(start, end, n) {
//   // Edge case: validate inputs
//   if (typeof start !== 'number' || typeof end !== 'number' || typeof n !== 'number') {
//     console.log('Error: All parameters must be numbers');
//     return;
//   }
  
//   // Edge case: check if n is positive
//   if (n <= 0) {
//     console.log('Error: Count must be a positive number');
//     return;
//   }
  
//   // Edge case: check if start is less than or equal to end
//   if (start > end) {
//     console.log('Error: Start value must be less than or equal to end value');
//     return;
//   }
  
//   let count = 0;
  
//   for (let i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//       count++;
      
//       if (count === n) {
//         break;
//       }
//     }
//   }
  
//   // Edge case: warn if not enough odd numbers in range
//   if (count < n) {
//     console.log(`Warning: Only found ${count} odd number(s) in range ${start}-${end}`);
//   }
// }

// // Usage
// printFirstNOddNumbers(1, 20, 3);



// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// function countPositiveNumbers() {
//   let positiveCount = 0;
//   let validInputs = 0;
  
//   for (let i = 1; i <= 5; i++) {
//     let input = prompt(`Enter number ${i} of 5:`);
    
//     // Edge case: user clicks cancel
//     if (input === null) {
//       console.log('Input cancelled by user');
//       return;
//     }
    
//     // Edge case: convert to number
//     let num = parseFloat(input);
    
//     // Edge case: validate if input is a valid number
//     if (isNaN(num)) {
//       console.log(`Invalid input: "${input}" is not a number`);
//       i--; // Decrement to ask again for this number
//       continue;
//     }
    
//     validInputs++;
    
//     // Check if positive (greater than 0)
//     if (num > 0) {
//       positiveCount++;
//     }
    
//     console.log(`Number ${validInputs}: ${num} (${num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero'})`);
//   }
  
//   console.log(`\nTotal positive numbers: ${positiveCount}`);
//   return positiveCount;
// }

// // Run the function
// countPositiveNumbers();




// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// function atmSimulator() {
//   let balance = 1000;
//   const MAX_WITHDRAWALS = 3;
  
//   console.log(`Welcome to ATM Simulator`);
//   console.log(`Initial Balance: ₹${balance.toFixed(2)}\n`);
  
//   for (let i = 1; i <= MAX_WITHDRAWALS; i++) {
//     let input = prompt(`Withdrawal ${i} of ${MAX_WITHDRAWALS}\nCurrent Balance: ₹${balance.toFixed(2)}\nEnter amount to withdraw:`);
    
//     // Edge case: user clicks cancel
//     if (input === null) {
//       console.log('Transaction cancelled by user');
//       break;
//     }
    
//     // Edge case: convert to number
//     let amount = parseFloat(input);
    
//     // Edge case: validate if input is a valid number
//     if (isNaN(amount)) {
//       console.log(`Invalid input: "${input}" is not a valid number\n`);
//       i--; // Don't count this as a withdrawal attempt
//       continue;
//     }
    
//     // Edge case: check for negative or zero amount
//     if (amount <= 0) {
//       console.log(`Invalid amount: Withdrawal amount must be greater than zero\n`);
//       i--; // Don't count this as a withdrawal attempt
//       continue;
//     }
    
//     // Edge case: check for unrealistic large amounts (optional)
//     if (amount > 50000) {
//       console.log(`Invalid amount: Maximum withdrawal limit is ₹50,000\n`);
//       i--; // Don't count this as a withdrawal attempt
//       continue;
//     }
    
//     // Main logic: check sufficient balance
//     if (amount <= balance) {
//       balance -= amount;
//       console.log(`✓ Withdrawal successful!`);
//       console.log(`Amount withdrawn: ₹${amount.toFixed(2)}`);
//       console.log(`Remaining balance: ₹${balance.toFixed(2)}\n`);
//     } else {
//       console.log(`✗ Insufficient balance`);
//       console.log(`Requested: ₹${amount.toFixed(2)}, Available: ₹${balance.toFixed(2)}\n`);
//     }
//   }
  
//   console.log(`\n=== Transaction Summary ===`);
//   console.log(`Final Balance: ₹${balance.toFixed(2)}`);
//   console.log(`Total Withdrawn: ₹${(1000 - balance).toFixed(2)}`);
// }

// // Run the ATM simulator
// atmSimulator();

