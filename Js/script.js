const value = ['rock', 'paper', 'scissors']
const lose = "You lose!"
const win = "You win!"
const draw = "It's a draw!!"
let human_score = 0
let computer_score = 0
function computer() {
    choice = value[Math.floor(Math.random() * value.length)];
    return choice;
}
const rockBtn = document.querySelector('#Rock')
const paperBtn = document.querySelector('#Paper')
const scissorsBtn = document.querySelector('#Scissors')

function playground(player_choice,computer_choice) {
  let Com = document.getElementById(computer_choice+'Com')
  buttonTransform(Com);
  if (player_choice == computer_choice) {
    return;
  }
  else if (player_choice == 'rock' && computer_choice == 'scissors' ||
  player_choice == 'paper' && computer_choice == 'rock' ||
  player_choice == 'scissors' &&  computer_choice == 'paper') {
    human_score++;
    document.getElementById('humanScore').textContent = human_score;
  }
  else {
    computer_score++;
    document.getElementById('computerScore').textContent = computer_score;
  }
  checkScore()
}
rockBtn.addEventListener('click',function() {
  buttonTransform(rockBtn);
  playground('rock',computer());
})
paperBtn.addEventListener('click',function() {
  buttonTransform(paperBtn)
  playground('paper',computer());
})
scissorsBtn.addEventListener('click',function() {
  buttonTransform(scissorsBtn)
  playground('scissors',computer());
})

function checkScore() {
  if (human_score == 5) {
    alert('you win');
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

  }
  else if (computer_score == 5) {
    alert('you lose');
  }
}

function buttonTransform(btn) {
  (btn).classList.add('active-button');
  (btn).addEventListener('transitionend',removeTransform)
}

function removeTransform(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active-button')
}
