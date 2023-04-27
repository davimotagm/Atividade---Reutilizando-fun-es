// ATIVIDADE 1
function somaReutilizavel(a, b) {
    return a + b;
}
let resultado = 0
resultado = (somaReutilizavel(10, 10)) * 5;
console.log(resultado);

// // ATIVIDADE 2
function letraInicial(nome, sobrenome) {
    return nome[0].toUpperCase() + " " + sobrenome[0].toUpperCase();
}

function nomeCompleto() {
    return `As letras iniciais do meu nome completo são ${letraInicial("Davi", "Mota")}.`
}

console.log(nomeCompleto("Davi", "Joao"));

// ATIVIDADE 3
function par(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}
function impar(n) {
    if (n % 2 !== 0) {
        return true
    } else {
        return false
    }
}
function letrasProduto(produto) {
    if (par(produto.length)) {
        return `O número de letras deste produto é par`
    } else if (impar(produto.length)) {
        return `O número de letras deste produto é ímpar`
    }
}
console.log(letrasProduto("testando"));