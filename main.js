addEventListener("DOMContentLoaded", (e) => {
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let num3 = document.getElementById("numero3").value;

    if (num1 > num2 && num1 > num3 ) {
        document.getElementById("resul").innerHTML="El número mayor es: " + num1;
    }

    else if ( num1 < num2 && num2 > num3 ) {
        document.getElementById("resul").innerHTML="El número mayor es: " + num2;
    }

    else {
        document.getElementById("resul").innerHTML="El número mayor es: " + num3;
    }
    })
})