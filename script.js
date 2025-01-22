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
let score = 0;

const playerNameInput = document.getElementById('playerName');
const startGameButton = document.getElementById('startGame');
const gameArea = document.querySelector('.game-area');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const revealAnswerButton = document.getElementById('revealAnswer');
const prevCardButton = document.getElementById('prevCard');
const nextCardButton = document.getElementById('nextCard');
const mathQuestionElement = document.getElementById('mathQuestion');
const mathAnswerInput = document.getElementById('mathAnswer');
const submitMathAnswerButton = document.getElementById('submitMathAnswer');
const scoreValueElement = document.getElementById('scoreValue');

// Start the game
startGameButton.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        gameArea.classList.remove('hidden');
        loadCard(currentCardIndex);
    } else {
        alert("נא להכניס את שמך!");
    }
});

// Load a flashcard
function loadCard(index) {
    const card = flashcards[index];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    mathQuestionElement.textContent = card.mathQuestion;
    answerElement.classList.add('hidden');
}

// Reveal the answer
revealAnswerButton.addEventListener('click', () => {
    answerElement.classList.remove('hidden');
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

// Submit math answer
submitMathAnswerButton.addEventListener('click', () => {
    const userAnswer = parseInt(mathAnswerInput.value.trim());
    const correctAnswer = eval(flashcards[currentCardIndex].mathQuestion.replace("כמה זה", "").replace("?", ""));

    if (userAnswer === correctAnswer) {
        score += 10;
        scoreValueElement.textContent = score;
        alert("תשובה נכונה! 🎉");
    } else {
        alert("תשובה לא נכונה. נסה שוב!");
    }

    mathAnswerInput.value = '';
});