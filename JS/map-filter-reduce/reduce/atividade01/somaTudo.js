function somaNumeros(array) {
    return array.reduce(function (previous, current) {
        return previous + current;
    })
}

const array = [1, 2]

console.log(somaNumeros(array))