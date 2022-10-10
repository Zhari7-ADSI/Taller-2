addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {

            let sum = 0;
            let mult = 0;

            let a = Number(document.getElementById("numero1").value);
            let b = Number(document.getElementById("numero2").value);
            let c = Number(document.getElementById("numero3").value);
            let d = Number(document.getElementById("numero4").value);

            let a1 = a%2;
            let b1 = b%2;
            let c1 = c%2;
            let d1 = d%2;

            if ((a1 == 0) && (b1 == 0) && (c1 == 0) && (d1 == 0)) {   
                sum = a + b + c + d;
            }
            else if ((a1 != 0) && (b1 != 0) && (c1 != 0) && (d1 != 0)) {
                 mult = a * b * c * d;
            }
            document.getElementById("resultado").innerHTML = 'La suma es: '+ sum;
            document.getElementById("resultado2").innerHTML = 'La multiplicacion es: '+ mult;
        }
    })
})