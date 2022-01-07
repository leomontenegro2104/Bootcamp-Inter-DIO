let valores = [2, 4, 6, 8, 9, 7, 5, 3, 1, 0];

function substituiPares (lista) {
    //verifica se o array existe
    if (!lista) return -1
    //verifica se o array possui length(tamanho)
    if(!lista.length) return -1
    for (let i = 0; i < lista.length; i++) {
        //verifica se o item do indice i da array é par e diferente de zero
        if (lista[i] % 2 === 0 && lista[i] !== 0) {
            lista[i] = 0;
        } 
    }   
    return lista
}

console.log(substituiPares(valores))

// console.log(lista[2] % 2 === 0) 