const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

bolsistas = alunos.map( ( aluno ) => aluno.bolsista ).reduce( ( acu, cur ) => {
   
    return acu || cur
   
} )
console.log( bolsistas )