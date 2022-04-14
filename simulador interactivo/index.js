let valorCompra = 0

function comprar(valor) {
    if (valor > 0) {
        valorCompra = valor + valorCompra;
    }
}

function alertValor() {
    alert("El valor de su compra es " + "$" + valorCompra);
}

let productoSeleccionado = prompt("Que instrumento desea comprar?Ingrese\n1. para Guitarra $20.000, \n2 para Bajo $15.000 o \n3 para Bateria $100.000")
switch (productoSeleccionado) {
    case "1":
        comprar(20000);
        alertValor();
        break;
    case "2":
        comprar(15000);
        alertValor();
        break;
    case "3":
        comprar(100000);
        alertValor();
        break;
    default:
        alert("Su producto no existe")
        break;
}


while (confirm("Desea seguir comprando?")) {
    let productoSeleccionado = prompt("Que instrumento desea comprar?Ingrese\n1. para Guitarra $20.000, \n2 para Bajo $15.000 o \n3 para Bateria $100.000")
    switch (productoSeleccionado) {
        case "1":
            comprar(20000);
            alertValor();
            break;
        case "2":
            comprar(15000);
            alertValor();
            break;
        case "3":
            comprar(100000);
            alertValor();
            break;
        default:
            alert("Su producto no existe")
            break;
    }
}