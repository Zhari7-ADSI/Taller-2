addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {

            let rango = document.getElementById("numero1").value;
            let horas = document.getElementById("numero2").value;

            if (rango == "P" || rango == "p") {   
                let forma = horas * 20000;
                document.getElementById('resultado').innerHTML = 'Su pago es de '+ forma + ' pesos.';
            }
            else if (rango == "a" || rango == "A") {
                let forma = horas * 10000;
                document.getElementById("resultado").innerHTML = 'Su pago es de '+ forma + ' pesos.';
            }
            else {
                document.getElementById("resultado").innerHTML = 'La letra que ingresó es incorrecta.';
            }
        }
    })
})