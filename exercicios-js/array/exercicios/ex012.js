const alunos = {nome: "Carla", sala: 1, nota: 7.5}

function info (aluno, nome){
    delete alunos.sala
    return alunos
}

console.log(info())