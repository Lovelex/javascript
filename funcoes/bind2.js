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

new PessoaComBind

/********************************/

function PessoaComSelf(){

    this.idade = 0
    const self = this

    setInterval( function(){

        self.idade++
        console.log(self.idade)

    }, 1000 )

}

new PessoaComSelf