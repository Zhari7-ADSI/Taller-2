addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {
            
            let num1 = Number(document.getElementById("numero1").value);
            let num2 = Number(document.getElementById("numero2").value);

            if (num1 > num2) {
                let rest = num1 - num2;
                document.getElementById("resultado").innerHTML = "La resta es:" + rest;
            }
            else {
                document.getElementById("resultado").innerHTML = "No ha sido posible realizar la operación, el primer número debe ser mayor que el segundo.";
            }
        }
    })
})