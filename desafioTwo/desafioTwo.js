const listinhaPar = [2, 4, 6, 8, 10]
const listinhaImpar = [5, 7, 9, 11, 13]
const listinhaUnida = [2, 4, 5, 6, 7, 8, 9, 10, 11, 13]

function somando(lista) {
    let total = 0

    lista.forEach(numero => {
        if (numero % 2 == 0) {
            total += numero
        }
    })

    return console.log(total)
}

somando(listinhaPar)
somando(listinhaImpar)
somando(listinhaUnida)