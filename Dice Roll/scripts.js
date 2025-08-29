// Random Numbers

let randomNum = Math.random();
console.log(randomNum);  // Generates random number from 0, 1

// Dice roll
document.getElementById("diceroll").onclick = function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("res").textContent = "You rolled: " + dice;
};