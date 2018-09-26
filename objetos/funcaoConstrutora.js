function Produto( nome, preco, desconto ){

    this.nome = nome

    this.getPrice = () => { 

        return eval( preco * ( 1 - `0.${desconto}` ) ) 

    }

}

const p1 = new Produto( 'caderno', 500, 50  )
console.log( p1.getPrice() ) // retorna: 250

/*
 * quando usamos THIS o atributo ou método se torna PÚBLICO para acesso
*/ 