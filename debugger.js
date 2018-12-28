function Calculadora() {
  let resultado = 0;
  this.somar = (...nums) => {
    resultado += eval(nums.join('+'));
    return this;
  }
  this.subtrair = (...nums) => {
    resultado -= eval(nums.join('-'));
    return this;
  }
  this.multplicar = (...nums) => {
    resultado *= eval(nums.join('*'));
    return this;
  }
  this.dividir = (...nums) => {
    resultado /= eval(nums.join('/'));
    return this;
  }
  this.zerar = () => {
    resultado = 0;
    return this;
  }
  this.showResults = () => {
    console.log(resultado)
    return this;
  }
}

const calculadora = new Calculadora()

calculadora.somar(11, 80).showResults()