const escola = [{
    turma: 'M1',
    alunos: [{
        nome: 'Fábio',
        nota: 8.3
    } , {
        nome: 'Daniel',
        nota: 6.6
    }],
    }, {
    turma: 'M2',
    alunos: [{
        nome: 'André',
        nota: 8.8
    }, {
        nome: 'João',
        nota: 9.8
    }]
}]

const getNota = aluno => aluno.nota

const getTurma = turma => turma.alunos.map( getNota )

let nota1 = escola.map( getTurma )

console.log( nota1 )

Array.prototype.flatMap = function( callback ){
    return Array.prototype.concat.apply( [], this.map( callback ) )
}

let nota2 = escola.flatMap( getTurma )

console.log( nota2 )

/*
 * flatMap() é criado para encurtar uma camada de arrays.
 * Essa função não é padrão do javascript, é preciso criar
*/ 
