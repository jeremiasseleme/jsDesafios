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

function cambiarStock() {
    document.getElementById("stockG").innerHTML = `Stock: ${instrumentos[0].stock}`
    document.getElementById("stockB").innerHTML = `Stock: ${instrumentos[1].stock}`
    document.getElementById("stockBa").innerHTML = `Stock: ${instrumentos[2].stock}`
    document.getElementById("stockGu").innerHTML = `Stock: ${instrumentos[3].stock}`
}

function agregarProducto(instrumento) {
    if (instrumento.stock !== 0) {
        const carroCompras = document.getElementById("lista");
        const item = document.createElement("li");
        item.innerHTML = `${instrumento.nombre}, $${instrumento.precio}`;
        carroCompras.appendChild(item);
    } else {
        console.log("No hay mas stock")
    }
}

function total() {
    let total = valorCompra.reduce((acc, item) => {
        return acc = acc + item;
    });
    document.getElementById("total").innerHTML = `TOTAL: $${total}`;
}

const botones = document.getElementsByClassName("instrumentos");
for (let index = 0; index < botones.length; index++) {
    const boton = botones[index];

    boton.addEventListener("click", () => {
        const instrumento = instrumentos[index];
        agregarProducto(instrumento);
        instrumentos[index].comprar()
        total()
        cambiarStock()
    }); 0
}
