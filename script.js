const learnButton = document.getElementById('learn-btn');
const dailyWord = document.getElementById('daily-word');
const writingInput = document.getElementById('writing-input');
const checkButton = document.getElementById('check-btn');
const feedback = document.getElementById('feedback');
const historyList = document.getElementById('history-list');

let history = [];

// List of words to learn
const wordsOfTheDay = [
    'School', 'Tree', 'House', 'Friend', 'Food', 'Book', 'Computer'
];

// Function to save word to history
function saveWordToHistory(word) {
    history.push(word);
    displayHistory();
}

// Function to display history
function displayHistory() {
    historyList.innerHTML = '';  // Clear existing list
    history.forEach((word) => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        historyList.appendChild(listItem);
    });
}

// Function to check if the typed word matches today's word
checkButton.addEventListener('click', () => {
    const typedWord = writingInput.value.trim();
    const correctWord = dailyWord.textContent;

    if (typedWord.toLowerCase() === correctWord.toLowerCase()) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = 'green';
        saveWordToHistory(correctWord);
    } else {
        feedback.textContent = "Oops! Try again.";
        feedback.style.color = 'red';
    }
    
    writingInput.value = '';  // Clear the input after checking
});

// Change to a new word after learning it
learnButton.addEventListener('click', () => {
    const word = dailyWord.textContent;
    
    // Choose a new word for today
    const randomIndex = Math.floor(Math.random() * wordsOfTheDay.length);
    dailyWord.textContent = wordsOfTheDay[randomIndex];
    
    // Reset the feedback message
    feedback.textContent = '';
});