let a = [12,34,15,28,55];

let acumulacion = a.reduce(function(acum,element){ //el metodo reduce lleva 2 parametros, el primero es un acumulador y el segundo es cada elemento de array
    return acum + element; //retrna la suma de todos los elementos
});
console.log(acumulacion); //imprime [144]