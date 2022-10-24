const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//fez cache
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

//não fez cache, pois a factory cria uma nova instância
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)