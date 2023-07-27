var larguraDaTela = innerWidth;
var alturaDaTela = innerHeight;


function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
    print(alturaDaTela)

  }
  
  function draw() {
    background(0);
    criaPapelDeJogo();
    criaDivisoriaNoPapel();
  }

  function criaPapelDeJogo() {
    rect(larguraDaTela/2-600, alturaDaTela/2-300, 1200, 600);
  }
  function criaDivisoriaNoPapel() {
    stroke(0);
    line(larguraDaTela/2, 715, larguraDaTela/2, 0);
  }