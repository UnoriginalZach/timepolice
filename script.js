var optionArray = [
    'rock',
    'paper',
    'scissors'
  ];
  let playerSelection;
  let userScore = 0;
  let computerScore = 0;
const userH1 = document.querySelector('#userScore');
const compH1 = document.querySelector('#computerScore');
const h4 = document.querySelector('#textEdit');
let roundCount = 0;


  // functions:
  function computerPlay(){
    let i =  Math.floor(Math.random()*optionArray.length);
    return optionArray[i];
  }
  
  function winner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        ++computerScore
        return h4.textContent = 'They Caught You';
    };

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper')  {
            ++computerScore;
          return h4.textContent = 'They Wrote You Out of Existence';
        }
        else {
            ++userScore;
            return h4.textContent = 'You Avoided Them In Another Time And Solidified Your Reality';  
        }
    };

    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors')  {
            ++ computerScore;
            return h4.textContent = 'They Wrote You Out of Existence';
        }
      else {
          ++userScore;
          return h4.textContent = 'You Avoided Them In Another Time And Solidified Your Reality';
      }
    };
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock')  {
          ++ computerScore;
          return h4.textContent = 'They Wrote You Out of Existence';
      }
      else {
          ++userScore;
          return h4.textContent = 'You Avoided Them In Another Time And Solidified Your Reality';
      }
    };
  };
  
//   function anotherRound(playAgain) {
//     if (playAgain === 'y' || 'yes') return true;
//     else return false;
  
//   }



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
    userH1.textContent = userScore
    compH1.textContent = computerScore
  }
  game()
