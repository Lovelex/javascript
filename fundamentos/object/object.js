const obj1 = {produto : 'Nintendo Switch', preço: 1300  }

console.log(obj1) // retorna: { produto: 'Nintendo Switch', 'preço': 1300 }

const obj2 = {}
obj2.produto = 'Nintendo Switch'
obj2.preço = 1300

console.log(obj2) // retorna: { produto: 'Nintendo Switch', 'preço': 1300 }


const obj3 = {}
obj3['produto'] = 'Nintendo Switch'
obj3['preço'] = 1300

console.log(obj3) // retorna: { produto: 'Nintendo Switch', 'preço': 1300 }