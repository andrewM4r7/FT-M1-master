"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.rigth = null;
}
BinarySearchTree.prototype.size = function(){
  let count = 1;
  if(this.left) count += this.left.size();
  if(this.right) count += this.right.size();
  return count;
};
BinarySearchTree.prototype.insert = function(valueInsert){

  (this.value > valueInsert) ? 
  (!this.left) ? this.left = new BinarySearchTree(valueInsert) : this.left.insert(valueInsert) 
  :
  (!this.right)? this.right = new BinarySearchTree(valueInsert) : this.right.insert(valueInsert);
};
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true ;
  if (this.left?.contains(value)) return true;
  if (this.right?.contains(value)) return true;
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order = "in-order"){
  switch(order){
    case "in-order": {
      this.left?.depthFirstForEach(cb, order);
      cb(this.value);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "pre-order": {
      cb(this.value);
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "post-order": {
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);}
      cb(this.value)
      break;
  }

};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
  cb(this.value);
  if(this.left) queue.push(this.left);
  if(this.right) queue.push(this.right);

  if(queue.length){
    queue.shift().breadthFirstForEach(cb, queue);
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
