class instrumento {
    constructor(precio, nombre, familia, stock) {
        this.precio = precio;
        this.nombre = nombre;
        this.familia = familia;
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

instrumentos.push(new instrumento(46270, "Guitarra Clasica de Estudio C260", "Cuerdas", 3))
instrumentos.push(new instrumento(118270, "Bajo Electrico Yamaha Trbx 305", "Cuerdas", 4))
instrumentos.push(new instrumento(203485, "Bateria Yamaha Stage Custom", "Percusion", 2))
instrumentos.push(new instrumento(176270, "Guitarra Yamaha Silent Slg200n", "Cuerdas", 2))
instrumentos.push(new instrumento(27432, "Clarinete Estudio Parquer Custom", "Vientos", 5))
instrumentos.push(new instrumento(63658, "Saxo Alto Heimond 6430L Gold", "Vientos", 2))
instrumentos.push(new instrumento(220230, "Saxo Tenor Mystic Parquer PSTM", "Vientos", 3))
instrumentos.push(new instrumento(139630, "Flauta Traversa YFL222 Yamaha", "Vientos", 4))
instrumentos.push(new instrumento(11520, "Set de 7 Armonicas Bluseras Swan", "Vientos", 6))
instrumentos.push(new instrumento(96000, "Fiscornio Contralto Parquer", "Vientos", 1))
instrumentos.push(new instrumento(2000, "Cajon Peruano Skull ALEYMAR", "Vientos", 10))
instrumentos.push(new instrumento(101270, "Bateria Completa Mapex Prodigy", "Percusion", 3))
instrumentos.push(new instrumento(26725, "Platillo HIHAT 14 Tiger Uflip", "Percusion", 4))
instrumentos.push(new instrumento(2570, "Parche Remo Encore Pinstripe 18''", "Percusion", 10))
instrumentos.push(new instrumento(19300, "Platillo 14 HiHat Sabian Sbr1402", "Percusion", 4))
instrumentos.push(new instrumento(124940, "Bajo Electroacustico Takamine", "Cuerdas", 2))
instrumentos.push(new instrumento(56800, "Cello 4/4 L1443 Heimond Completo", "Cuerdas", 3))
instrumentos.push(new instrumento(132449, "Guitarra electr Fender Coronado", "Cuerdas", 1))
instrumentos.push(new instrumento(16276, "Violin Estudio 4/4 + Accesorios", "Cuerdas", 5))
instrumentos.push(new instrumento(150620, "Contrabajo Custom 1/4 Parquer", "Cuerdas", 2))
                            
let carritoCompras = []
let valorCompra = []

cambiarStock()

const stockProductosSS = JSON.parse(sessionStorage.getItem("stock"))
const carritoenSS = JSON.parse(sessionStorage.getItem("carritoCompras"))
const valorCompraenSS = JSON.parse(sessionStorage.getItem("valorCompra"))

if (carritoenSS !== null) {
    instrumentos = stockProductosSS
    valorCompra = valorCompraenSS
    carritoCompras = carritoenSS
    for (let index = 0; index < carritoCompras.length; index++) {
        const carroCompras = document.getElementById("lista");
        const item = document.createElement("li");
        item.innerHTML = `${carritoCompras[index]}, $${valorCompra[index]} <button class="btnRemove">Eliminar</button></button>`;
        carroCompras.appendChild(item);
        total()
        cambiarStock()
    }
}

function agregarProducto(instrumento) {
    if (instrumento.stock !== 0) {
        const carroCompras = document.getElementById("lista");
        const item = document.createElement("li");
        item.innerHTML = `${instrumento.nombre}, $${instrumento.precio} <button class="btnRemove">Eliminar</button></button>`;
        carroCompras.appendChild(item);
    } else {
        console.log("No hay mas stock")
    }
}



function guardarSesion() {
    sessionStorage.setItem("carritoCompras", JSON.stringify(carritoCompras))
    sessionStorage.setItem("valorCompra", JSON.stringify(valorCompra))
    sessionStorage.setItem("stock", JSON.stringify(instrumentos))
}

function total() {
    let total = valorCompra.reduce((acc, item) => {
        return acc = acc + item;
    });
    document.getElementById("total").innerHTML = `TOTAL: $${total}`;
}

// const botonesR = document.getElementsByClassName("btnRemove");
// for (let index = 0; index < botonesR.length; index++){
//     const botonR = botonesR[index];
//     console.log(botonR);

//     botonR.addEventListener("click", () => {
//         const padre = document.getElementById("carroUl");
//         const hijo = document.getElementsByTagName("li")[index];
//         padre.removeChild(hijo);
//     })
// }

const botones = document.getElementsByClassName("instrumentos");
for (let index = 0; index < botones.length; index++) {
    const boton = botones[index];

    boton.addEventListener("click", () => {
        const instrumento = instrumentos[index];
        agregarProducto(instrumento);
        instrumento.comprar()
        total()
        cambiarStock()
        guardarSesion()
    }); 0
}


// function cambiarStock(){
//     for(let index = 0; index < 20; index++) {
//        const stock = document.getElementByClassName("stock")[index].innerHTML = `<p>Stock: ${instrumentos[index].stock}</p>`;
//     }
// }    

document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".cont_productos").forEach(instrumento => {

            instrumento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? instrumento.classList.remove("filtro")
                : instrumento.classList.add("filtro")
        })
    }
})


