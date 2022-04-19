// let valorCompra = 0

// function comprar(valor) {
//     if (valor > 0) {
//         valorCompra = valor + valorCompra;
//     }
// }

// function alertValor() {
//     alert("El valor de su compra es " + "$" + valorCompra);
// }


class instrumento {
    constructor(precio, nombre, stock) {
        this.precio = precio;
        this.nombre = nombre;
        this.stock = stock;
    }
    comprar() {
        if (this.stock != 0) {
            this.stock -= 1;
            carritoCompras.push(this.nombre);
            valorCompra.push(this.precio);
        } else {
            alert("No hay mas stock de este producto");
        }
    }
}

    let instrumentos = []

instrumentos.push(new instrumento(46270, "Guitarra Clasica de Estudio C260", 3))
instrumentos.push(new instrumento(118270, "Bajo Electrico Yamaha Trbx 305 Black", 4))
instrumentos.push(new instrumento(203485, "Bateria Yamaha Stage Custom", 2))
instrumentos.push(new instrumento(176270, "Guitarra Yamaha Silent Slg200n Nt Electrocriolla", 2))

let carritoCompras = []
let valorCompra = []

let productoSeleccionado = prompt("Que instrumento desea comprar?Ingrese\n1. para Guitarra $46270, \n2 para Bajo $118270  \n3 para Bateria $203485 \n4 para Guitarra Electrica $176270")
switch (productoSeleccionado) {
    case "1":
        instrumentos[0].comprar();
        break;
    case "2":
        instrumentos[1].comprar();
        break;
    case "3":
        instrumentos[2].comprar();
        break;
    case "4":
        instrumentos[3].comprar();
        break;
    default:
        alert("Su producto no existe")
        break;
}


while (confirm("Desea seguir comprando?")) {
    let productoSeleccionado = prompt("Que instrumento desea comprar?Ingrese\n1. para Guitarra $46270, \n2 para Bajo $118270  \n3 para Bateria $203485 \n4 para Guitarra Electrica $176270")
    switch (productoSeleccionado) {
        case "1":
            instrumentos[0].comprar();
            break;
        case "2":
            instrumentos[1].comprar();
            break;
        case "3":
            instrumentos[2].comprar();
            break;
        case "4":
            instrumentos[3].comprar();
            break;
        default:
            alert("Su producto no existe")
            break;
    }
}

let total = valorCompra.reduce((acc, item) => {
    return acc = acc + item;
});

alert("Usted ha comprado\n" + carritoCompras.join("\n"))
alert("El valor de su compra es $" + total)