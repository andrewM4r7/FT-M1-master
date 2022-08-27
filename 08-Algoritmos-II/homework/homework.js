'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1){
    return array;
  }
 let left = [];
 let right = [];
 let aux = [];
 let pivote = array.pop();
 let n = array.length;

 for(let i = 0; i < n; i++){
  if (array[i] <= pivote) {
    left.push(array[i]);
  }else{
    right.push(array[i]);
  }
 }
 return aux.concat(quickSort(left), pivote, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  const half = array.length / 2;

  
  if (array.length <= 1) {
    return array;
  }
  let merge = function(left, right) {
    let sortedArr = []; 
  
    while (left.length && right.length) {
      
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    
    return [...sortedArr, ...left, ...right];
  }

  const left = array.splice(0, half); 
  const right = array;
  return merge(mergeSort(left), mergeSort(right));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
