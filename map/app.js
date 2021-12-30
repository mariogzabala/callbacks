let a = [2,4,5,8];

let doble = a.map(function(element){ // map es una funcion y "function" es otra funcion, por esto es un "Callback"
    
    return element * 2; //multiplica por 2 cada elemento del arreglo
});

console.log(doble); //imprime [ 4, 8, 10, 16 ]

//el parametro "element" puede ser cualquier nomnbre y se refiere a cada elemento del arreglo [2,4,5,8]