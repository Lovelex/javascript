const schedule = require('node-schedule')

const contarAleatorio =  (  ) => { console.log ( Math.random() ) } 

const tempo1 = schedule.scheduleJob(' */2 * * * * * ', contarAleatorio)

setTimeout(() => {
    tempo1.cancel()
    console.log( 'Tempo1 cancelado' )
}, 5000);

const regra = new schedule.RecurrenceRule()
regra.second = 0

const tempo2 = schedule.scheduleJob( regra, contarAleatorio )

/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ dia da semana (0 - 7) (0 ou 7 são domingo)
│    │    │    │    └───── mês (1 - 12)
│    │    │    └────────── dia do mês (1 - 31)
│    │    └─────────────── hora (0 - 23)
│    └──────────────────── minuto (0 - 59)
└───────────────────────── segundo (0 - 59, OPCIONAL)

    node-schedule é uma biblioteca para ajudar na manipulação de temporizadores.
    scheduleJob() é um temporizador que dispara uma função de acordo com o tempo programado.
    ele requer dois parâmetros, o 1°: uma string com um formato específico com o exemplo acima.
    o 2°: uma função callback com o que vai ser disparado com o temporizador.

    setTimeout() é nativo do JS ele dispara UMA VEZ alguma tarefa em uma função de callback, 
    cancel() cancela um temporizador iniciado.

    scheduleJobe() no primeiro parâmetro podemos usar um objeto ao invés da string, as chaves devem ser
    as especificadas da biblioteca: rule.dayOfWeek = valor, rule.hour = valor, rule.minute = valor

*/