let palavra;
let palavraInvertida;

function solicitaPalavra () {

    palavra = prompt("Digite uma palavra: ");

    while (!isNaN(palavra)) {

        palavra = prompt("Valor inválido. Por favor insira uma palavra:")

    }
      if (isNaN(palavra)) {

        checaPalindromo1 ();
        checaPalindromo2 ();

      }
    
}


function checaPalindromo1 () {

   // primeira possibilidade: utilizando a função split() para desmontar a palavra caracter por caracter, a função reverse() para inverter a ordem e a função join() para juntar ae montar a nova palavra - não é a alternativa mais performática.
    palavraInvertida = palavra.split("").reverse().join("");

    if (palavraInvertida === palavra) {

        alert(palavra + " é um palíndromo, já que o seu inverso é igual à ela mesma: " + palavraInvertida );

    } else {

        alert (palavra + " não é um palíndromo, já que o seu inverso é diferente dela: " + palavraInvertida);

    }

    
}

// segunda possibilidade: coleta todos os caracteres da variável palavra e reordena, inserindo do último até o primeiro, utilizando o laço for e encerrando ao chegar no começo da array, no caso i == [0]- é a alternativa mais performática.
function inverteFrase (palavra) {

    palavraInvertida = ' ';

    for (var i = palavra.length - 1; i <= 0; i --) {

        palavraInvertida += palavra[i];

    }

    return palavraInvertida;

}

function checaPalindromo2 () {

    if (inverteFrase(palavra) === palavra) {

        alert(palavra + " é um palíndromo, já que o seu inverso é igual à ela mesma: " + palavraInvertida );

    } else {

        alert (palavra + " não é um palíndromo, já que o seu inverso é diferente dela: " + palavraInvertida);

    }

}

solicitaPalavra();