let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.getElementById("score-board");
const gameMessage_div = document.getElementById("game-message")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")
const lizard_div = document.getElementById("lizard")
const spock_div = document.getElementById("spock")

/* computer choice array - chooses either rock, paper, scissors, lizard or spock from the array*/
function getCompChoice() {
    const choices = ['r', 'p', 'sc', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
    
}


function youWin() {
    playerScore++; 
    playerScore_span.innerHTML = playerScore;
    gameMessage_div.innerHTML = "You win!"
}

function youLose() {
    compScore++;
    compScore_span.innerHTML = compScore
    gameMessage_div.innerHTML = "You lose... bad luck!"

}

function draw() {
    gameMessage_div.innerHTML = "It's a draw... try again!"

}
/* game function is called when rock_div is clicked */
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

