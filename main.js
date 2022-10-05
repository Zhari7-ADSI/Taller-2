addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {

            let consu = document.getElementById("numero1").value;

            if (consu > 130000) {

                let desc = consu * 0.15;
                let tot = consu - desc;

                document.getElementById('resultado').innerHTML = 'Descuento del 15%';
                document.getElementById('resultado2').innerHTML = 'Paga ' + tot + ' pesos';
            }
            else {
                document.getElementById("resultado").style.color = 'Sin descuento';
                document.getElementById('resultado2').innerHTML = 'Paga ' + consu + ' pesos';
            }
        }
    })
})