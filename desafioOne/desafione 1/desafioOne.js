function numeroEscolhido(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        return ("FizzBuzz")
    } else if (numero % 3 == 0) {
        return ("Fizz")
    } else {
        return ("Buzz")
    }
}

console.log(numeroEscolhido( 0 ))