saldo = 10000;

// Recebe dinheiro
function receba(saldo, valorRecebido) {
    novo_saldo = saldo + valorRecebido
    return novo_saldo
}

console.log(receba(saldo, 100))

// Paga ou saca dinheiro
function saque(saldo, valorSubtraido) {
    novo_saldo = saldo - valorSubtraido
    return novo_saldo
}

console.log(saque(saldo, 500))

// Um ganho percentual - tipo investimento 
// taxa deve ser pensada percentualmente (100% = 1, 200% = 2)
function ganhoPercentual (saldo, taxa) {
    novo_saldo = saldo*(1+taxa)
    return novo_saldo
}

console.log(ganhoPercentual(saldo, 3))

// Imposto
// taxa deve ser pensada percentualmente (100% = 1, 50% = 0.5)
function imposto(saldo, taxa) {
    if (taxa > 1) {
        return "Você não pode taxar alguém em mais de 100% dos bens"
    } else {
        novo_saldo = saldo*(1-taxa)
        return novo_saldo
    }
}

console.log(imposto(saldo, 0.5))