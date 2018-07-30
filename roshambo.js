const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' ||  userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('ERROR! Please enter Rock, Paper, or Scissors');
    return;
  }
};

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  const winMessage = 'YOU WIN!';
  const loseMessage = 'YOU LOSE!';
  const tieMessage = 'TIE! Play again.'

  if(userChoice === 'bomb') {
    return 'BOMB ACTIVATED. USER WINS AUTOMAGICALLY!';
  }

  if(userChoice === computerChoice) {
    return tieMessage;
  }

  if(userChoice === 'rock') {
    if(computerChoice  === 'paper') {
      return loseMessage;
    } else {
      return winMessage;
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return loseMessage;
    } else {
      return winMessage;
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return loseMessage;
    } else {
      return winMessage;
    }
  }
};

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`The user chose ${userChoice}. The computer chose ${computerChoice}.`)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
