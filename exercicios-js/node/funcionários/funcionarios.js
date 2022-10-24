const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.id)
    const mulheres = funcionarios.filter((funcionario)=> {
        return funcionario.genero == "F"
    })
    const mulheresEChinesas = mulheres.filter((funcionario) => {
        return funcionario.pais == "China"
    })
    const menorSalario = mulheresEChinesas.reduce((func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    })
    console.log(menorSalario)
} ) 

