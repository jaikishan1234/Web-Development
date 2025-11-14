// Select DOM elements
const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// Initialize counter value
let count = 0;

// Function to update the display
function updateDisplay() {
    counterDisplay.textContent = count;
    
    // Change color based on value
    if (count > 0) {
        counterDisplay.style.color = '#27ae60';
    } else if (count < 0) {
        counterDisplay.style.color = '#e74c3c';
    } else {
        counterDisplay.style.color = '#667eea';
    }
    
    // Add animation effect
    counterDisplay.classList.add('updated');
    setTimeout(() => {
        counterDisplay.classList.remove('updated');
    }, 200);
}

// Event listeners for buttons
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
