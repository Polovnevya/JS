'use strict'

/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return*/

/**
 * функция сложения
 * @param a первое слагаемое
 * @param b второе слагаемое
 * @returns {Number} возвращает сумму a и b в виде числа
 */
function addition(a, b) {
    return a + b

}

/**
 * функция вычитания
 * @param a уменьшаемое
 * @param b вычитаемое
 * @returns {Number} возвращает разницу a и b в виде числа
 */
function subtraction(a, b) {
    return a - b
}

/**
 * функция деления
 * @param a делимое
 * @param b делитель
 * @returns {Number} возвращает результат деления a и b в виде числа
 */
function division(a, b) {
    if (b === 0) {
        return NaN
    }
    return a / b
}

/**
 * функция умножения
 * @param a множимое
 * @param b множитель
 * @returns {Number} возвращает результат умножения a и b в виде числа
 */
function multiplication(a, b) {
    return a * b

}

console.log(addition(1,5))
console.log(addition(1,-5))

console.log(subtraction(10,5))
console.log(subtraction(10,-5))

console.log(division(10,2))
console.log(division(10,-2))
console.log(division(10,0))
console.log(division(0,10))

console.log(multiplication(2,10))
console.log(multiplication(0,10))
console.log(multiplication(0,-2))