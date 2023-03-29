let salarioBruto = 3000;

if (salarioBruto <=1556.94) {
    salarioBase = 0.92 * salarioBruto
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = 0.91 * salarioBruto
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = 0.89 * salarioBruto
} else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    salarioLiquido = 0.925 * salarioBase + 142.8
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    salarioLiquido = 0.85 * salarioBase + 354.8
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    salarioLiquido = 0.775 * salarioBase + 636.13
} else if (salarioBase > 4664.68) {
    salarioLiquido = 0.725 * salarioBase + 869.36
}

console.log("Seu salário líquido é de: " + salarioLiquido.toFixed(2) + ", você pagou R$" + (salarioBase-salarioLiquido).toFixed(2) + " de imposto de renda e pagou R$" + (salarioBruto - salarioBase).toFixed(2) + " de INSS!" )