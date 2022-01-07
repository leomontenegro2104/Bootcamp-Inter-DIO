function validaArray (array, num) {
try {
    if (!array || !num)  throw new ReferenceError("Envie os parâmetros")
        
    if (typeof array !== 'object' ) throw new TypeError ("A array precisa ser do tipo object");

    if (typeof num !== 'number') throw new TypeError ("O valor deve ser do tipo number");

    if (array.length !== num) throw new RangeError ("O tamanho da array é dfferente do valor informado");

    return array;
}
catch(e){
    if (e instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError!");
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
    } else  if (e instanceof TypeError) {
        console.log("Este erro é um TypeError!");
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
    } else  if (e instanceof RangeError) {
        console.log("Este erro é um RangeError!");
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
    } else {
        console.log ("Tipo de erro não esperado:" + e)
    }
}

}

console.log(validaArray([1,2,3,4,5], 4))