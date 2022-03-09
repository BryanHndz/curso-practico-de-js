const ladocuadrado = 5;

console.group("Cuadrado");

    console.log(`El lado del cuadrado es de ${ladocuadrado} cm.`);
    console.log(`El área del cuadrado es de ${ Math.pow(ladocuadrado,2) } cm.`);
    console.log(`El perímetro del cuadrado es de ${ladocuadrado*4} cm.`);
console.groupEnd();