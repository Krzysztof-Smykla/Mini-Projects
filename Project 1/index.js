const body = document.getElementsByTagName("body")[0]  // JS script for webpage


function setColor(name) {
    body.style.backgroundColor = name;
}

setColor("Beige")

function randomColor(){
    // Function returns a random tuple of RGB colors
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}