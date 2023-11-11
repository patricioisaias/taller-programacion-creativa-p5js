/*
 * Nombre: Taller Introducción a la Programación Creativa - Sketch Nº1
 * Autor: Patricio Isaías (https://linktr.ee/patricioisaias)
 * Fecha de creación: 2023-10-23
 * Descripción: Demonstración de funciones básicas en p5.js y uso de distintos formatos de color.
 * Licencia: MIT
 */

function setup() {
  createCanvas(500, 500); // Establece el tamaño del lienzo en píxeles
  background(200); // Establece el color de fondo (escala de grises: 0-255)
  colorMode(RGB); // Establece el modo de color a RGB para utilizar el formato RGB en fill()
  noLoop(); // Evita que la función draw se llame repetidamente en loop
}

function draw() {
  // Línea horizontal negra
  stroke(0); // Establece el color del borde (negro)
  strokeWeight(5); // Establece el grosor del borde en píxeles
  line(100, 400, 400, 400); // Inicio (x1, y1), Fin (x2, y2)

  // Círculo azul sin borde
  noStroke(); // No dibujar borde para el círculo
  fill("#1a74e2"); // Formato de color hexadecimal
  ellipse(250, 250, 150, 150); // Centro (x, y), Ancho, Altura

  // Cuadrado morado con borde naranjo
  stroke("orange"); // Formato de color en inglés
  fill(100, 20, 120); // Formato de color RGB
  rect(350, 100, 100, 100); // Origen (esquina superior izquierda), Ancho, Altura

  // Círculo con transparencia
  noStroke();
  fill(255, 100); // El segundo valor (100) es la opacidad (0-255)
  ellipse(180, 250, 100, 100);

  // Dibuja un rectángulo con formato de color HSB
  colorMode(HSB, 360, 100, 100); // Cambia el modo de color a HSB
  fill(85, 100, 70); // Color en formato HSB
  rect(100, 100, 200, 50); // Origen (x, y), Ancho, Altura
}

/*
Aclaraciones:
- El modo de color RGB (Red, Green, Blue) es el modo predeterminado en p5.js.
- `colorMode()` se utiliza para cambiar el modo de color. En este caso, se cambia a HSB (Hue, Saturation, Brightness).
- En RGB, el formato de color es una combinación de valores para rojo, verde y azul, cada uno en un rango de 0 a 255.
- El formato hexadecimal (#1a74e2) es otra forma de representar colores en RGB.
- En HSB, el formato de color es una combinación de matiz (Hue), saturación (Saturation) y brillo (Brightness), cada uno en su rango respectivo.
*/
