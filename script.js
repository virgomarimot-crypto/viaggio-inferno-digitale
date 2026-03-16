// script.js

// Game State Management
let gameState = {
    currentCircle: 0,
    score: 0,
    circles: [],
    maxCircles: 9
};

// Load game data from JSON
async function loadGameData() {
    const response = await fetch('gameData.json');
    const data = await response.json();
    gameState.circles = data.circles;
}

// Display Circle Challenges
function displayCircleChallenge() {
    if (gameState.currentCircle < gameState.maxCircles) {
        const circle = gameState.circles[gameState.currentCircle];
        // Code to display the circle challenge on UI
        console.log(circle.challenge);
    } else {
        endGame();
    }
}

// Check Player Answers
function checkAnswer(playerAnswer) {
    const circle = gameState.circles[gameState.currentCircle];
    if (playerAnswer === circle.correctAnswer) {
        gameState.score += circle.points;
        showFeedback('Correct!');
    } else {
        showFeedback('Incorrect! Hints: ' + circle.hints.join(', '));
    }
    gameState.currentCircle++;
    displayCircleChallenge();
}

// Show Feedback
function showFeedback(message) {
    // Code to display feedback message on UI
    console.log(message);
}

// End Game Screen
function endGame() {
    // Code to display end game screen with score
    console.log('Game Over! Your score: ' + gameState.score);
}

// Initial game setup
async function initGame() {
    await loadGameData();
    displayCircleChallenge();
}

// Start the game
initGame();
