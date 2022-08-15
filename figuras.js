// Este es el codigo del cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return  lado * lado;
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es: " + perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El Área es: " + area);
}

// Este es el codigo del Triangulo
function altura(ladoA, ladoB, base){
    if(ladoA == ladoB && ladoA != base){
        console.log("Isoceles");
        const altura = Math.sqrt(ladoA*ladoA-((ladoB*ladoB)/4));
        return altura;
    }else{
        alert("El triangulo no es isoceles");
    }
}
function perimetroTriangulo (lado1, lado2, base){
    return (lado1 * 2) + base;
}
function areaTriangulo(base, altura){
    return (base * altura) /2;
}
function calcularPerimetroTraignulo(){
    const inputA = document.getElementById("inputTringuloLadoA");
    const ladoA = inputA.value;
    const inputB = document.getElementById("inputTrianguloLadoB");
    const ladoB = inputB.value;
    const inputBase = document.getElementById("inputTriaguloBase");
    const base = inputBase.value;
    if(ladoA == ladoB && base != ladoA){
        const perimetro = perimetroTriangulo(Number(ladoA), Number(ladoB), Number(base));
        alert("El Área del triangulo es: " + perimetro);
    }else{
        alert("El triangulo no es Isoceles")
    }
}
function calcularAreaTraignulo(){
    const inputA = document.getElementById("inputTringuloLadoA");
    const ladoA = inputA.value;
    const inputB = document.getElementById("inputTrianguloLadoB");
    const ladoB = inputB.value;
    const inputBase = document.getElementById("inputTriaguloBase");
    const base = inputBase.value;
    if(ladoA == ladoB && base != ladoA){
        const altura = Math.sqrt(ladoA*ladoA-((ladoB*ladoB)/4));
        const area = areaTriangulo(Number(base),Number(altura));
        alert("El area del trigulo es: " + area);
    }else{
        alert("El triangulo no es Isoceles")
    }
}

// Este es el codigo del Circulo
function perimetroCirculo(radio){
    const diametro = radio * 2;
    return diametro * Math.PI;
} 
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    const perimetro = perimetroCirculo(Number(radio));
    alert("El perimetro del Circulo es: " + perimetro);
}
function calacularAreaCirculo(){
    const inputradio = document.getElementById("inputRadio")
    const radio = inputradio.value;
    const area = areaCirculo(Number(radio));
    alert("El area del circulo es: " + area);
}
