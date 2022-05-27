// -------------- CLASE ----------------
class instrumento {
    constructor(precio, nombre, imagen, familia, stock) {
        this.precio = precio;
        this.nombre = nombre;
        this.imagen = imagen;
        this.familia = familia;
        this.stock = stock;
    }
    comprar() {
        if (this.stock != 0) {
            this.stock -= 1
            carritoCompras.push(this.nombre)
            valorCompra.push(this.precio)
            imagenes.push(this.imagen)
            Toastify({
                text: `Se agrego ${this.nombre} al carrito!`,
                duration: 3000,
                destination: "",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: " rgba(255, 0, 0, 0.9)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        } else {
            Toastify({
                text: "No hay mas stock de este producto",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "rgba(0, 0, 0, 0.9)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
    }
}


// ------------ARRAYS---------------

let instrumentos = []
let carritoCompras = []
let valorCompra = []
let imagenes = []

// ---------------------- RECUPERAR SESION --------------------

carritoCompras = JSON.parse(sessionStorage.getItem("carritoCompras")) || [];
console.log(carritoCompras)
valorCompra = JSON.parse(sessionStorage.getItem("valorCompra")) || [];
console.log(valorCompra)
imagenes = JSON.parse(sessionStorage.getItem("imagenes")) || [];
console.log(imagenes)
if((JSON.parse(sessionStorage.getItem("stock"))) !== null) {
JSON.parse(sessionStorage.getItem("stock")).forEach((producto) => {
instrumentos.push(new instrumento(producto.precio, producto.nombre, producto.imagen, producto.familia, producto.stock))
})
}

// ---------------- CARGAR PRODUCTOS--------------------------
if (instrumentos == "") {
    fetch("./instrumentos.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                instrumentos.push(new instrumento(producto.precio, producto.nombre, producto.imagen, producto.familia, producto.stock))
            })
        })
}
console.log(instrumentos)

// ------------------ CREAR TAJETAAS ---------------------
setTimeout(() => {
    const container = document.getElementById("productos");
    console.log(container);
    for (let index = 0; index < instrumentos.length; index++) {
        container.innerHTML += `<div class="cont_productos ${instrumentos[index].familia}">
        <div class="card">
        <img src="${instrumentos[index].imagen}"
        alt="${instrumentos[index].nombre}">
        </div>
        <div class="info">
        <h2>${instrumentos[index].nombre}</h2>
        <p class="infop"></p>
        </div>
        <div class="precio">
        <div class="box_precio">
        <span class="precio2"><b>$${instrumentos[index].precio}</b></span>
        <span class="stock" id="stock${index}">Stock: ${instrumentos[index].stock}</span>
        </div>
        <button id="btn0" class="instrumentos"><span class="shoping"><i
        class="fas fa-cart-plus"></i></span></button>
        </div>
        </div>`
    }
}, 100)

// -------------- ACTUALIZAR STOCK -----------------------

function cambiarStock() {
    const stock = document.getElementsByClassName("stock");
    for (let index = 0; index < instrumentos.length; index++) {
        stock[index].innerHTML = `<p>Stock: ${instrumentos[index].stock}</p>`;
    }
}
// --------------- AGREGAR PRODUCTOS AL CARRO DOM -------------------------

function agregarProducto(instrumento) {
    if (instrumento.stock !== 0) {
        const carroCompras = document.getElementById("lista");
        const item = document.createElement("li");
        item.classList.add("item");
        item.innerHTML = `<img class="imgCarro" src="${instrumento.imagen}"
        alt="${instrumento.nombre}"> <p>${instrumento.nombre} $${instrumento.precio}</p>`;
        carroCompras.appendChild(item);
    } else {
        console.log("No hay mas stock")
    }
}

// ------------- GUARDAR LOS DATOS DE LOS ARRAYS -----------------

function guardarSesion() {
    sessionStorage.setItem("carritoCompras", JSON.stringify(carritoCompras))
    sessionStorage.setItem("valorCompra", JSON.stringify(valorCompra))
    sessionStorage.setItem("stock", JSON.stringify(instrumentos))
    sessionStorage.setItem("imagenes", JSON.stringify(imagenes))
}

// ------------- TOTAL DEL VALOR DE COMPRA ----------------

function total() {
    let total = valorCompra.reduce((acc, item) => {
        return acc = acc + item;
    });
    document.getElementById("total").innerHTML = `TOTAL: $${total}`;
}

// ----------------------- RECARGAR CARRITO ---------------------------------
setTimeout(() => {
    for (let index = 0; index < carritoCompras.length; index++) {
        const carroCompras = document.getElementById("lista");
        const item = document.createElement("li");
        item.classList.add("item");
        item.innerHTML = `<img class="imgCarro" src="${imagenes[index]}" alt="${carritoCompras[index]}"> <p>${carritoCompras[index]} $${valorCompra[index]}</p>`;
        carroCompras.appendChild(item);
        total()
        cambiarStock()
        console.log("dasd")
    }
}, 200)

// --------------- INTENTO DE BOTONES REMOVE -------------------------

// function quitarProducto(){
//     const botonesR = document.getElementsByClassName("btnRemove");
//     console.log(botonesR);
//     const li = document.getElementsByClassName("item");
//     console.log(li);
//     for (let index = 0; index < li.length; index++) {
//             console.log(li[index]);
//             li[index].remove();
//     }
// }

// function quitarProducto(){
//         const li = document.getElementsByClassName("item");
//         console.log(li.length)
//         for(let index = 0; index < li.length; index++){
//         li[index].remove();
//         li[index].parentNode.removeChild(li[index]);
//     }
// }

// ---------------------- VACIAR CARRITO -----------------------------
function quitarProducto() {
    valorCompra = [];
    carritoCompras = [];
    imagenes = [];
    instrumentos = [];
    fetch("./instrumentos.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
                instrumentos.push(new instrumento(producto.precio, producto.nombre, producto.imagen, producto.familia, producto.stock))
            })
        })
        setTimeout(()=> {
            cambiarStock();
            guardarSesion()
        },200)
        Toastify({
            text: "Vaciaste el carrito de compras!!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "rgba(0, 0, 255, 0.9)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    document.getElementById("total").innerHTML = `TOTAL: $0`;
    document.querySelectorAll(".item").forEach(instrumentoC => {
        instrumentoC.remove();
    })
} 


// -------------------------- BOTONES COMPRA CARDS --------------------------------------
setTimeout(() => {
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
}, 500)


// ------------------BUSCADOR--------------------

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

// -----------------BOTONES DE FILTROS POR CATEGORIA-----------------------

let todos = document.getElementById("todos");
todos.addEventListener("click", () => {
    todos.classList.add("active");
    cuerdas.classList.remove("active");
    vientos.classList.remove("active");
    percusion.classList.remove("active");
    document.querySelectorAll(".cont_productos").forEach(instrumento => {
        instrumento.classList.remove("filtro");

    });

})

let cuerdas = document.getElementById("cuerdas");
cuerdas.addEventListener("click", () => {
    cuerdas.classList.add("active");
    todos.classList.remove("active");
    vientos.classList.remove("active");
    percusion.classList.remove("active");
    document.querySelectorAll(".cont_productos").forEach(instrumento => {
        if (instrumento.className.toLowerCase().includes("cuerdas")) {
            instrumento.classList.remove("filtro");
        } else {
            instrumento.classList.add("filtro")
        }

    });

})

let vientos = document.getElementById("vientos");
vientos.addEventListener("click", () => {
    vientos.classList.add("active");
    cuerdas.classList.remove("active");
    todos.classList.remove("active");
    percusion.classList.remove("active");
    document.querySelectorAll(".cont_productos").forEach(instrumento => {
        if (instrumento.className.toLowerCase().includes("vientos")) {
            instrumento.classList.remove("filtro");
        } else {
            instrumento.classList.add("filtro")
        }

    });

})

let percusion = document.getElementById("percusion");
percusion.addEventListener("click", () => {
    percusion.classList.add("active");
    cuerdas.classList.remove("active");
    vientos.classList.remove("active");
    todos.classList.remove("active");
    document.querySelectorAll(".cont_productos").forEach(instrumento => {
        if (instrumento.className.toLowerCase().includes("percusion")) {
            instrumento.classList.remove("filtro");
        } else {
            instrumento.classList.add("filtro")
        }

    });

})