const anonimo = process.argv.indexOf('-a') !== -1

if( anonimo ){
    process.stdout.write('Fala Anônimo!')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString()
        // console.log(nome.toString())
        process.stdout.write( `Fala ${nome}` )
        process.exit()
    })
}