const inputOne = Number(prompt("Primeiro Numero:"))
const inputTwo = Number(prompt("Segundo Numero:"))

const soma = (a, b) => (a + b)
const sub = (a, b) => (a - b)
const multi = (a, b) => (a * b)
const div = (a, b) => (a / b)
const mod = (a, b) => (a % b)
const even = (a) => (a%2 === 0) ? "par" : "impa"
const same = (a, b) => (a === b) ? "iguais" : "diferentes"



alert(`A soma e: ${soma(inputOne, inputTwo)}`)
alert(`A subtracao e: ${sub(inputOne, inputTwo)}`)
alert(`A multiplicao e: ${multi(inputOne, inputTwo)}`)
alert(`A divisao e: ${div(inputOne, inputTwo)}`)
alert(`O resto da divisao e: ${mod(inputOne, inputTwo)}`)
alert(`A soma e: ${even(soma(inputOne, inputTwo))}`)
alert(`Os numeros sao: ${same93(inputOne, inputTwo)}`)