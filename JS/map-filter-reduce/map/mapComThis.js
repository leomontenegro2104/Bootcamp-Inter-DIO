const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis (array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg) 
}

const nume = [1, 2];

console.log( 'this --> maçã',  mapComThis(nume, maca));

console.log( 'this --> laranja', mapComThis(nume, laranja));