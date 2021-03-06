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
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: " rgba(28, 136, 18, 0.9)",
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
    valorCompra = JSON.parse(sessionStorage.getItem("valorCompra")) || [];
    imagenes = JSON.parse(sessionStorage.getItem("imagenes")) || [];
    instrumentos = JSON.parse(sessionStorage.getItem("stock")) || [];
    
    // ---------------- CARGAR PRODUCTOS--------------------------

    if (instrumentos == "") {
        instrumentos.push(new instrumento(46270, "Guitarra Clasica de Estudio C260", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/GUITARRA-NUNEZ-C260.jpg", "Cuerdas", 3))
        instrumentos.push(new instrumento(118270, "Bajo Electrico Yamaha Trbx 305", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/09/BAJO-YAMAHA-5-CUERDAS.jpg", "Cuerdas", 4))
        instrumentos.push(new instrumento(203485, "Bateria Yamaha Stage Custom", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/09/BATERIA-YAMAHA-STAGE-CUSTOM.jpg", "Percusion", 2))
        instrumentos.push(new instrumento(176270, "Guitarra Yamaha Silent Slg200n", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/09/GUITARRA-YAMAHA-SLG200.jpg", "Cuerdas", 2))
        instrumentos.push(new instrumento(27432, "Clarinete Estudio Parquer Custom", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/12/CLARINETE-PARQUER-1.jpg", "Vientos", 5))
        instrumentos.push(new instrumento(63658, "Saxo Alto Heimond 6430L Gold", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/SAXO-HEIMOND-1.jpg", "Vientos", 2))
        instrumentos.push(new instrumento(220230, "Saxo Tenor Mystic Parquer PSTM", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/SAXO-TENOR-MISTIQUE-PARQUER.jpg", "Vientos", 3))
        instrumentos.push(new instrumento(139630, "Flauta Traversa YFL222 Yamaha", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/FLAUTA-TRAVERSA-YAMAHA.jpg", "Vientos", 4))
        instrumentos.push(new instrumento(11520, "Set de 7 Armonicas Bluseras Swan", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/12/ARMONICA-SWAN-X-7-1.jpg", "Vientos", 6))
        instrumentos.push(new instrumento(96000, "Fiscornio Contralto Parquer", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/FLISCORNIO-PARQUER.jpg", "Vientos", 1))
        instrumentos.push(new instrumento(2000, "Cajon Peruano Skull ALEYMAR", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/CAJON-SKULL-PERUANO.jpg", "Percusion", 10))
        instrumentos.push(new instrumento(101270, "Bateria Completa Mapex Prodigy", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/08/BATERIA-MAPEX.jpg", "Percusion", 3))
        instrumentos.push(new instrumento(26725, "Platillo HIHAT 14 Tiger Uflip", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/PLATILLO-UFIP-TIGER-HIHAT.jpg", "Percusion", 4))
        instrumentos.push(new instrumento(2570, "Parche Remo Encore Pinstripe 18''", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/REMO-ENCORE-PINE-STRIPE.jpg", "Percusion", 10))
        instrumentos.push(new instrumento(19300, "Platillo 14 HiHat Sabian Sbr1402", "https://http2.mlstatic.com/D_NQ_NP_891306-MLA29433887307_022019-O.webp", "Percusion", 4))
        instrumentos.push(new instrumento(124940, "Bajo Electroacustico Takamine", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/06/BAJO-ACUSTICO-TAKAMINE1.jpg", "Cuerdas", 2))
        instrumentos.push(new instrumento(56800, "Cello 4/4 L1443 Heimond Completo", "https://lacasadelmusico.com.ar/wp-content/uploads/2020/10/CELLO.jpg", "Cuerdas", 3))
        instrumentos.push(new instrumento(132449, "Guitarra electr Fender Coronado", "https://http2.mlstatic.com/D_NQ_NP_674767-MLA46456991314_062021-O.webp", "Cuerdas", 1))
        instrumentos.push(new instrumento(16276, "Violin Estudio 4/4 + Accesorios", "https://http2.mlstatic.com/D_NQ_NP_631186-MLA33084043263_122019-O.webp", "Cuerdas", 5))
        instrumentos.push(new instrumento(150620, "Contrabajo Custom 1/4 Parquer", "https://lacasadelmusico.com.ar/wp-content/uploads/2021/07/CONTRABAJO-PARQUER.jpg", "Cuerdas", 2))
    }
console.log(instrumentos);

// ------------------ CREAR TAJETAAS ---------------------

const container = document.getElementById("productos");
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

function quitarProducto() {
    document.querySelectorAll(".item").forEach(instrumentoC => {
        instrumentoC.remove();
    })
}

// -------------------------- BOTONES COMPRA CARDS --------------------------------------

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