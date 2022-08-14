// Este es el codigo del cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return  lado * lado;
}

// Este es el codigo del Triangulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 
function areaTriangulo(base, altura){
    return (base * altura) /2;
}

// Este es el codigo del Circulo
function DiametroCirculo (radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro * Math.PI;
} 
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
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
    alert("El Área es: " + area)
}