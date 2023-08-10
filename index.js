// Function to generate a random number between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image based on the roll result
function updateDiceImage1(rollResult1) {
    const diceImage = document.getElementById('diceImage1');
    diceImage1.setAttribute('src', `./images/dice${rollResult1}.png`);
}

function updateDiceImage2(rollResult2) {
    const diceImage = document.getElementById('diceImage2');
    diceImage2.setAttribute('src', `./images/dice${rollResult2}.png`);
}

// Function to simulate rolling a dice and update the image
function rollDice() {
    var rollResult1 = getRandomNumber();
    var rollResult2 = getRandomNumber();
    updateDiceImage1(rollResult1);
    updateDiceImage2(rollResult2);
    result(rollResult1, rollResult2);
}

// Call the rollDice() function when you want to roll the dice
rollDice();

function result(rollResult1, rollResult2){
    if(rollResult1>rollResult2){
        document.querySelector("h1").textContent="Player 1 wins!";
    }
    else if(rollResult1==rollResult2){
        document.querySelector("h1").textContent="Draw!";
    }
    else{
        document.querySelector("h1").textContent="Player 2 wins!";
    }
}

