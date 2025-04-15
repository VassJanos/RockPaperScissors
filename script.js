let humanScore = 0;
let compScore = 0;

function GetComputerChoice() {
    let choice = " ";

    let rand = Math.floor(Math.random()*3+1);

    if (rand == 1) {
        choice = "rock";
    } else if (rand == 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    
    return (choice);
}

function GetHumanChoice() {
    let choice = prompt("choose your destiny:").toLowerCase();
    return choice;
}

function playRound(GetComputerChoice, GetHumanChoice) {
    
}

/*
GetComputerChoice (math.random)

GetHumanChoice (prompt)
-make it case insensitive

global scope var - humanScore CompScore

playRound (parameters humanChoice:compChoice)
-representing round winner exm.: "You lose! Paper beats Rock”

playGame
-calls playRound for 5 rounds
*/