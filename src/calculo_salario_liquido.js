function calcularSalarioLiquido(salarioBruto) {
    
    let inss = 0;
    let imposto = 0;
    let salarioLiquido = 0;
    const tetoInss = 908.85

    //CALCULO INSS

    if(salarioBruto <= 1412) {
        inss = salarioBruto * (7.5 / 100)

    } else if(salarioBruto >= 1412.01 && salarioBruto <= 2666.68) {
        inss = salarioBruto * (9 / 100)

    } else if(salarioBruto >= 2666.69 && salarioBruto <= 4000.03) {
        inss = salarioBruto * (12 / 100)
    } else {
        inss = salarioBruto * (14 / 100)

        if(inss > tetoInss) {
            inss = tetoInss
        }
    }

    console.log(inss)

    //CALCULO IMPOSTO DE RENDA 

    if(salarioBruto <= 2112) {
        imposto = 0;
      } else if(salarioBruto >= 2112.01 && salarioBruto <= 3751.05) {
        imposto = salarioBruto * (15 / 100)
      } else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        imposto = salarioBruto * (22.5 / 100)
      } else {
        imposto = salarioBruto * (27.5 / 100)
      }

      console.log(imposto)
    
    salarioLiquido = salarioBruto - imposto - inss

    return salarioLiquido;
}

module.exports = calcularSalarioLiquido;