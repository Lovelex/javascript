const pessoa = {

    fala: 'Falando...',
    falar(){

        console.log( this.fala )

    }

}

pessoa.falar() // mostra no console: Falando...

const falar = pessoa.falar 
falar() // retorna: undifinied ( conflito entre paradigmas OO e Funcional, this não está mais relacionado ao objeto pessoa )

const falarComBind = pessoa.falar.bind( pessoa ) 
falarComBind()  // mostra no console: Falando...

/*
 * bind reforça o this a qual objeto você quer apontar, em outras palavras, ele quer saber a qual objeto esse this pertence.
*/ 