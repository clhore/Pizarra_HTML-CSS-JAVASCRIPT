var oja1 = document.getElementById("oja-1");
oja1.addEventListener("click", displayBlockOja1);

var oja2 = document.getElementById("oja-2");
oja2.addEventListener("click", displayBlockOja2);

var oja3 = document.getElementById("oja-3");
oja3.addEventListener("click", displayBlockOja3);

function displayBlockOja1(){
    pizarra1 = document.getElementById("area_de_dibujo")
    pizarra1.style.display = "block";

    pizarra2 = document.getElementById("area_de_dibujo-2")
    pizarra2.style.display = "none";

    pizarra3 = document.getElementById("area_de_dibujo-3")
    pizarra3.style.display = "none";
}

function displayBlockOja2(){
    pizarra1 = document.getElementById("area_de_dibujo")
    pizarra1.style.display = "none";

    pizarra2 = document.getElementById("area_de_dibujo-2")
    pizarra2.style.display = "block";

    pizarra3 = document.getElementById("area_de_dibujo-3")
    pizarra3.style.display = "none";
}

function displayBlockOja3(){
    pizarra1 = document.getElementById("area_de_dibujo")
    pizarra1.style.display = "none";

    pizarra2 = document.getElementById("area_de_dibujo-2")
    pizarra2.style.display = "none";

    pizarra3 = document.getElementById("area_de_dibujo-3")
    pizarra3.style.display = "block";
}