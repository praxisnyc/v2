// P5.js Code from Daniel Shiffman instructional <https://www.youtube.com/watch?v=BjoM9oKOAKY&t=542s>

var scl = 15;
var xvec, yvec;
var noiseInc = .1;
var time = 0;
var flowfield;

function setup() {
       createCanvas(windowWidth, windowHeight);


}

function draw() { // Rotating Vectors
       background(255);

       FlowField();


}

function FlowField(){
       xvec = floor((windowWidth+50) / scl);
       yvec = floor((windowHeight+50) / scl);
       flowfield = new Array(xvec * yvec);

       var yNoise = 0;
       for (var y = 0; y < yvec; y++) {
              var xNoise = 0;
              for (var x = 0; x < xvec; x++) {
                     // var vecDirect = noise(xNoise, yNoise, time) * 2*(TWO_PI);
                     var myMouse = createVector(mouseX,mouseY);
                     var vecDirect = radians(45);
                     var dir = p5.Vector.fromAngle(vecDirect);
                     var index = x + y * xvec;
                     flowfield[index] = dir;
                     dir.setMag(3);
                     xNoise += noiseInc;
                     stroke(180);
                     push();
                     translate(x * scl, y * scl);
                     rotate(dir.heading());
                     line(0, 0, scl, 0);
                     pop();
              }
              yNoise += noiseInc;
              time += .001;
       }
}

// 1 - criar um grid (parametrizável)
// 2 - preencher grid com component (shape simples, ou SVG)
// 3 - operação de rotacionar component
// 4 - cálculo de ângulo entre posição qualquer e mouse pointer
// 5 - rotação de component em função de ângulo
// 6 - aplicar apenas dentro de radius



function windowResized() {
       resizeCanvas(windowWidth, windowHeight);
}