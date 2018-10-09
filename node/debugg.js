const axios = require('axios')
const url = 'http://ddragon.leagueoflegends.com/cdn/8.19.1/data/en_US/champion.json'

const getChampions = ( champions ) => console.log( Object.keys( champions.data ) )


axios.get( url ).then( response => {
    let dragon = response.data
    dragon = [dragon] 

    console.log( dragon[0].data ) 
} )