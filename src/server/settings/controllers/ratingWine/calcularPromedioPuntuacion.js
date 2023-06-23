function calcularPromedioPuntuacion(arr) {
//?? Objeto para almacenar el total de puntuación y la cantidad de reviews por producto
    const promedios = {};
  
//?? Iterar sobre el array y calcular la suma de puntuaciones y el total de reviews por producto
    arr.forEach((wine) => {
      const { puntuation, wine_id } = wine;
    // Si ya existe la propiedad dentro de promedios que lleve el nombre de lo que se recibe por wine_id, 
    // entonces se suma la puntuacion a la puntacion total y se aumenta en 1 la cantidad de reviews(osea la cantidad de personas que votaron el producto). 
    // Esto se hace para luego sacar el promedio
      if (promedios.hasOwnProperty(wine_id)) {
        promedios[wine_id].totalPuntuation += puntuation;
        promedios[wine_id].totalReviews += 1;
      } else {
    // Si NO existe la propiedad dentro de promedios que lleve el nombre de lo que se recibe por wine_id
    // entonces se crea la nueva propiedad dentro de primedios utilizando el string recibido por wine_id
    // esa sera un objeto que a su vez tendra las priopiedades totalPuntuation (cuyo valor inicial sera la 
    // propiedad puntation del primer objeto que no se repita) y totalReviews (cuyo valor inical sera 1 ya que es el primer producto que no se repite)  
        promedios[wine_id] = {
          totalPuntuation: puntuation,
          totalReviews: 1,
        };
      }
    });
  
//?? Calcular el promedio de puntuación por producto
    const promediosArray = Object.keys(promedios).map((wine_id) => {
      const { totalPuntuation, totalReviews } = promedios[wine_id];
      const promedio = Math.round(totalPuntuation / totalReviews);
  
      return {
        wine_id,
        promedio,
      };
    });
  
//?? Ordenar los productos de mayor a menor promedio
    promediosArray.sort((a, b) => b.promedio - a.promedio);
  
    return promediosArray;
  }

module.exports = calcularPromedioPuntuacion;