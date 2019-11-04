var teclas = //creación de un objeto literal
{
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}; //Todo esto es una sola línea de código.

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var textoColor = document.getElementById("texto_color");
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", mouseClick);
document.addEventListener("mouseup", mouseSoltar);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("touchstart", touchClick);
document.addEventListener("touchend", touchSoltar);
document.addEventListener("touchmove", dibujarTouch);
boton.addEventListener("click", especLineasMouse);

var ancho = cuadrito.width;
var x = ancho/2;
var y = ancho/2;
var dibujar = false;
var dibujar1 = false;
var colorcito = "black";
var brocha = 1;

dibujarLinea("red", x-1, x-1, y+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); //Cerrar trazo
}

function dibujarTeclado(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;        
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default: 
            console.log("otra tecla");
        break;
    }    
}

function dibujarMouse(evento1)
{
    console.log(evento1);
    if (dibujar == true)
    {
        x = evento1.clientX;
        y = evento1.clientY;
        dibujarLinea(colorcito, x-brocha, y-brocha, x+brocha, y+brocha, papel);
    }

}

function mouseClick()
{
    dibujar = true;
}

function mouseSoltar()
{
    dibujar = false;
}

function especLineasMouse()
{
    colorcito = textoColor.value;
    brocha = parseInt(texto.value);
}

function dibujarTouch(evento2)
{
    console.log(evento2);
    if (dibujar1 == true)
    {
        x = evento2.touches[0].clientX;
        y = evento2.touches[0].clientY;
        dibujarLinea(colorcito, x-brocha, y-brocha, x+brocha, y+brocha, papel);
    }
}

function touchClick()
{
    dibujar1 = true;
    console.log("Touch On");
}

function touchSoltar()
{
    dibujar1 = false;
    console.log("Touch Off");
}

