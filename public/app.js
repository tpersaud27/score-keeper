// This object will hold all properties for player 1
const player1 = {
    score: 0,
    button: document.querySelector('#player-one-button'),
    display: document.querySelector('#player-one-display')
}

// This object will hold all properties for player 2
const player2 = {
    score: 0,
    button: document.querySelector('#player-two-button'),
    display: document.querySelector('#player-two-display')
}

const players = [player1, player2];

// Selecting the reset button
const resetButton = document.querySelector('#reset-button')
// Selecting the winning score select menu
const winningScoreSelect = document.querySelector('#playTo');

// This is the score where the game will end
let winningScore = 3;
// This will keep track if the game is over
// Once this is true, the game will stop. Can be reset using reset button
let isGameOver = false;

// This event listener will update the player one score if clicked
player1.button.addEventListener('click', function(){

    updateScores(player1, player2);
})

// This event listener will update the player two score if clicked
player2.button.addEventListener('click', function(){

    updateScores(player2, player1);

})

// This event listener will reset the scores of the two players if clicked
resetButton.addEventListener('click', reset)

// This event listener will update the winning score based on the value the user has selected. This is best done using a change event
// Once the winning score is changed, the player scores should be reset
winningScoreSelect.addEventListener('change', function (event) {
    
    winningScore = parseInt(this.value);    
    reset();

})

// This generic function will store the logic for the game
function updateScores(player, opponent) {
    // If the game is not over
    if (!isGameOver) {
        // We will increment the score
        player.score++;
        // Check if the winning score is achieved
        if (player.score === winningScore) {
            // if winning score is achieved we must change isGameOver to true
            isGameOver = true;
            // We add the coloring to the scores
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            // Disable button
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        // Now we set the innerHTML to the new score
        player.display.innerHTML = player.score;
    }
}

// This function will reset the board information
function reset() {

    // reset isGameOver
    isGameOver = false;
    
    for (player of players) {
        // reset scores, displays, and styles
        player.score = 0;
        player.display.innerHTML = 0;
        // This will remove which ever style is active
        player.display.classList.remove('has-text-success', 'has-text-danger')
        // Undisable the buttons
        player.button.disabled = false;
    }
}