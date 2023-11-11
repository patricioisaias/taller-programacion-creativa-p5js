/*
 * Nombre: Taller Introducción a la Programación Creativa - Sketch Nº2
 * Autor: Patricio Isaías (https://linktr.ee/patricioisaias)
 * Fecha de creación: 2023-10-23
 * Descripción: Animación básica con p5.js, uso de variables y funciones.
 * Licencia: MIT
 */

let diametroCirculo = 100; // Variable Global (Accesible desde todo el sketch)

function setup() {
  createCanvas(500, 500); // Establecer el tamaño del lienzo en píxeles
  noCursor(); // Función de p5.js para ocultar el cursor del mouse
}

function draw() {
  background(220, 40, 70); // Establecer el color de fondo (formato RGB)

  // Animación simple usando frameCount
  animacionCirculo();

  // Animación simple usando una variable
  animacionRectangulo();

  // Llamar a la función Puntero
  puntero();
}

// Función para la animación del círculo azul
function animacionCirculo() {
  let valorRojo = 255; // Variable local (Accesible solamente dentro de esta función)
  fill(0, 0, valorRojo);
  ellipse(frameCount, height / 2, diametroCirculo); // (x, y, w, [h]);
}

// Función para la animación del rectángulo blanco
function animacionRectangulo() {
  fill(255);
  rectMode(CENTER);
  rect(width - (frameCount % width), 100, 100, 100);
}

function puntero() {
  noStroke();
  fill("white");
  ellipse(mouseX, mouseY, 10, 10);

  // Mostrar coordenadas del puntero
  textSize(20);
  text(`x: ${mouseX} y: ${mouseY}`, mouseX + 10, mouseY + 20);
}

/*
Aclaraciones:
- `width` es una variable de p5.js que almacena el ancho del lienzo.
- `height` es una variable de p5.js que almacena el alto del lienzo.
- `frameCount` es una variable interna de p5.js que cuenta el número total de cuadros (frames) desde el inicio del programa.

La expresión `frameCount % width` calcula el residuo de la división entre `frameCount` y `width`. Esto reinicia `frameCount` a cero cuando alcanza o supera el valor de `width`. Prácticamente, se utiliza para crear animaciones repetitivas, ya que una vez que `frameCount` alcanza el ancho del lienzo, comienza de nuevo desde cero.
*/

// Variables y Tipos de datos en JavaScript
let edad = 29; // Número (Pueden ser tanto enteros como decimales)
let nombre = "Patricio"; // String (Cadena de texto)
let frutas = ["🍎", "🍍", "🍉"]; // Array (Lista de elementos)
let esAzul = true; // Booleano (Almacena dos estados)
const P = 3.1416; // Constante (Contenedor para un valor que no vamos a cambiar)

// Imprimir en consola
console.log(2023);
console.log("Hola Mundo!");
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`); // Template literals en JS
