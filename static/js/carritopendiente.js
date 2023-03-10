
const pintarcarrito = () => {
    modalcontainer.innerHTML = "";
    modalcontainer.style.display = "flex";

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {

        modalcontainer.style.opacity = "0"
        modalcontainer.style.transition = "opacity 1s"
        modalcontainer.style.transition = "all 1s"
        modalcontainer.style.transform = "translateY(-150%)"
        document.body.style.overflow = "auto"



        cuerpopagina.style.transition = "filter 1s"
        cuerpopagina.style.filter = "blur(0vw)";

    });
    modalcontainer.append(modalbutton);

    const modalheader = document.createElement("div")
    modalheader.className = "modal-header"
    modalheader.innerHTML = `
    <h1 class= "modal-header-title">Mi Pedido</h1>

    `;
    modalcontainer.append(modalheader);


    const fondodivcarrito = document.createElement("div");
    if (carrito.length > 0){
    fondodivcarrito.className = "fondodivcarrito";
    modalcontainer.append(fondodivcarrito);}

    const totalcesta = document.createElement("div");
    totalcesta.className = "total-cesta"
    fondodivcarrito.append(totalcesta)

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalbuy = document.createElement("div");
    if (carrito.length > 0) {
        totalbuy.className = "total-content"
        totalbuy.innerHTML = `
        Total a Pagar: Ref. ${total.toFixed(2)} 
        `
    }
    ;
    totalcesta.append(totalbuy);


    const modaltabladesc = document.createElement("div");
    modaltabladesc.className = "modaltitulotabla"
    if (carrito.length > 0) {
        modaltabladesc.innerHTML = `
    <h2 id="descprod">Descrición</h2>
    <h2 id="cantprod">Cantidad</h2>
    <h2 id="totalprod">Sub-Total</h2>
    `} else {
        modaltabladesc.innerHTML = `
        <p class="textocarritolimpio">NO TIENE PRODUCTOS ENLISTADOS</p>`
    };
    modalcontainer.append(modaltabladesc);

    
    const tabladeproductos = document.createElement("div");
    tabladeproductos.className="tabladeproductos"
    modalcontainer.append(tabladeproductos)

    carrito.forEach((product) => {
        let carritocontent = document.createElement("div")
        carritocontent.className = "modal-content";
        carritocontent.innerHTML = `
        <img src= "${product.img}">
        <h3>${product.nombre}</h3>
        <p id="descripcion"> ${product.desc}</p>
        <p id="costound">Ref. ${(product.precio * product.cantidad).toFixed(2)}</p>
        <p id="cantund">${product.cantidad, (product.cantidad < 10) ? "0" + product.cantidad : product.cantidad}</p>
        
        `;

        tabladeproductos.append(carritocontent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "🗑";
        eliminar.className = "deleteprod";
        carritocontent.append(eliminar);

        eliminar.addEventListener("click", () => {
            eliminarproducto(product.id)
        });

        let mascantidad = document.createElement("button");
        mascantidad.className = "bttnplus"
        mascantidad.innerHTML = `
        <p>+</p>`;
        mascantidad.addEventListener("click", () => {
            product.cantidad++;
            savelocal();
            pintarcarrito();
        });

        carritocontent.append(mascantidad);

        let menoscantidad = document.createElement("button");
        menoscantidad.className = "bttnmin"
        menoscantidad.innerHTML = `
        <p>-</p>`;
        menoscantidad.addEventListener("click", () => {
            if (product.cantidad > 1) {
                product.cantidad--;
                savelocal();
                pintarcarrito();
            };

        });

        carritocontent.append(menoscantidad);
    });



    /* "el" es cualquier variable q representa los items o productos. "acc" es el total que empieza en 0 y se van sumando los precios*/



    const limpiarcarrito = document.createElement("button");
    limpiarcarrito.className = "botonlimpiar";
    limpiarcarrito.innerText = "LIMPIAR LISTA";
    limpiarcarrito.addEventListener("click", () => {
        carrito = [];
        savelocal();
        pintarcarrito();
        carritocestacontar();
    });
    fondodivcarrito.append(limpiarcarrito);

    const suscribirpedido = document.createElement("a");
    suscribirpedido.className = "botoninscribir";
    suscribirpedido.innerText = "REALIZAR PEDIDO";
    suscribirpedido.addEventListener("click", () =>{
        let productosalwha = [];
        for (let i = 0; i< carrito.length; i++){
            productosalwha.push(carrito[i].nombre, "; " ," cantidad: " ,carrito[i].cantidad, '%0A');
        }
        pedidoRef.update({
            "ultimonumero": firebase.firestore.FieldValue.increment(1)
        }).then(function(){
            pedidoRef.get().then(function(doc){
                var nuevoPedido = doc.data()["ultimonumero"];
                var url = "https://api.whatsapp.com/send?phone=+584129851959&text=Buenas Tardes, este es mi pedido: " + '%0A' + JSON.stringify(productosalwha).replace(/[\[\]",#]/g, '') + '%0A' + "Total: Ref. " + total.toFixed(2) + '%0A' + 'Precio Bs Tasa BCV' + '%0A'+ 'Número de Pedido es: ' + nuevoPedido + '%0A' + 'EL PRECIO NO INCLUYE EL COSTO DEL DELIVERY.'
                window.open(url, '_blank')
            }); 
        });
        setTimeout(() => {
            savelocal();
            pintarcarrito();
            carritocestacontar();
            modalcontainer.style.opacity = "0"
            modalcontainer.style.transition = "opacity 1s"
            modalcontainer.style.transition = "all 1s"
            modalcontainer.style.transform = "translateY(-150%)"
            cuerpopagina.style.transition = "filter 1s"
            cuerpopagina.style.filter = "blur(0vw)";
            document.body.style.overflow = "auto";
        },);
    });
    fondodivcarrito.append(suscribirpedido);
};
/* Un manera (no probada) es colocar cada script en su respectiva pagina, a excepcion de products que va en todos los
que contengan elementos dentro de el; ademas se debe de colocar ---let carrito = []; al archivo "layout" que no contiene
el carrito, solo este archivo (carritopendiente.js) se queda en el layout para que funcione en todos.  /*


/* Si no funciona asi el carrito (no se guarda), colocar todos los script en layout*/


vercarritolayout.addEventListener("click", () => {
    cuerpopagina.style.filter = "blur(.2rem)";
    modalcontainer.style.opacity = "1";
    modalcontainer.style.transform = "translateY(5%)";
    modalcontainer.style.transform = "translateX(5%)";
    document.body.style.overflow = "hidden"

    // CREA UNA CONST A VER SI TE FUNCIONA CON LA OPACITY DE 1 Y LOS DEMAS ESTILOS Y LO AGREGAS, A ESTE EVENTO 1, Y AL DE CERRAR.
    // CON EL VALOR DE 0, SINO CREAR LA FUNCION Y EJECUTARLA FUERA DE ESTO A VER SI SE PINTA BIEN CON EL IF.

    pintarcarrito()

})

// Eliminar producto (funcion)
const eliminarproducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritocestacontar();
    savelocal();
    pintarcarrito();
}





// Contador del carrito

const carritocestacontar = () => {
    if (carrito.length > 0) {
        carritocestapend.style.display = "block";
        carritocestapend.style.transition = "all 1s"
        carritocestapend.style.opacity = "1"
        carritocestapend.style.transform = "TranslateX(0%)"


        const carritolength = carrito.length;
        localStorage.setItem("carritolength", JSON.stringify(carritolength));

        carritocestapend.innerText = JSON.parse(localStorage.getItem("carritolength"));
    } else {
        carritocestapend.style.transition = "all 1s"
        carritocestapend.style.opacity = "0"
        carritocestapend.style.transform = "TranslateX(500%)"
    }


}

carritocestacontar()

// Set Item   el localstorage solo acepta strings si o si
const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// Get Item  en los () va el string del savelocal ""
//  




const cerrarventana = ("click", () => {
    modalproductoventana.style.opacity = "0"
    modalproductoventana.style.transition = "opacity 1s"
    modalproductoventana.style.transition = "all 1.5s"
    modalproductoventana.style.transform = "translateY(-500%)"
    document.body.style.overflow = "auto"



    cuerpopagina.style.transition = "filter 1s"
    cuerpopagina.style.filter = "blur(0vw)";

});

window.addEventListener("keyup", function(event){
    var codigo = event.key;
    if (codigo == 'Escape'){
        cerrarventana();
        modalcontainer.style.opacity = "0"
        modalcontainer.style.transition = "opacity 1s"
        modalcontainer.style.transition = "all 1s"
        modalcontainer.style.transform = "translateY(-150%)"
        cuerpopagina.style.transition = "filter 1s"
        cuerpopagina.style.filter = "blur(0vw)";
    }
}, false);


