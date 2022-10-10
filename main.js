addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {

            let valor1 = parseInt(prompt("Ingrese el valor del primer producto"));
            let valor2 = parseInt(prompt("Ingrese el valor del segundo producto"));
            let valor3 = parseInt(prompt("Ingrese el valor del tercero producto"));
            let valor4 = parseInt(prompt("Ingrese el valor del cuarto producto"));
            let valor5 = parseInt(prompt("Ingrese el valor del quinto producto"));

            if((valor1 > 0) && (valor2 > 0) && (valor3 > 0) && (valor4 > 0) && (valor5 > 0)){
                let iva1 = 0.19;
                let subt = valor1 + valor2 + valor3 + valor4 + valor5;
                let iva2 = subt * iva1;
                let total = subt + iva2;

                document.getElementById("resultado").innerHTML = 'El subtotal es: ' + subt + ' pesos';
                document.getElementById("resultado2").innerHTML = 'El total a pagar es: '+ total + ' pesos';
        }
        else {
            document.getElementById("resultado").innerHTML = 'El valor de todos los productos debe ser mayor a 0';
        }
    }
    })
})