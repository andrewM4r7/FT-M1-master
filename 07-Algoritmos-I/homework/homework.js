'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let i = 2;
  while(num !==1){
   if(num % i === 0){
     arr.push(i);
     num = num / i;
   }else{
     i++;
   }
  }
  return arr;
 }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
 for(let i = 0; i < array.length; i++){
  array.sort((a,b) => a - b);
 }
 return array;

}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++){
    let j = i - 1;
    let auxiliar = array[i];

    while (j >= 0 && array[j] > auxiliar){
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = auxiliar;
  }
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 let auxiliar = [...array];

 for(let i = 0; i < array.length; i++){
  let min = auxiliar.slice(i + 1)
  .reduce((a, e, j) => (e < auxiliar[a] ? j + i + 1 : a), i);

  if (min != i) {
    [auxiliar[i], auxiliar[min]] = [auxiliar[min], auxiliar[i]];

  }
 }
 return auxiliar;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
