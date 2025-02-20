function sprawdz()
{
    const liczba = document.getElementById("pole").value; 
    // Uchwyt getElementById pobiera element o id = "pole",
    // .value pobiera wartość znajdującą się w elemencie o id = "pole".
    
    if (liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba<0) document.getElementById("wynik").innerHTML="ujemna";
    else if (liczba==0)document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="To nie jest liczba!";
}
