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
