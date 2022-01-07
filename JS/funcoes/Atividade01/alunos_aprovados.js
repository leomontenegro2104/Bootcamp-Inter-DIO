const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '1C',
    },
    {
        nome: 'Miguel',
        nota: 4,
        turma: "1C",
    }
];

function alunoAprovados (array, media) {
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        
        const {nota, nome} = array[i];
        
        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunoAprovados(alunos, 5));