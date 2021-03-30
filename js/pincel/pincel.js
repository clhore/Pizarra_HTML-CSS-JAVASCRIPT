var mouse;
var color;
var tamaño = 5;
var cuadrito = document.getElementById("area_de_dibujo");
var ctx = cuadrito.getContext("2d");
var y = 150;
var x = 150;
var teclas = {
  MENOSTECLADO: 189,
  MASTECLADO: 187,
  MENOSNUMPAD: 109,
  MASNUMPAD: 107,
};

            //cula es el color que vas a usar//
var bottomColorNumer;

                           //colores pincel//
//Input type color//
var editColor = document.getElementById("edit-color");

//color pincel 1//
var negro = document.getElementById("color-1");
negro.addEventListener("click", cambiarColorNegro);

//color pincel 2//
var azul = document.getElementById("color-2");
azul.addEventListener("click", cambiarColorAzul);

//color pincel 3//
var verde = document.getElementById("color-3");
verde.addEventListener("click", cambiarColorVerde);

//color pincel 4//
var amarillo = document.getElementById("color-4");
amarillo.addEventListener("click", cambiarColorAmarillo);

//color pincel 5//
var rojo = document.getElementById("color-5");
rojo.addEventListener("click", cambiarColorRojo);

//color pincel 6//
var lila = document.getElementById("color-6");
lila.addEventListener("click", cambiarColorLila);
                           //////////////////

                           //colores pincel//
//tamaño pincel 1//
var tamaño1 = document.getElementById("size-1");
tamaño1.addEventListener("click", cambiarTamaño1);

//tamaño pincel 2//
var tamaño2 = document.getElementById("size-2");
tamaño2.addEventListener("click", cambiarTamaño2);

//tamaño pincel 3//
var tamaño3 = document.getElementById("size-3");
tamaño3.addEventListener("click", cambiarTamaño3);
                           //////////////////

////////////////////////////////
  cuadrito.addEventListener("mousedown", apretarMouse);
  cuadrito.addEventListener("mouseup", soltarMouse);
  cuadrito.addEventListener("mousemove", dibujarMouse);

  cuadrito.addEventListener("touchstart", apretarTactil);
  cuadrito.addEventListener("touchend", soltarTactil);
  cuadrito.addEventListener("touchmove", dibujarTactil);
////////////////////////////////

////////////////////////////////
  document.addEventListener("keydown", cambiarTamaño);
  
  var borrar = document.getElementById("borrar");
  borrar.addEventListener("click", borrarTodo);
////////////////////////////////

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth= tamaño;
  lienzo.lineCap = "round";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath;
}

function soltarMouse(evento){
  mouse = 0;
  x = evento.layerX;
  y = evento.layerY;
}



