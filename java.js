
function ObtenerFactorial() {
    let valorNumero = document.getElementById("numero").value;
    let numeroFloat = parseFloat(valorNumero);
    function CalcularFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
        return n *CalcularFactorial(n-1);
        }
        }
if (!isNaN(numeroFloat)) {
    let numeroFinal = CalcularFactorial(numeroFloat);
    alert(`el factorial de ${numeroFloat} es ${numeroFinal}`);
} else {
    alert("dato incorrecto, por favor ingrese un número");
}
}

















    }
}