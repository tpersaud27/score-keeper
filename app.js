// Selecting player one button
const playerOneButton = document.querySelector('#player-one-button');
// Selecting player two button
const playerTwoButton = document.querySelector('#player-two-button');
// Selecting the reset button
const resetButton = document.querySelector('#reset-button')

// Selecting the score display for player one (Note: this is just the span element)
const playerOneDisplay = document.querySelector('#player-one-display');
// Selecting the score display for player two (Note: this is just the span element)
const playerTwoDisplay = document.querySelector('#player-two-display');

// Selecting the winning score select menu
const winningScoreSelect = document.querySelector('#playTo');


// Player one score
let p1Score = 0;
// Player two score
let p2Score = 0;
// This is the score where the game will end
let winningScore = 3;
// This will keep track if the game is over
// Once this is true, the game will stop. Can be reset using reset button
let isGameOver = false;


// This event listener will update the player one score if clicked
playerOneButton.addEventListener('click', (event) => {

    // If the game is not over
    if (!isGameOver) {
        // We will increment the score
        p1Score++;
        // Check if the winning score is achieved
        if (p1Score === winningScore) {
            // if winning score is achieved we must change isGameOver to true
            isGameOver = true;
            // We add the coloring to the scores
            playerOneDisplay.classList.add("has-text-success");
            playerTwoDisplay.classList.add("has-text-danger");
            // Disable button
            playerOneButton.disabled = true;
        }
        // Now we set the innerHTML to the new score
        playerOneDisplay.innerHTML = p1Score;
    }

})

// This event listener will update the player two score if clicked
playerTwoButton.addEventListener('click', (event) => {

    // If the game is not over
    if (!isGameOver) {
        // We will increment the score
        p2Score++;
        // Check if the winning score is achieved
        if (p2Score === winningScore) {
            // if winning score is achieved we must change isGameOver to true
            isGameOver = true;
            // We add the coloring to the score
            playerTwoDisplay.classList.add("has-text-success");
            playerOneDisplay.classList.add("has-text-danger");
            // Disable button
            playerTwoButton.disabled = true;

        }
        // Now we set the innerHTML to the new score
        playerTwoDisplay.innerHTML = p2Score;
    }

})

// This event listener will reset the scores of the two players if clicked
resetButton.addEventListener('click', reset)

// This event listener will update the winning score based on the value the user has selected. This is best done using a change event
// Once the winning score is changed, the player scores should be reset
winningScoreSelect.addEventListener('change', function (event) {
    
    winningScore = parseInt(this.value);    
    reset();
})

// This function will reset the board information
function reset() {
    
    // reset scores, displays, and styles
    p1Score = 0;
    playerOneDisplay.innerHTML = 0;
    playerOneDisplay.classList.remove('has-text-success', 'has-text-danger')

    p2Score = 0;
    playerTwoDisplay.innerHTML = 0;
    playerTwoDisplay.classList.remove('has-text-success', 'has-text-danger')

    // reset isGameOver
    isGameOver = false;
    
    // Undisable the buttons
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
   
}
