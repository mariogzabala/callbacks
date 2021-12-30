let a = [12,34,15,28,55];

let filtrados = a.filter(function(element){ //el metodo filter recorre el array
    return element > 30; //y retorna un nuevo array
});
console.log(filtrados); //imprime [34,55]