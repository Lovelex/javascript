function Carro( marca, modelo, ano ){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano
}

const meuCarro = new Carro( "Eagle", "Talon TSi", 1993 )

console.log( meuCarro )