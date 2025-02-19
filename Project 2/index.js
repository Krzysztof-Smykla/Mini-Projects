const input = document.getElementById("input");

function reverseString(str) {
    const reversed = str.split("").reverse().join(""); // Reverse the string
    if (reversed.toLowerCase() === str.toLowerCase()) { // Ignore case sensitivity
        alert("This is a palindrome!");
    } else {
        alert("This is NOT a palindrome!");
    }
}

function check() {
    const value = input.value.trim(); // Get input value and remove extra whitespace
    if (value === "") {
        alert("Please enter a word!");
        return;
    }
    reverseString(value);
}
