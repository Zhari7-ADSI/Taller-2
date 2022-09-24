addEventListener("DOMContentLoaded", (e) => {
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    let num = document.getElementById("numero").value;
    if (num >= 0 && num <= 100) {
        document.getElementById("resul").innerHTML="El número es positivo y menor que 100";
    }
    else {
        document.getElementById("resul").innerHTML="El número es negativo o mayor que 100";
    }
    })
})