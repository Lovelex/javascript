const value = 'Global'

function showValue(){
    console.log( value )
}

function showAnotherValue(){

    const value = 'Local'
    return showValue()
    

}

showValue() // retorna: Global
showAnotherValue() // retorna: Global

/*
 * O contexto Léxico é o local ou contexto em que a função foi criada. Ela carrega consigo toda a informação no contexto em que ela foi gerada.
 * Nesse exemplo, o local onde showValue() foi gerada está junto a variável value, que também foi chamada na função ( console.log( value ) ).
 * Na função showAnotherValue() quem é chamado é 'value = Global' pois ela retorna showValue() que carregou consigo a variável. 
*/ 