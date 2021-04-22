'use strict'
/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xxxxx
xxxx
xxxx
* */
let i, j

for (i = 0; i < 20; i++) {
    let star = ""
    for (j = 0; j <= i; j++) {
        star = star + "*"
    }
    console.log(star)
}