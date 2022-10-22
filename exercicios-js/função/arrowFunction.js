let comparacomThisArrow = param => console.log(this === param)
comparacomThisArrow(global)
comparacomThisArrow(module.exports)