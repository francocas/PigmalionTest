const input = [1,2,6,9,15,23,3];
const target = 9;
let result = false;
let resultOp = false;

//Ninguno de los dos algoritmos descarta target + 0, en caso de ser necesario se puede agregar la condición en las lineas 13 y 24 para descartar esa opción

//Algoritmo asumiendo recursos infinitos con la solución más rápida de implementar
//Recorre el array dos veces, sumando todos los elementos entre sí y verificando cada uno.
const arraySum = (input, target) => {
    for (i = 0; i < input.length; i++) {
        for (j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === target && input[i] !== input[j]) {
                return true;
            }
        }
    }
    return false;
}

//Algoritmo asumiendo recursos limitados. Crea un set en base al array original,
//Itera el array a traves del .find, validando que el elemento sea distinto al target
//Resta el elemento al target y verifica por el resultado en el set
const arraySumOp = (input, target) => {
    const arrset = new Set(input);
    const answer = input.find(el => el + el !== target && arrset.has(target - el));
    return answer === undefined ? null : target === (answer + target - answer);
}

result = arraySum(input, target);
resultOp = arraySumOp(input, target);

console.log(result, resultOp);