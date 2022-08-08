let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const gameMessage_div = document.getElementById("game-message");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");


/* computer choice array - chooses either rock, paper, scissors, lizard or spock from the array*/
function getCompChoice() {
    const choices = ['r', 'p', 'sc', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
    
}

/* main game function which is called when rock_div, paper_div, scissors_div, lizard_div or spock_div is clicked */
function game(playerChoice) {
     const compChoice = getCompChoice();
     switch (playerChoice + compChoice) {
        case "rl": 
        case "scl": 
        case "lp": 
        case "lsp": 
        case "psp": 
        case "spr": 
        case "spsc": 
        case "rs": 
        case "pr": 
        case "scp": 
            youWin();
            break;
        case "lr":
        case "lsc":
        case "pl":
        case "spl":
        case "spp":
        case "rsp":
        case "scsp":
        case "sr":
        case "rp":
        case "psc":
            youLose();
            break;
        case "rr":
        case "pp":
        case "scsc":
        case "spsp":
        case "ll":
            draw();
            break;
     }
}

/* function to start game via event listener on control buttons */

function runGame() {
rock_div.addEventListener('click', function() {
    game("r"); 
});

paper_div.addEventListener('click', function() {
    game("p"); 
});

scissors_div.addEventListener('click', function() {
    game("sc"); 
});

lizard_div.addEventListener('click', function() {
    game("l"); 
});

spock_div.addEventListener('click', function() {
    game("sp"); 
});

}

runGame();

/* function for if player wins - increases playerScore by 1 & displays message */
function youWin() {
    playerScore++; 
    playerScore_span.innerHTML = playerScore;
    gameMessage_div.innerHTML = "You win!";

}

/* function for if player loses - increases compScore by 1 & displays lose message */
function youLose() {
    compScore++;
    compScore_span.innerHTML = compScore;
    gameMessage_div.innerHTML = "You lose... bad luck!";

}

/*function for draw - no increment for compScore or playerScore and displays draw message */
function draw() {
    gameMessage_div.innerHTML = "It's a draw... try again!";

}
