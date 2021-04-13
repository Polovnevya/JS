'use strict'
/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

/**
 * функция производит арифметические действия над числами
 * @param arg1 первое число
 * @param arg2 второе число
 * @param operation тип действия в виде строки "+" "-" "/" "*"
 * @returns {Number}
 */
function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "+":
            return  addition(arg1,arg2)
        case "-":
            return  subtraction(arg1,arg2)
        case "/":
            return  division(arg1,arg2)
        case "*":
            return  multiplication(arg1,arg2)
    }
}

console.log(mathOperation(10,5,"+"))
console.log(mathOperation(10,5,"-"))
console.log(mathOperation(10,5,"/"))
console.log(mathOperation(10,5,"*"))