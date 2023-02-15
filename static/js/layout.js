
const listadePromo1 = document.querySelector('#containermenu3');


Promo1.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}" loading="lazy">
        <h3>${product.nombre}</h3>
        <p class="descproducto">${product.desc}</p>
        <p class="precioproducto">Ref ${product.precio}</p>
    `;
    listadePromo1.append(content);


    let ventanaproducto = document.createElement("button");
    ventanaproducto.className = "ventanaproductoboton"
    ventanaproducto.innerHTML = `
    Agregar
         <span></span>
         <span></span>
         <span></span>
         <span></span>
     `;
    content.append(ventanaproducto);
    ventanaproducto.addEventListener("click", () => { productoindividualventana(); });

    const productoindividualventana = ("click", () => {
        modalproductoventana.innerHTML = "";
        modalproductoventana.style.display = "flex";
        const cuadroproductoindividual = document.createElement("div");
        cuadroproductoindividual.className = "cuadroproduct";
        
        modalproductoventana.append(cuadroproductoindividual);

        const imgproductoindividual = document.createElement("div");
        imgproductoindividual.className = "imgproductoindividual"
        imgproductoindividual.innerHTML = `
        <img src="${product.img}">
        `;
        cuadroproductoindividual.append(imgproductoindividual);
        


        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "✖";
        modalbutton.className = "modal-header-button";

        modalbutton.addEventListener("click", () => {
            cerrarventana();
        });

        cuadroproductoindividual.append(modalbutton);

        informacionproductoind = document.createElement("div");
        informacionproductoind.className = "informacionproductoind";
        informacionproductoind.innerHTML = `
        <h2> ${product.nombre}</h2>
        <p class="descproducto">${product.desc}</p>
        `;
        cuadroproductoindividual.append(informacionproductoind)

        const cuadrofinalproducto = document.createElement("div");
        cuadrofinalproducto.className = "cuadrofinalproducto";
        cuadrofinalproducto.style.display = "flex"
        informacionproductoind.append(cuadrofinalproducto);

        const cantidadproductoind = document.createElement("div");
        cantidadproductoind.className = "cantidadproductoind"
        cuadrofinalproducto.append(cantidadproductoind);

        const contnumerocantidadproducto = document.createElement("div");
        contnumerocantidadproducto.className = "contnumerocantidadproducto";
        cantidadproductoind.append(contnumerocantidadproducto);

        let menoscantidad = document.createElement("button");
        menoscantidad.className = "bttnmin"
        menoscantidad.innerHTML = `
        <p>_</p>`;
        menoscantidad.addEventListener("click", () => {
            if (product.cantidad > 1) {
                product.cantidad--;
                productoindividualventana();
                savelocal();
            };

        });
        contnumerocantidadproducto.append(menoscantidad);

        const numerocantidadproducto = document.createElement("div");
        numerocantidadproducto.className = "numerocantidadproducto";
        numerocantidadproducto.innerHTML = `
        <p>${product.cantidad, (product.cantidad < 10) ? "0" + product.cantidad : product.cantidad}</p>
        `;

        contnumerocantidadproducto.append(numerocantidadproducto)

        let mascantidad = document.createElement("button");
        mascantidad.className = "bttnplus"
        mascantidad.innerHTML = `
        <p>+</p>`;
        mascantidad.addEventListener("click", () => {
            product.cantidad++;
            productoindividualventana();
            savelocal()
        });

        contnumerocantidadproducto.append(mascantidad);

        const precioproductoind = document.createElement("div");
        precioproductoind.className = "precioproductoind";
        
        cuadrofinalproducto.append(precioproductoind);

        const precioproducto = document.createElement("div");
        precioproducto.className = "precioproductonum";

        precioproductoind.append(precioproducto);

        const precioproductopos = document.createElement("div");
        precioproductopos.className = "precioproductopos";
        precioproductopos.innerHTML = `
        <h5>Ref. ${product.precio * product.cantidad}</h5>
        `;

        precioproducto.append(precioproductopos);



        const botoncomprarind = document.createElement("div");
        botoncomprarind.className = "botoncomprarindividual";
        cuadrofinalproducto.append(botoncomprarind);

        const botoncomprarindcuadro = document.createElement("div");
        botoncomprarindcuadro.className = "botoncomprarindcuadro";
        botoncomprarind.append(botoncomprarindcuadro);

        let comprar = document.createElement("button");
        comprar.className = "botonagregar"
        comprar.innerHTML = `
        Agregar
        `;

        botoncomprarindcuadro.append(comprar);

        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatproduct) => repeatproduct.id === product.id);

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        return prod.cantidad += product.cantidad;
                    }
                });
            } else {
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    desc: product.desc,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
            }
            console.log(carrito);
            carritocestacontar();
            savelocal();
            cerrarventana();
        });
        cuerpopagina.style.filter = "blur(.5rem)";
        modalproductoventana.style.opacity = "1";
        modalproductoventana.style.transform = "translateY(5%)"
        modalproductoventana.style.transform = "translateX(0%)"
    });
});

