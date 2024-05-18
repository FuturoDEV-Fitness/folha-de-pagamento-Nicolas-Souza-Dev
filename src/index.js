//EX 2

// const calcularInss = require("./calculo_inss");
// console.log(`INSS: R$${calcularInss(2870)}`)

//EX 3
// const calcularImpostoRenda = require("./calculo_imposto_renda");
// console.log(`IMPOSTO DE RENDA: R$${calcularImpostoRenda(2500)}`)

//EX 4
// const calcularSalarioLiquido = require("./calculo_salario_liquido");
// console.log(`SALÁRIO LÍQUIDO: R$${calcularSalarioLiquido(2000)}`)

// EX 5 - PROGRAMA PRINCIPAL


const calcularInss = require("./calculo_inss")
const calcularImpostoRenda = require("./calculo_imposto_renda")
const calcularSalarioLiquido = require("./calculo_salario_liquido")

const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

function programaPrincipal() {

    let nome = ""
    let cpf = 0;
    let salarioBruto = 0;

    input.question("Digite o nome do funcionário: ", (nomeDigitado) => {
        nome = nomeDigitado;

        input.question("Digite o CPF do funcionário: ", (cpfDigitado) => {
            cpf = Number(cpfDigitado);

            input.question("Digite o salário do funcionário: ", (salarioDigitado) => {
                salarioBruto = Number(salarioDigitado);

                let valorInss = calcularInss(salarioBruto);
                let valorImposto = calcularImpostoRenda(salarioBruto);
                let valorSalarioLiquido = calcularSalarioLiquido(salarioBruto);
                console.log("---Folha de Pagamento---")
                console.log(`Nome: ${nome}`)
                console.log(`CPF: ${cpf}`)
                console.log(`Salário Bruto: ${salarioBruto}`)
                console.log(`INSS: ${valorInss}`)
                console.log(`Imposto de Renda: ${valorImposto}`)
                console.log(`Salário Líquido: ${valorSalarioLiquido}`)

                input.close();
            })
        })

    })
}

programaPrincipal();

