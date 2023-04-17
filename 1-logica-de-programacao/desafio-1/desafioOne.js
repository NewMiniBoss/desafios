function numeroEscolhido(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return console.log("FizzBuzz")
    } else if (num % 3 == 0) {
        return console.log("Fizz")
    } else {
        return console.log("Buzz")
    }
}

numeroEscolhido(30) // 30 % 3 = 10 || 30 % 5 = 6 // ("FizzBuzz")
numeroEscolhido(3) // 3 % 3 = 1 ("Fizz")
numeroEscolhido(5) // 5 % 5 = 1 ("Buzz")