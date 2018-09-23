function pessoaComArrowFunction(){

    this.idade = 0

    setInterval( () => {
        
        this.idade++
        console.log( this.idade )

    } , 1000)

}

new pessoaComArrowFunction

/*
 * Com arrow function não precisa usar a associação Bind pois o this se torna fixo.
*/ 