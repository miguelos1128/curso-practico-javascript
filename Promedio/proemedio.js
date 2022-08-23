const lista1 = [
    1,
    2,
    3,
    1,
    3,
    2,
    1,
    2,
    3,
    2,
    4,
    2,
    4,
    1,
    2,
];

//Caluclar el promedio
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

//Calcular la mediana
function calcularMedianaAritmetia(lista){
    lista.sort(function(a,b){return a - b;});
    console.log("Lista: " + lista);
    const mitadLista = parseInt(lista.length /2);

    function esPar(){
        if(lista.length % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista];
    }
    
    return mediana;
}

//Calcular la Moda

function CalcularModa(lista){
    const lista1Count = {};

    lista.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    
    return moda;
}

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
