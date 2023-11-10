# Trocitos de Código (Code Snippets)

## Estructura básica

En cada sketch de p5.js hay una función `setup` y `draw`.

```js
// Crear un nuevo lienzo y configuración inicial
function setup() {
  createCanvas(400, 400); // Tamaño inicial del lienzo
}

// Al redimensionar la ventana, actualiza el tamaño del lienzo
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ajusta el lienzo al nuevo tamaño de la ventana
}

// Función de dibujo continuo
function draw() {
  // Coloca el código de tu dibujo aquí
}
```

## Dibujar formas básicas

```js
function draw() {
  point(x, y); // Dibuja un punto en las coordenadas (x, y)
  line(x1, y1, x2, y2); // Dibuja una línea desde (x1, y1) hasta (x2, y2)
  ellipse(x, y, width, height); // Dibuja una elipse en (x, y) con el ancho y alto dados
  rect(x, y, width, height); // Dibuja un rectángulo en (x, y) con el ancho y alto dados
  triangle(x1, y1, x2, y2, x3, y3); // Dibuja un triángulo con vértices en (x1, y1), (x2, y2) y (x3, y3)
}
```

## Dibujar polígonos

Aquí tienes una función que puedes usar para dibujar un polígono básico en p5.js. Esto te permite renderizar triángulos, diamantes y otras formas.

```js
function poligono(x, y, radius, sides = 3, angle = 0) {
  beginShape(); // Comienza a definir la forma
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides); // Calcula el ángulo para cada vértice
    let sx = x + cos(a) * radius; // Calcula la coordenada x del vértice
    let sy = y + sin(a) * radius; // Calcula la coordenada y del vértice
    vertex(sx, sy); // Define el vértice en la forma
  }
  endShape(CLOSE); // Finaliza la forma y la cierra
}
```

## Tipos de Datos

```js
let edad = 28; // Numéro
let nombre = "Patricio"; // String
let frutas = [🍎, 🍍, 🍉]; // Array
let esAzul = true; // Booleano
const PI = 3,1416; // Constante

// Valores Falsy
let x = 0;
let vacia = "";
let vacio = null;
let noExiste = undefined
NaN // Not a number
```

## Funciones

Las funciones se definen, o declaran, con la palabra clave `function`. A continuación se muestra la sintaxis de una función en JavaScript.

```js
function nombreFuncion() {
  // Código a ejecutar
}
```

Puedes escribir tus propias funciones para modularizar tu código en trozos más pequeños. Esto facilita la lectura y...

```js
function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  // Llamar a las otras funciones
  circuloRojo();
  rectanguloAzul();
  trianguloVerde(100, 100, 100);
}

function circuloRojo() {
  fill(255, 0, 0);
  ellipse(300, 100, 100, 100);
}

function rectanguloAzul() {
  fill(0, 0, 255);
  rect(200, 200, 200, 100);
}

function trianguloVerde(x, y, size) {
  fill(0, 255, 0);
  triangle(
    x,
    y - size / 2,
    x - size / 2,
    y + size / 2,
    x + size / 2,
    y + size / 2
  );
}
```
