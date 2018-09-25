const CriarPessoas = ( pessoa ) => {
    
    this.pessoa = pessoa
    return { 

        falar: () => { console.log( `Meu nome é ${this.pessoa}` ) } 

    }

}

const jose = CriarPessoas('josé')
jose.falar() // retorna: Meu nome é josé
