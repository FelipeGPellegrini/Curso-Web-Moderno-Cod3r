function tratarErroELancar(){
    throw new Error("Erro")

}

function ImprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!")
    } catch {
        tratarErroELancar()
    } finally {
        console.log("Fim")
    }

}

const obj = { name: "Roberto" }

ImprimirNomeGritado(obj)