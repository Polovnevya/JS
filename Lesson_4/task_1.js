'use strict'

/*
(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)

* */

function createObjectNumber(number) {

    function objectNumber() {
        this.units
        this.tens
        this.hundereds
    }

    objectNumber.prototype.convert = function () {
        /**
         * блок проверок
         */

        if (number == NaN || number == undefined || number == null || number == "") {
            return NaN
        } else if (number >= 0 && number <= 999 && Number.isInteger(Number(number))) {
            this.units = number % 10
            this.tens = Math.floor(number / 10) % 10
            this.hundereds = Math.floor(number / 100) % 10
        }
    }
    let myObj = new objectNumber
    myObj.convert(number)
    return myObj
}


let number = prompt("Введите число от 0 до 999")

let my_obj = createObjectNumber(number)
console.log(my_obj.hundereds, my_obj.tens, my_obj.units)