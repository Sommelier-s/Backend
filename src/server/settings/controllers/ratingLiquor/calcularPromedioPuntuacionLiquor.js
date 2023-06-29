function calcularPromedioPuntuacionLiquor(arr) {
//?? Objeto para almacenar el total de puntuación y la cantidad de reviews por producto
    const promedios = {};
  
//?? Iterar sobre el array y calcular la suma de puntuaciones y el total de reviews por producto
    arr.forEach((liquor) => {
      const { rating, liquor_id } = liquor;
    // Si ya existe la propiedad dentro de promedios que lleve el nombre de lo que se recibe por liquor_id, 
    // entonces se suma la puntuacion a la puntacion total y se aumenta en 1 la cantidad de reviews
    // (osea la cantidad de personas que votaron el producto). 
    // Esto se hace para luego sacar el promedio.
      if (promedios.hasOwnProperty(liquor_id)) {
        promedios[liquor_id].totalRating += rating;
        promedios[liquor_id].totalReviews += 1;
      } else {
        /*{
          uuid1: {
            totalPuntuation: 0,
            totalReviews: 1,
          },
          uuid2: {
            totalPuntuation: 0,
            totalReviews: 1,
          },
          uuid1: {
            totalPuntuation: 0,
            totalReviews: 1,
          },
          uuid1: {
            totalPuntuation: 0,
            totalReviews: 1,
          }
        }*/ 
    // Si NO existe la propiedad dentro de promedios que lleve el nombre de lo que se recibe por liquor_id
    // entonces se crea la nueva propiedad dentro de primedios utilizando el string recibido por liquor_id
    // esa sera un objeto que a su vez tendra las priopiedades totalPuntuation (cuyo valor inicial sera la 
    // propiedad puntation del primer objeto que no se repita) y totalReviews (cuyo valor inical sera 1 ya 
    // que es el primer producto que no se repite)  
        promedios[liquor_id] = {
          totalRating: rating,
          totalReviews: 1,
        };
      }
    });
  
//?? Calcular el promedio de puntuación por producto
    const promediosArray = Object.keys(promedios).map((liquor_id) => {
      const { totalRating, totalReviews } = promedios[liquor_id];
      const promedio = Math.round(totalRating / totalReviews);
  
      return {
        liquor_id,
        promedio,
      };
    });
  
//?? Ordenar los productos de mayor a menor promedio
    promediosArray.sort((a, b) => b.promedio - a.promedio);
  
    return promediosArray;
  }

module.exports = calcularPromedioPuntuacionLiquor;