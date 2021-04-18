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

    objectNumber.prototype.convert()
    {
        /**
         * блок проверок
         */
        switch (number) {
            case NaN || undefined  : {
                return NaN
            }
            case  !Number.isInteger(number): {
                return NaN
            }
            case number < 0 && number > 999: {
                return "Out of range"
            }
        }

        this.units = number % 10
        this.tens = number % 100
        this.hundereds = number % 1000
    }

    return objectNumber.prototype.convert(number)
}


let number = prompt("Введите число от 0 до 999")

let my_obj = createObjectNumber(number)