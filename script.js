const flashcards = [
    {
        question: "מהו 2 + 2?",
        answer: "4",
        mathQuestion: "כמה זה 3 + 5?"
    },
    {
        question: "מהו 10 - 4?",
        answer: "6",
        mathQuestion: "כמה זה 8 - 3?"
    },
    {
        question: "מהו 3 × 4?",
        answer: "12",
        mathQuestion: "כמה זה 6 × 2?"
    },
    {
        question: "מהו 20 ÷ 5?",
        answer: "4",
        mathQuestion: "כמה זה 15 ÷ 3?"
    }
];

let currentCardIndex = 0;

const playerNameInput = document.getElementById('playerName');
const startGameButton = document.getElementById('startGame');
const gameArea = document.querySelector('.game-area');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const revealAnswerButton = document.getElementById('revealAnswer');
const prevCardButton = document.getElementById('prevCard');
const nextCardButton = document.getElementById('nextCard');

// Start the game
startGameButton.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        gameArea.classList.add('visible'); // Show the game area
        loadCard(currentCardIndex); // Load the first card
    } else {
        alert("נא להכניס את שמך!"); // Alert if no name is entered
    }
});

// Load a flashcard
function loadCard(index) {
    const card = flashcards[index];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    answerElement.classList.add('hidden'); // Hide the answer initially
}

// Reveal the answer
revealAnswerButton.addEventListener('click', () => {
    answerElement.classList.remove('hidden'); // Show the answer
});

// Navigate to the previous card
prevCardButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCard(currentCardIndex);
    }
});

// Navigate to the next card
nextCardButton.addEventListener('click', () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        loadCard(currentCardIndex);
    }
});