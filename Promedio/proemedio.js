const lista1 = [
    100,
    200,
    300,
    500
];


function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    //for(let i = 0; i < lista1.length; i++){
      //  sumaLista = sumaLista + lista1[i];
    //}
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista/lista.length;
    
    return promedioLista;
}