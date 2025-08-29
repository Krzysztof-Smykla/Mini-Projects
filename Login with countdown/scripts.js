// Following tutorial by BroCod and MDN documentation

console.log('Hola Mundo'); // End each JS statement with a semicolon ;

// VARIABLES

let username;

document.getElementById("myButton").onclick = function() {
    let username = document.getElementById("myInput").value; 
    document.getElementById("message").textContent = "Logging in...";

    let i = 5; // countdown start
    document.getElementById("countdown").textContent = i;

    let timer = setInterval(function() {
        i--;
        if (i > 0) {
            document.getElementById("countdown").textContent = i;
        } else {
            clearInterval(timer); // stop countdown
            document.getElementById("countdown").textContent = "";
            document.getElementById("message").textContent = "You are logged in!";
        }
    }, 1000)}; 
    // 1000 ms = 1 second