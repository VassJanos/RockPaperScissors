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
let standoff;

function playRound(choice1, choice2) {
    standoff = true;

    if (choice1 == choice2) {
        console.log("Mexican stand-off");
        standoff = false;
        return;
    }

    if (choice1 == "rock" && choice2 != "paper") {
        console.log("You won!", choice1, " beats", choice2);
        return;
    } else {
        console.log("Bad news..", choice2, "beats", choice1);
        return;
    }
    
    if (choice1 == "paper" && choice2 != "scissors") {
        console.log("You won!", choice1, " beats", choice2);
        return;
    } else {
        console.log("Bad news..", choice2, "beats", choice1);
        return;
    }

    if (choice1 == "scissors" && choice2 != "rock") {
        console.log("You won!", choice1, " beats", choice2);
        return;
    } else {
        console.log("Bad news..", choice2, "beats", choice1);
        return;
    }
}

function playGame() {
    let rounds = 1;
     while (rounds != 6) {
        let computerWeapon = GetComputerChoice();
        let humanWeapon = GetHumanChoice();

        console.log("round", rounds, ". FIGHT!");
        
        playRound(humanWeapon, computerWeapon);
        
        if (standoff == true) {
            rounds++;
        }
     }
     console.log("done.")
}

playGame();
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