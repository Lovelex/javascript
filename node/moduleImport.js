const moduleA = require('./moduleExportsA')
const moduleB = require('./moduleExportsB')

console.log( moduleA.welcome ) // retorna: Welcome!
console.log( moduleA.sayHello ) // retrorna: hello, wolrd!
console.log( moduleA.bye,'\n' ) // retorna: Good bye!

console.log( moduleB.Talk ) // retorna: Talking some thing...
console.log( moduleB.sayMyName() ) // retorna: Module Exports
console.log( moduleB.sayByeAgain() ) // retorna: Good Bye My Friends

/*
 * require() importa os modulos exportados de outros arquivos.
*/ 