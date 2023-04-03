let clientesTrybeBank = ["Ada", "John", "Gus"]

function acrescentaCliente(cliente) {
    if (typeof(cliente) != "string") {
        return "Cliente não é do tipo String"
    } else {
        clientesTrybeBank.push(cliente)
        return clientesTrybeBank
    }    
}

console.log(acrescentaCliente(2344))


