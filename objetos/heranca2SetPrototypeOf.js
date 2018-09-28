const carro = {

    velocidadeAtual: 0,
    velocidadeMaxima: 200,

    acelerar( delta ){

        if( this.velocidadeAtual + delta < this.velocidadeMaxima){
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }

    },

    status() {
        return `${this.velocidadeAtual}Km/H de: ${this.velocidadeMaxima}Km/H`
    }

}

const ferrari = {

    modelo: 'F40',
    velocidadeMaxima: 324

}

const volvo = {

    modelo: 'A40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf( ferrari, carro )
Object.setPrototypeOf( volvo, carro )

ferrari.acelerar(300)
console.log( ferrari.status() )

volvo.acelerar(180)
console.log( volvo.status() )

/*
 * Object.setPrototypeOf() cria herança a partir de um objeto. 
 * O primeiro parâmetro é quem será o filho e o segundo quem será o pai.
 * Usamos super. para apontar para o atributo ou método do pai ou superior.
*/ 