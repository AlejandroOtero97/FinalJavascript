const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const lsOutput = document.getElementById("lsOutput");
const titulo = document.getElementById("clase");

const namesJson = {
    "nombre1": "Raghat", 
    "nombre2": "Uhmla",
    "nombre3": "Borto",
    "nombre4": "Rexxar",
    "nombre5": "Gul'Dan",
    "nombre6": "Grommash",
    "nombre7": "Pocho'Feo"
};

$("#btnName").on("click", function names() {
    var properties = Object.values(namesJson);
    var index = Math.floor(Math.random() * properties.length);
    document.getElementById("mensaje").innerHTML = properties[index];
});


var imageArray = ["index1.png",
                 "index2.png",
                 "index3.png",
                 "index4.png",
                 "index5.png",
                 "index6.png"];

$("#btnImage").on("click", function image() {
    var randomNumber = Math.floor(Math.random()*imageArray.length);
    document.getElementById("mainImage").src = (imageArray[randomNumber]);
});

$("#btnInsert").on("click", function () {
    const key = inpKey.value;
    const value = inpValue.value;
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
});

$("#btnDelete").on("click", function () {
    localStorage.clear();
    location.reload();
});

for(let i = 0;(i<3 && i < localStorage.length); i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    lsOutput.innerHTML += `${key}: ${value} <br/>`;
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $("#power").on("blur", function blur(e) { 
        validate(e);
    });
    titulo.textContent = "Selecciona tu clase!";
}else{
    $("#power").on("keydown", function enter(e) {
        if (e.key === "Enter") {  
            validate(e);
        }
    });
}

function validate(){
    let valorClase = document.getElementById("power").value;
    let claseObtenida = obtenerClase(valorClase);
    document.getElementById("clase").innerText= claseObtenida;
}

function obtenerClase(atributo){
    let clase = obtenerClasePorAtributoExacto(atributo);
    if(clase == null){
        clase = obtenerClasePorPrediccion(atributo);
    }
    return clase;
}

function obtenerClasePorAtributoExacto(atributo){
    if (atributo == "Strenght" || atributo == "Size"){
        return "Warrior";
    }
    else if (atributo == "Magic"){
        return "Mage";
    }
    else if (atributo == "Stealth" || atributo == "Speed"){
        return "Assassin";
    }
    else {
        return null;
    }
}

function obtenerClasePorPrediccion(atributo){
    if (atributo.length > 10){
        return "Scholar";
    }
    else {
        return "Deprived";
    }
}
