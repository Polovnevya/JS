'use strict'
/*Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму*/

let a = parseInt(Math.random() * 100)
let b = parseInt(Math.random() * 100)
let result

if (Math.random() < 0.2) {
    b = -b
}

if (Math.sign(a) > 0 && Math.sign(b) > 0) {
    result = a - b
} else if (Math.sign(a) < 0 && Math.sign(b) < 0) {
    result = a * b
} else {
    result = a + b
}

console.log(result)