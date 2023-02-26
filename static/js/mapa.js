const mapadegoogleubi = document.querySelector(".contenedormapa");
const botonabrir = document.getElementById("botonabrirmapa");
const botoncerrar = document.getElementById("botoncerrarmapa");

function abrirmapa() {
    mapadegoogleubi.style.display = "flex";
    botonabrir.style.display = "none";
    botoncerrar.style.display = "inline-block"
    mapadegoogleubi.style.transition= "all 2s ease";
    mapadegoogleubi.style.transform = "translateY(0)"
    mapadegoogleubi.style.height = "35rem"
}

function cerrarmapa() {
    botoncerrar.style.display = "none";
    botonabrir.style.display = "inline-block";
    mapadegoogleubi.style.transition= "all 2s ease";
    mapadegoogleubi.style.transform = "translateY(150%)"
    mapadegoogleubi.style.height = "0"

}

function cerrarmapapeque() {
    botoncerrar.style.display = "none";
    botonabrir.style.display = "inline-block";
    mapadegoogleubi.style.transition= "all 2s ease";
    mapadegoogleubi.style.transform = "translateY(150%)"
    mapadegoogleubi.style.height = "0"

}

let animado = document.querySelectorAll(".animacionimguno");
function mostrarscroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaanimado = animado[i].offsetTop;
        if(alturaanimado + 300 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].style.transform = "translateX(0%)";
        }
    }
}

window.addEventListener('scroll', mostrarscroll)

let animadodos = document.querySelectorAll(".animacionimgdos");
function mostrarscrolldos() {
    let scrollTopdos = document.documentElement.scrollTop;
    for (var i=0; i < animadodos.length; i++) {
        let alturaanimadodos = animadodos[i].offsetTop;
        if(alturaanimadodos + 1000 < scrollTopdos) {
            animadodos[i].style.opacity = 1;
            animadodos[i].style.transform = "translateX(0%)";
        }
    }
}

window.addEventListener('scroll', mostrarscrolldos)


