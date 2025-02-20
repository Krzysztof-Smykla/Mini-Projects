function wypisz()
{
    let n1 = document.getElementById("pole1").value;
    let n2 = document.getElementById("pole2").value;
    let napis = ""

    for(i=n1; i<=n2; i++)
    {
       napis = napis + i + " ";
    }
    document.getElementById("wynik").innerHTML = napis;
}