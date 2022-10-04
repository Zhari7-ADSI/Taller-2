addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar(){

            let presion = document.getElementById("numero1").value;
            let temperatura = document.getElementById("numero2").value;

            if((temperatura > 100) || (presion > 200)){
                document.getElementById('resultado').style.color = "red";
                document.getElementById('resultado').innerHTML = '¡¡¡ ALARMA🅰️ !!!';
            }
            else{
                document.getElementById("resultado").style.color = "blue";
                document.getElementById('resultado').innerHTML = 'NORMAL✅';
            }
        }
    })
})