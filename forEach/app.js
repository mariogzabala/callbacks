let a = [12,34,15,28,55];

a.forEach(function(element){ //recibe como parametro de entrada una funcion y una palabra
    console.log(element); //devuelve cada elemento de array

})
//imprime   12
            34
            15
            28
            55

            //un forEach sirve para recorrer o iterar los elementos de un array al igual que el for

for(let i = 0; i < a.length; i++){ // esto es lo mismo que esta arriba solo que echo con el metodo "for"

    console.log(a[i]);
}            