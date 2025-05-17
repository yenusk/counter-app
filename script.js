// Get DOM elements
const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize count
let count = 0;

// Update count display
function updateCount() {
    countElement.textContent = count;
    
    // Change color based on value
    if (count > 0) {
        countElement.className = 'positive';
    } else if (count < 0) {
        countElement.className = 'negative';
    } else {
        countElement.className = '';
    }
}

// Event listeners
incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

// Initialize
updateCount();