////// maior numero de caracteres
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = ""

for (word of array) {
    if (word.length > maior.length) {
        maior = word
    }
}
console.log(maior);


////// Menor numero de caracteres
let menor = array[0]

for (word of array) {
    if (word.length < menor.length) {
        menor = word
    }
}
console.log(menor);