function apretarMouse(evento){
  mouse = 1;
  dibujarLinea(color, x, y, x-0.1, y+0.1, ctx);
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarMouse(evento){
  if (mouse == 1)
    {
      dibujarLinea(color, x, y, evento.layerX, evento.layerY, ctx);

    }
    x = evento.layerX;
    y = evento.layerY;
}

function soltarTactil(evento){
  var tactil= evento.touches [0];
  x = evento.offsetX;
  y = evento.offsetY;
}

function apretarTactil(evento){
  evento.preventDefault();
  tactil = 1;
  x = evento.offsetX;
  y = evento.offsetY;
}

function dibujarTactil(evento){
  //console.log(e);
  if (tactil > 0){
      dibujarLinea(color, x, y, ctx);

    }
    x = evento.offsetX;
    y = evento.offsetY;
}

                           //colores pincel//
//color pincel 1//
function cambiarColorNegro(){
//cutrada (canbiar)
  cutrada = "#000000"
    //////
    editColor.value = cutrada;
    negro.style.background = cutrada;
    //////

    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = negro;

    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 2//
function cambiarColorAzul(){
//cutrada (canbiar)
  cutrada = "#99e6ff"
    //////
    editColor.value = cutrada;
    azul.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = azul;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 3//
function cambiarColorVerde(){
//cutrada (canbiar)
  cutrada = "#99ff99"
    //////
    editColor.value = cutrada;
    verde.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = verde;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 4//
function cambiarColorAmarillo(){
//cutrada (canbiar)
  cutrada = "#ffff99"
    //////
    editColor.value = cutrada;
    amarillo.style.background = cutrada;
    //////

    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = amarillo;

    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 5//
function cambiarColorRojo(){
//cutrada (canbiar)
  cutrada = "#ff9999"
    //////
    editColor.value = cutrada;
    rojo.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = rojo;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 6//
function cambiarColorLila(){
//cutrada (canbiar)
  cutrada = "#99b3ff"
    //////
    editColor.value = cutrada;
    lila.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = lila;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 7//
function cambiarColorNegro(){
  //cutrada (canbiar)
    cutrada = "#000000"
      //////
      editColor.value = cutrada;
      negro.style.background = cutrada;
      //////
  
      //la variable tine un valor dependiendo de que input alla sido pulsado//
      bottomColorNumer = negro;
  
      //se iguala el color que tiene el selctor de colores al pincel//
      color = editColor.value;
  }
  
//color pincel 8//
function cambiarColorAzul(){
//cutrada (canbiar)
  cutrada = "#99e6ff"
    //////
    editColor.value = cutrada;
    azul.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = azul;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 9//
function cambiarColorVerde(){
//cutrada (canbiar)
  cutrada = "#99ff99"
    //////
    editColor.value = cutrada;
    verde.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = verde;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 10//
function cambiarColorAmarillo(){
//cutrada (canbiar)
  cutrada = "#ffff99"
    //////
    editColor.value = cutrada;
    amarillo.style.background = cutrada;
    //////

    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = amarillo;

    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 11//
function cambiarColorRojo(){
//cutrada (canbiar)
  cutrada = "#ff9999"
    //////
    editColor.value = cutrada;
    rojo.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = rojo;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}

//color pincel 12//
function cambiarColorLila(){
//cutrada (canbiar)
  cutrada = "#99b3ff"
    //////
    editColor.value = cutrada;
    lila.style.background = cutrada;
    //////
  
    //la variable tine un valor dependiendo de que input alla sido pulsado//
    bottomColorNumer = lila;
  
    //se iguala el color que tiene el selctor de colores al pincel//
    color = editColor.value;
}
                           ////
//input color (cuando se modifica el color en el input type="color" se recargan los parametras)//
function colorPincel(){
  //cambio de color pincel boton//
    color = editColor.value;
    bottomColorNumer.style.background = editColor.value;
  ////
}

                           //canviar tamaño pincel//

//variable ojeto(input -> id="range-pincel-box")//
var rangePincel = document.getElementById("range-pincel-box");

//input range//
function PincelRange(){
  ////
    tamaño = rangePincel.value;
  ////
}

//botton canviar tamaño 1//
function cambiarTamaño1(){
  ////
    tamaño=5;
    rangePincel.value = tamaño;
  ////
}

//botton canviar tamaño 2//
function cambiarTamaño2(){
  ////
    tamaño=10;
    rangePincel.value = tamaño;
  ////
}

//botton canviar tamaño 3//
function cambiarTamaño3(){
  ////
    tamaño=20;
    rangePincel.value = tamaño;
  ////
}

function borrarTodo(){
  ////
    tamaño=50;
    rangePincel.value = tamaño;
  ////
    color="#ffffff";
  ////
}

function cambiarTamaño(evento){
  var cambio_tamaño = 2;
  switch(evento.keyCode)
    {
      case teclas.MENOSTECLADO:
      tamaño = tamaño - cambio_tamaño;
      break;

      case teclas.MENOSNUMPAD:
      tamaño = tamaño - cambio_tamaño;
      break;

      case teclas.MASTECLADO:
      tamaño = tamaño + cambio_tamaño;
      break;

      case teclas.MASNUMPAD:
      tamaño = tamaño + cambio_tamaño;
      break;
    }
}