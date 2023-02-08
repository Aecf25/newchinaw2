const tercercuadrohome = document.getElementById('tercercuadrohome');
const mapadegoogleubi = document.getElementById('contenedormapa');

const mapagoogle = () => {
    const botonabrirmapa = document.createElement("button");
    botonabrirmapa.className = "botonabrirmapa";
    botonabrirmapa.addEventListener("click", () =>{
        mapadegoogleubi.display = "inline-block"
    }); 
    

}


