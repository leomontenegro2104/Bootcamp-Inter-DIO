var numero1 = parseFloat(prompt("Insira o primeiro número:"))
var numero2 = parseFloat(prompt("Insira o segundo número:"))
var comparaNumero;
var soma = numero1 + numero2;
var confereSoma;

// verifica se os valores inseridos nas variáveis numero1 e numero2 são NaN, caso seja permanecerá no loop até que o usuário insira o valor desejado, no caso, número.
function verificaNumeros () {

    while (isNaN(numero1)) {

        numero1 = parseFloat(prompt("Valor inválido. Insira um valor válido para o primeiro número:"))

    }

    while (isNaN(numero2)) {

        numero2 = parseFloat(prompt("Valor inválido. Insira um valor válido para o segundo número:"))

    }

   console.log (numero1 , numero2)

}

function comparaNumeros() {

    if (numero1 == numero2) {

        comparaNumero = "são iguais"
        

    } else {

        comparaNumero = "não são iguais"
        

    }
}

function confereSomas () {

    if (soma < 10) {

        confereSoma = "menor que 10 e menor que 20."

    } else if (soma > 10 && soma < 20) {

        confereSoma = "maior que 10 e menor que 20."

    } else if (soma > 20) {

        confereSoma = "maior que 10 e maior que 20."

    } else if (soma == 20) {

        confereSoma = "maior que 10 e igual a 20."

    } else if (soma == 10) {

        confereSoma = "igual a 10 e menor que 20."

    }

}

function mostraMensagem () {

    alert("Os números " + numero1 + " e " + numero2 + " " + comparaNumero + ". Sua soma é " + soma + ", que é " + confereSoma);

}

verificaNumeros ();
comparaNumeros ();
confereSomas ();
mostraMensagem();

