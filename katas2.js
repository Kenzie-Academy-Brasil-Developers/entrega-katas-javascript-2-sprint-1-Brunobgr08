// comece a criar a sua função add na linha abaixo
function add(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(multiplicador, multiplicando) {
    let produto = 0;
    for (let i = 1; i <= multiplicador; i++) {
        produto = add(produto, multiplicando);
    }
    return produto;
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(base, expoente) {
    let potencia = 1;
    for (let i = 1; i <= expoente; i++) {
        potencia = multiply(potencia, base);
    }
    return potencia;
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(fator){
    let resultadoFatorial = 1;
    for (let i = fator; i > 0; i--){
        resultadoFatorial = multiply(resultadoFatorial,i);
    }
    return resultadoFatorial;
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(enesimo){
    let resultFibonacci = 0;
    let valorAtual = 1;
    let valorAnterior  = 0;
    for (i = 1; i < enesimo; i++){
        resultFibonacci = add(valorAtual, valorAnterior);
        valorAnterior = valorAtual;
        valorAtual = resultFibonacci;
    }
    return resultFibonacci;
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
