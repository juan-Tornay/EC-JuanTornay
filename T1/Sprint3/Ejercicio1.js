// Datos de ejemplo: Array de estudiantes con calificaciones en diferentes asignaturas
const estudiantes = [
    { nombre: 'Juan', calificaciones: { matematicas: 90, historia: 85, ciencias: 95 } },
    { nombre: 'María', calificaciones: { matematicas: 92, historia: 89, ciencias: 91 } },
    { nombre: 'Carlos', calificaciones: { matematicas: 85, historia: 90, ciencias: 88 } },
    { nombre: 'Ana', calificaciones: { matematicas: 95, historia: 92, ciencias: 93 } },
    { nombre: 'Luis', calificaciones: { matematicas: 87, historia: 82, ciencias: 80 } }
  ];
  
  // Parte 1: Función para obtener los 3 mejores estudiantes en una asignatura específica
  function obtenerMejoresEstudiantes(asignatura) {
    return estudiantes
      .filter(estudiante => estudiante.calificaciones[asignatura] !== undefined)  // Filtra estudiantes con calificación en la asignatura
      .sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura])  // Ordena por calificación de mayor a menor
      .slice(0, 3)  // Selecciona los 3 primeros estudiantes
      .map(estudiante => estudiante.nombre);  // Devuelve solo los nombres de los estudiantes
  }
  
  // Parte 2: Función para identificar la asignatura con menor rendimiento (promedio más bajo)
  function asignaturaMenorRendimiento() {
    const sumasAsignaturas = {};
    const conteosAsignaturas = {};
  
    // Recorremos todos los estudiantes para sumar las calificaciones por asignatura
    estudiantes.forEach(estudiante => {
      const calificaciones = estudiante.calificaciones;
      
      // Recorremos las asignaturas de cada estudiante
      for (let asignatura in calificaciones) {
        if (!sumasAsignaturas[asignatura]) {
          sumasAsignaturas[asignatura] = 0;
          conteosAsignaturas[asignatura] = 0;
        }
  
        // Sumamos la calificación de cada asignatura
        sumasAsignaturas[asignatura] += calificaciones[asignatura];
        conteosAsignaturas[asignatura] += 1;
      }
    });
  
    // Calculamos los promedios de cada asignatura
    const promediosAsignaturas = {};
    for (let asignatura in sumasAsignaturas) {
      promediosAsignaturas[asignatura] = sumasAsignaturas[asignatura] / conteosAsignaturas[asignatura];
    }
  
    // Identificamos la asignatura con el promedio más bajo
    let asignaturaMenor = null;
    let menorPromedio = Infinity;
  
    for (let asignatura in promediosAsignaturas) {
      if (promediosAsignaturas[asignatura] < menorPromedio) {
        menorPromedio = promediosAsignaturas[asignatura];
        asignaturaMenor = asignatura;
      }
    }
  
    return asignaturaMenor;
  }
  
  // Parte 3: Función para calcular el promedio de calificaciones de un estudiante
  function calcularPromedioEstudiante(nombre) {
    const estudiante = estudiantes.find(est => est.nombre === nombre);
    if (!estudiante) return null;  // Retorna null si el estudiante no se encuentra
  
    const calificaciones = estudiante.calificaciones;
    const total = Object.values(calificaciones).reduce((acc, cal) => acc + cal, 0);
    return total / Object.keys(calificaciones).length;  // Retorna el promedio
  }
  
  // Parte 4: Función para obtener la lista de estudiantes aprobados en una asignatura
  function estudiantesAprobados(asignatura, notaAprobatoria) {
    return estudiantes
      .filter(estudiante => estudiante.calificaciones[asignatura] >= notaAprobatoria)  // Filtra estudiantes aprobados
      .map(estudiante => estudiante.nombre);  // Devuelve solo los nombres
  }
  
  // Parte 5: Función para contar cuántos estudiantes han tomado una asignatura
  function contarEstudiantesAsignatura(asignatura) {
    return estudiantes.filter(estudiante => estudiante.calificaciones[asignatura] !== undefined).length;  // Cuenta estudiantes con calificación
  }
  
  // Parte 6: Función para obtener la mejor calificación en una asignatura
  function mejorCalificacion(asignatura) {
    const calificaciones = estudiantes.map(est => est.calificaciones[asignatura]).filter(cal => cal !== undefined);
    return Math.max(...calificaciones);  // Devuelve la mejor calificación
  }
  
  // Parte 7: Función para obtener la peor calificación en una asignatura
  function peorCalificacion(asignatura) {
    const calificaciones = estudiantes.map(est => est.calificaciones[asignatura]).filter(cal => cal !== undefined);
    return Math.min(...calificaciones);  // Devuelve la peor calificación
  }
  
  // Parte 8: Función para obtener un resumen de calificaciones de todos los estudiantes
  function resumenCalificaciones() {
    return estudiantes.map(est => {
      const promedio = calcularPromedioEstudiante(est.nombre);
      return {
        nombre: est.nombre,
        promedio,
        calificaciones: est.calificaciones
      };
    });
  }
  
  // Ejemplo de uso
  console.log('Mejores estudiantes en matemáticas:', obtenerMejoresEstudiantes('matematicas'));
  console.log('Asignatura con menor rendimiento:', asignaturaMenorRendimiento());
  console.log('Promedio de Juan:', calcularPromedioEstudiante('Juan'));
  console.log('Estudiantes aprobados en historia (nota mínima 85):', estudiantesAprobados('historia', 85));
  console.log('Total de estudiantes que han tomado matemáticas:', contarEstudiantesAsignatura('matematicas'));
  console.log('Mejor calificación en ciencias:', mejorCalificacion('ciencias'));
  console.log('Peor calificación en historia:', peorCalificacion('historia'));
  console.log('Resumen de calificaciones:', resumenCalificaciones());
  