function cambiarStock() {
    document.getElementById("stock0").innerHTML = `Stock: ${instrumentos[0].stock}`
    document.getElementById("stock1").innerHTML = `Stock: ${instrumentos[1].stock}`
    document.getElementById("stock2").innerHTML = `Stock: ${instrumentos[2].stock}`
    document.getElementById("stock3").innerHTML = `Stock: ${instrumentos[3].stock}`
    document.getElementById("stock4").innerHTML = `Stock: ${instrumentos[4].stock}`
    document.getElementById("stock5").innerHTML = `Stock: ${instrumentos[5].stock}`
    document.getElementById("stock6").innerHTML = `Stock: ${instrumentos[6].stock}`
    document.getElementById("stock7").innerHTML = `Stock: ${instrumentos[7].stock}`
    document.getElementById("stock8").innerHTML = `Stock: ${instrumentos[8].stock}`
    document.getElementById("stock9").innerHTML = `Stock: ${instrumentos[9].stock}`
    document.getElementById("stock10").innerHTML = `Stock: ${instrumentos[10].stock}`
    document.getElementById("stock11").innerHTML = `Stock: ${instrumentos[11].stock}`
    document.getElementById("stock12").innerHTML = `Stock: ${instrumentos[12].stock}`
    document.getElementById("stock13").innerHTML = `Stock: ${instrumentos[13].stock}`
    document.getElementById("stock14").innerHTML = `Stock: ${instrumentos[14].stock}`
    document.getElementById("stock15").innerHTML = `Stock: ${instrumentos[15].stock}`
    document.getElementById("stock16").innerHTML = `Stock: ${instrumentos[16].stock}`
    document.getElementById("stock17").innerHTML = `Stock: ${instrumentos[17].stock}`
    document.getElementById("stock18").innerHTML = `Stock: ${instrumentos[18].stock}`
    document.getElementById("stock19").innerHTML = `Stock: ${instrumentos[19].stock}`
}

window.onload = () => {
    filtrarProductos("todos");
}

function filtrarProductos(valor){
    let buttons = document.querySelectorAll(".categorias");
    buttons.forEach((button) => {
        if (valor == buttons.innerText){
            console.log(buttons.innerText);
            button.classList.add("active");
        } else {
            button.classList.remove("active")
        }
    })
}

let categoriaTodos = document.querySelector("#todos")
categoriaTodos.addEventListener("click", () => {
    filtrarProductos("Todos")
});