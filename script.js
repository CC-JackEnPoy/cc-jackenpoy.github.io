const playerId = document.querySelector('#playerId');
const computerId = document.querySelector('#computerId');
const resultId = document.querySelector('#resultId');
const choiceBtns = document.querySelectorAll('.choiceBtn');

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    computerTurn();
    playerId.textContent = `Player: ${player}`;
    computerId.textContent = `Computer: ${computer}`;
    resultId.textContent = checkWinner();

}));

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner() {
    if(player == computer){
        return "- Draw! -";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? " *0* You Win! *0* " : " =( You Lose! =( "
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? " *0* You Win! *0* " : " =( You Lose! =( "
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? " *0* You Win! *0* " : " =( You Lose! =( "
    }
}










/*
const choices = document.querySelector('.btn-group');
const rock = document.querySelector('rock');
const paper = document.querySelector('paper');
const scissors = document.querySelector('scissors');
const results = document.querySelector('.results');

rock.addEventListener('click', function(){
    let result = '';
    let score = 0;
    const randomNum = Math.round(Math.random());

    if (randomNum)
}}}
*/
