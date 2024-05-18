function calcularImpostoRenda(salarioTotal) {

    let imposto = 0;
    
  if(salarioTotal <= 2112) {
    imposto = 0;
  } else if(salarioTotal >= 2112.01 && salarioTotal <= 3751.05) {
    imposto = salarioTotal * (15 / 100)
  } else if(salarioTotal >= 3751.06 && salarioTotal <= 4664.68) {
    imposto = salarioTotal * (22.5 / 100)
  } else {
    imposto = salarioTotal * (27.5 / 100)
  }

  return imposto;
}

module.exports = calcularImpostoRenda;