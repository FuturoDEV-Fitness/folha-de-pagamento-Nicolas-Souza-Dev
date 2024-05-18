function calcularSalarioLiquido(salarioCompleto) {
    
    let inss = 0;
    let imposto = 0;
    let salarioLiquido = 0;
    const tetoInss = 908.85

    //CALCULO INSS

    if(salarioCompleto <= 1412) {
        inss = salarioCompleto * (7.5 / 100)

    } else if(salarioCompleto >= 1412.01 && salarioCompleto <= 2666.68) {
        inss = salarioCompleto * (9 / 100)

    } else if(salarioCompleto >= 2666.69 && salarioCompleto <= 4000.03) {
        inss = salarioCompleto * (12 / 100)
    } else {
        inss = salarioCompleto * (14 / 100)

        if(inss > tetoInss) {
            inss = tetoInss
        }
    }


    //CALCULO IMPOSTO DE RENDA 

    if(salarioCompleto <= 2112) {
        imposto = 0;
      } else if(salarioCompleto >= 2112.01 && salarioCompleto <= 3751.05) {
        imposto = salarioCompleto * (15 / 100)
      } else if(salarioCompleto >= 3751.06 && salarioCompleto <= 4664.68) {
        imposto = salarioCompleto * (22.5 / 100)
      } else {
        imposto = salarioCompleto * (27.5 / 100)
      }

    
    salarioLiquido = salarioCompleto - imposto - inss

    return salarioLiquido;
}

module.exports = calcularSalarioLiquido;