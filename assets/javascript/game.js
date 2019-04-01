var letterList = "abcdefghijklmnopqrstuvwxyz";
var wordList = ["horus", "fulgrim", "perturabo", "curze", "mortarion", "magnus", "lorgar", "angron", "alpharius"]
var computerGuess = wordList[Math.floor(Math.random() * wordList.length)]
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesList = []
var arrayLength = computerGuess.length
var word = []
var success = 0
var wordWin = 0
var correct = 0


function generateWord() {
    computerGuess = wordList[Math.floor(Math.random() * wordList.length)];
    arrayLength = computerGuess.length
    console.log(arrayLength)
    for (var i = 0; i < arrayLength; i++) {
        word.push("_");
        wordWin++;
    }
    guessesLeft = 15;
    document.getElementById("word").textContent = word;
    document.getElementById("word").textContent = word;
    document.getElementById("wins").textContent = wins;
    document.getElementById("guessleft").textContent = guessesLeft;
    document.getElementById("guesses").textContent = guessesList;
}
generateWord();


console.log(computerGuess)

document.onkeydown = function (event) {
    var userGuess = event.key;

    if (letterList.includes(userGuess)) {
        if (guessesList.includes(userGuess) || word.includes(userGuess)) {
        }
        else {
            for (var i = 0; i < arrayLength; i++) {
                var check = computerGuess.charAt(i);
                if (check === userGuess) {
                    word[i] = userGuess;
                    console.log(check);
                    success = 1;
                    document.getElementById("word").textContent = word;
                    correct++;
                }

            }
            if (success === 0) {
                guessesLeft--;
                guessesList.push(userGuess);
            }

        }


    }
    else { alert("Invalid Key"); }

    console.log("correct =" + correct)
    console.log("wordWin=" + wordWin)
    success = 0;
    document.getElementById("word").textContent = word;
    document.getElementById("wins").textContent = wins;
    document.getElementById("guessleft").textContent = guessesLeft;
    document.getElementById("guesses").textContent = guessesList;
}
document.onkeyup = function () {
    if (correct === wordWin) {
        alert("You Win!!!");
        correct = 0;
        wordWin = 0;
        wins++;
        word = [];
        guessesList = [];
        generateWord();
    }
    if (guessesLeft <= 0) {
        alert("You lose...");
        correct = 0;
        wordWin = 0;
        losses++;
        word = [];
        guessesList = [];
        generateWord();
    }
}

