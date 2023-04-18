const lista = [
    { name: "Gabriel", age: 23 },
    { name: "Cristofer", age: 16 },
    { name: "Gustavo", age: 28 }
]

function deMaior(lista) {
    return lista.map(item => {
        return (
            {
                name: item.name,
                age: item.age,
                isAdult: item.age >= 18 ? true : false
            }
        )
    })
}

const novaLista = deMaior(lista)
console.log(novaLista)