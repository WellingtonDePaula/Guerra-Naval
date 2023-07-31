var xMouse = 0;
var yMouse = 0;
var navio1Clickado = false;

function mouseClickado1() {
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            navio1Clickado = true; xMouse = mouseX; yMouse = mouseY;
        }
    if (podeSeMoverX1()) {
        xMouse = larguraDaTela/2+6;
        }
    if (podeSeMoverX2()) {
        xMouse = 1242;
        }
    if (podeSeMoverY1()) {
        yMouse = alturaDaTela/2-295;
        }
    if (podeSeMoverY2()) {
        yMouse = 602;
        }
    }
    if (navio1Clickado === true) {
        fill(0);
        rect(xMouse, yMouse, 100, 50);
    }
    print(navio1Clickado);
        return false;
}
function podeSeMoverX1() {
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            return xMouse <= larguraDaTela/2+6;
          }
    }
}
function podeSeMoverX2() {
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            return xMouse >= 1242;
          }
    }
}
function podeSeMoverY1() {
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            return yMouse <= alturaDaTela/2-295;
          }
    }
}
function podeSeMoverY2() {
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            return yMouse >= 595;
          }
    }
}
/*function mouseClickado2() {
 if (navio1Clickado === true) {

 }
}*/
