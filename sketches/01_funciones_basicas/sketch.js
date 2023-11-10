/*
 * Nombre: Taller Introducción a la Programación Creativa - Proyecto Nº1
 * Autor: Patricio Isaías (https://linktr.ee/patricioisaias)
 * Fecha de creación: 2023-10-23
 * Descripción: Funciones básicas de p5.js
 * Licencia: MIT
 */

function setup() {
  createCanvas(500, 500); // Establecer el tamaño del lienzo en píxeles
  background(220); // Establecer el color de fondo (escala de grises: 0-255)
}

function draw() {
  // Punto en el centro del lienzo
  strokeWeight(6); // Establecer grosor del punto en píxeles
  point(250, 250); // Ubicación (x, y)

  // Línea horizontal negra
  stroke(0); // Establecer color del trazo (escala de grises)
  line(100, 350, 400, 350); // Inicio (x1, y1), Fin (x2, y2)

  // Círculo rojo sin borde
  noStroke(); // No dibujar borde para el círculo
  fill(255, 0, 0); // Formato de color RGB
  ellipse(100, 100, 80, 80); // Centro (x, y), Ancho, Altura

  // Círculo gris pequeño ('El orden de dibujo importa!)
  noStroke(); // No dibujar borde para el círculo
  fill(150); // Color gris
  ellipse(120, 100, 30, 30); // Centro (x, y), Ancho, Altura

  // Rectángulo azul
  fill(0, 0, 255); // Formato de color RGB
  rect(250, 100, 80, 80); // Esquina superior izquierda (x, y), Ancho, Altura

  // Triángulo verde con borde negro
  fill(0, 255, 0); // Formato de color RGB
  stroke(0); // Establecer color del trazo (negro)
  triangle(400, 100, 450, 100, 425, 150); // Vértices (x1, y1)
}
