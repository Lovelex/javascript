const sequencia = {

    _valor : 1,

    get valor() { return this._valor++ },
    set valor(valor) { 

        if( this._valor < valor ){
            this._valor = valor
        }
        
    }

}

console.log( sequencia.valor, sequencia.valor ) // retorna: 1 2
console.log( sequencia.valor = 1000 ) // retrna: 1000