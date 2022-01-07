const meuArray = [30, 30, 40, 5, 223, 2049,3034, 5]

function valoresUnicos (array) {
    const mySet = new Set(array);

    //utilizou-se o rest (3 pontinhos) para transformar o Set em uma Array
    return [...mySet];
}

console.log(valoresUnicos(meuArray));