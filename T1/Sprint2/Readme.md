
# Boletín de Ejercicios Web

Este repositorio contiene cuatro ejercicios de desarrollo web. A continuación, se presenta un análisis detallado, el diseño de la solución, la implementación y las pruebas correspondientes para cada ejercicio.


## Ejercicio 1: Contrarreloj

### Análisis del problema
Se debe crear una página web que contenga un botón etiquetado "Cambiar color". Al hacer clic en este botón, el color de fondo de la página debe cambiar a un color generado aleatoriamente. Este problema se resolverá utilizando el método `Math.random()` para generar valores RGB aleatorios.

### Diseño de la propuesta de solución del problema
- **Esquema gráfico**: Diagrama de flujo que muestra el proceso de generación de color.
  
### Implementación del diseño propuesto
Se implementará la solución utilizando HTML y JavaScript para cambiar el color de fondo de la página.

### Pruebas de la resolución del problema
Se realizarán pruebas para verificar que el color de fondo cambia de manera aleatoria al hacer clic en el botón.
![gif](Ejercicio1.gif)
---

## Ejercicio 2: Calculadora básica

### Análisis del problema
Se requiere diseñar una página web con dos campos de entrada para introducir el ancho y el alto de un rectángulo. Al hacer clic en un botón etiquetado "Calcular Área", el área del rectángulo se debe calcular y mostrar en un párrafo en la página.

### Diseño de la propuesta de solución del problema
- **Esquema gráfico**: Diagrama de flujo que muestra el proceso de cálculo del área.
  
### Implementación del diseño propuesto
Se utilizarán formularios HTML y un script JavaScript para realizar los cálculos y mostrar el resultado.

### Pruebas de la resolución del problema
Se probarán diferentes valores de ancho y alto para asegurar que el área se calcula y se muestra correctamente.
![gif](Ejercicio2.gif)
---


## Ejercicio 3: Encuesta con gráficos de resultados

### Análisis del problema
Se necesita una página con un campo de entrada y un botón etiquetado "Añadir a la lista". Al hacer clic en el botón, el contenido del campo debe añadirse como un nuevo ítem (`<li>`) a una lista vacía (`<ul>`).

### Diseño de la propuesta de solución del problema
- **Esquema gráfico**: Diagrama de flujo que muestra el proceso de añadir ítems a la lista.
  
### Implementación del diseño propuesto
Se utilizará JavaScript para crear y añadir elementos a la lista en el DOM.

### Pruebas de la resolución del problema
Se verificarán que los ítems se añaden correctamente a la lista y que no se permiten entradas vacías.
![gif](Ejercicio3.gif)
---


## Ejercicio 4: Cronómetro con controles de inicio , pausa y reinicio

### Análisis del problema
El objetivo es crear una página con varios elementos `div`. Al pasar el ratón sobre un `div`, su color de fondo debe cambiar a azul y el texto a blanco. Al mover el ratón fuera del `div`, los estilos originales deben restaurarse.

### Diseño de la propuesta de solución del problema
- **Esquema gráfico**: Diagrama de flujo que muestra el proceso de gestión de eventos para cambiar estilos.
  
### Implementación del diseño propuesto
Se utilizarán eventos en JavaScript para gestionar los cambios de estilo de los `div`.

### Pruebas de la resolución del problema
Se realizarán pruebas para verificar que los estilos cambian correctamente al pasar el ratón sobre los elementos y se restauran al salir.

![gif](Ejercicio4.gif)



## Ejercicio 5: Detección de Clics y Generación de XPath

### Análisis del problema
El objetivo de este ejercicio es crear una página web que permita detectar clics en cualquier elemento del DOM y generar el XPath único del elemento clickeado. Este XPath debe mostrarse al usuario ya sea en un cuadro de alerta o en una sección específica de la página. El XPath es una cadena que indica la ruta exacta del elemento en el árbol DOM de la página, lo que lo hace único. La solución debe ser capaz de identificar con precisión el elemento clickeado y generar un XPath que lo describa sin ambigüedad.

### Diseño de la propuesta de solución del problema
- **Esquema gráfico**: Se sugiere el uso de un diagrama de flujo para visualizar cómo el evento de clic es detectado en el documento y cómo se recorre el DOM para generar el XPath.
  
#### Descripción de la solución:
1. **Detección de clics**:
   - Se añadirá un detector de eventos (`addEventListener`) al documento completo. Este detector capturará cualquier clic realizado en la página.
   - Usaremos `event.target` para identificar el elemento exacto donde ocurrió el clic.
   
2. **Generación del XPath**:
   - Se utilizará un recorrido ascendente del árbol DOM, comenzando desde el elemento clickeado hasta el nodo raíz (`document`), construyendo el XPath paso a paso.
   
3. **Salida del XPath**:
   - Una vez generado, el XPath se mostrará al usuario mediante un cuadro de alerta o en una sección específica dentro de la página, utilizando el DOM para insertar el resultado dinámicamente.

### Implementación del diseño propuesto
La implementación se llevará a cabo utilizando JavaScript para detectar los clics y generar el XPath correspondiente a cada elemento. Se utilizarán funciones para:
- Detectar los clics en cualquier parte del documento.
- Identificar el elemento clickeado.
- Generar la cadena XPath que representa el elemento dentro del DOM.
- Mostrar el XPath generado en un cuadro de alerta o en una sección de la página.

### Pruebas de la resolución del problema
Para verificar la correcta implementación de la funcionalidad, se realizarán las siguientes pruebas:

1. **Prueba de Detección de Clics**:
   - Hacer clic en diversos elementos de la página y comprobar que el evento se detecta correctamente, y que `event.target` identifica el elemento adecuado.
   
2. **Prueba de Generación de XPath**:
   - Comparar el XPath generado con el XPath mostrado en herramientas como Chrome DevTools para asegurarse de que coinciden.
   
3. **Prueba de Salida**:
   - Validar que el XPath generado se muestra en el cuadro de alerta o en la sección específica de la página, y que este XPath es el correcto para cada elemento clickeado.

### Video GIF
Incluir un GIF donde se muestre la interacción con la página. El usuario debe hacer clic en varios elementos de la página, y el GIF debe demostrar cómo se genera el XPath correcto y se muestra en pantalla.


