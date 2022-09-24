addEventListener("DOMContentLoaded", (e) => {
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let num1 = document.getElementById("numero1").value;
        let num2 = document.getElementById("numero2").value;
        let num3 = document.getElementById("numero3").value;

        if (num1 > num2 && num1 > num3) {
            document.getElementById("resul").innerHTML = "El número mayor es: " + num1;
            if (num2 < num3) {
                document.getElementById("resul2").innerHTML = "El número menor es: " + num2;
            }
            else if (num3 < num2) {
                document.getElementById("resul2").innerHTML = "El número menor es: " + num3;
            }
            else {
                document.getElementById("resul2").innerHTML = "El número igual es: " + num2;
            }
        }

        else if (num2 > num1 && num2 > num3) {
            document.getElementById("resul").innerHTML = "El número mayor es: " + num2;
            if (num1 < num3) {
                document.getElementById("resul2").innerHTML = "El número menor es: " + num1;
            }
            else if (num3 < num1) {
                document.getElementById("resul2").innerHTML = "El número menor es: " + num3;
            }
            else {
                document.getElementById("resul2").innerHTML = "El número igual es: " + num1;
            }
        }

        else if (num3 > num1 && num3 > num2) {
            document.getElementById("resul").innerHTML = "El número mayor es: " + num3;
            if (num1 < num2) {
                document.getElementById("resul2").innerHTML = "El número menor es: " + num1;
            }
            else if (num2 < num1) {
                document.getElementById("resul2").innerHTML = "El número menor es: " + num2;
            }
            else {
                document.getElementById("resul2").innerHTML = "El número igual es: " + num2;
            }
        }

        else {
            document.getElementById("resul2").innerHTML = "El número igual es: " + num1;
        }

    })
})