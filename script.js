var optionArray = [
    'rock',
    'paper',
    'scissors'
  ];
  let playerSelection;
  let userScore = 0;
  let computerScore = 0;
const userH1 = h1.querySelector('#userScore');
const compH1 = h1.querySelector('#computerSocre');
let roundCount = 0;


  // functions:
  function computerPlay(){
    let i =  Math.floor(Math.random()*optionArray.length);
    return optionArray[i];
  }
  
  function winner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) return console.log('you tie')
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper')  return console.log('you lose');
      else return console.log('you win');
    };
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors')  return console.log('you lose');
      else return console.log('you win');
    };
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock')  return console.log('you lose');
      else return console.log('you win');
    };
  }
  
  function anotherRound(playAgain) {
    if (playAgain === 'y' || 'yes') return true;
    else return false;
  
  }



  const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.id);
        game(playerSelection)
      });
    });

  
  // ACTUAL GAME CODE WRAPPED IN A FUNCTION TO CALL
  function game(playerSelection) {
    // let computer choose an option
    let computerSelection = computerPlay ();
    //function for  nesting if statements to see who wins
    winner(playerSelection, computerSelection);
    // prints out winner
    if (roundCount > 5) {
        game(playerSelection)
    }
  }
  game()
