function Carro( velocidadeMaxima = 200, delta = 5 ){

    let velocidadeAtual = 0

    this.acelerar = function(){
        
        if ( velocidadeMaxima > velocidadeAtual ){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }

    this.getVelocidadeAtual = function(){
        
        console.log( velocidadeAtual )

    }

}

let bmw = new Carro
bmw.acelerar()
bmw.getVelocidadeAtual() // retorna: 5

let ferrari = new Carro( 360, 20 )
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.getVelocidadeAtual() // retorna 60