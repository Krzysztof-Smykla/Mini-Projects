let numer = Math.floor(Math.random() * 5) + 1; // Global variable
let timer1 = 0;
let timer2 = 0;

function ustawSlajd(nrslajdu){
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj()
    setTimeout(zmienSlajd, 500);
}



function schowaj() {
    $("#slider").fadeOut(500);
}

function zmienSlajd() {
    numer++;
    if (numer > 5) numer = 1;

    let plik = `<img src="slajdy/slajd${numer}.png" />`;

    $("#slider").fadeOut(500, function () {
        $("#slider").html(plik).fadeIn(500);
    });

    timer1=setTimeout(zmienSlajd, 5000); // Wait 5 seconds before changing again
    timer2=setTimeout(schowaj, 4500); // Hide slightly before changing
}
