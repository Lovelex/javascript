function PessoaSemBind(){

    this.idade = 0

    setInterval( function(){

        this.idade++
        console.log(this.idade)

    }, 1000 )

}

new PessoaSemBind // retorna: uma contagem em 1 segundo com a mensagem NaN ( this não está associado a PessoaSemBind )

/********************************/

function PessoaComBind(){

    this.idade = 0

    setInterval( function(){

        this.idade++
        console.log(this.idade)

    }.bind(this), 1000 )

}

new PessoaComBind // retorna: uma contagem em 1 segundo com a mensagem 1, 2, 3... ( bind associa a this.PessoaComBind pois esta na próxima camada )

/********************************/

function PessoaComSelf(){

    this.idade = 0
    const self = this

    setInterval( function(){

        self.idade++
        console.log(self.idade)

    }, 1000 )

}

new PessoaComSelf // retorna: uma contagem em 1 segundo com a mensagem 1, 2, 3... ( self armazena this na camada PessoaComSelf e pode ser atribuidade como o this )