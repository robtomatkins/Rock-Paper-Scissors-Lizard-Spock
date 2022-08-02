const playerScore = 0;
const compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.getElementById("score-board");
const gameMessage_div = document.getElementById("game-message")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")
const lizard_div = document.getElementById("lizard")
const spock_div = document.getElementById("spock")


function compChoice() {
    /* computer choice array - chooses either rock, paper, scissors, lizard or spock from the array*/
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices(randomNumber);

}

/* game function is called when rock_div is clicked*/
function game(playerChoice) {
     
}

function runGame() {

rock_div.addEventListener('click', function() {
    game("r"); 
})

paper_div.addEventListener('click', function() {
    game("p"); 
})

scissors_div.addEventListener('click', function() {
    game("sc"); 
})

lizard_div.addEventListener('click', function() {
    game("l"); 
})

spock_div.addEventListener('click', function() {
    game("sp"); 
})

}

runGame();