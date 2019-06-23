let randomNumber = Math.floor(Math.random()*100)+1;
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
let count = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (count === 1){
        guesses.textContent = "Previous guess: ";
    }
    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulation! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();

    } else if (count === 10) {
        lastResult.textContent = "!Game Over!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = " ";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "red";
        (userGuess < randomNumber) ? lowOrHi.textContent="Your guess is too low" : lowOrHi.textContent="Your guess is too high";
    }
    
    count++;
    guessField.value = " ";
    guessField.focus();
    
};

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
    
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start Again";
    document.getElementById('container').appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);

}

function resetGame() {
    count=1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    let paras = document.querySelectorAll('.info p');
    for (let i=0; i < paras.length; i++){
        paras[i].textContent = " ";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.focus();
    randomNumber = Math.floor(Math.random()*100)+1;
}

