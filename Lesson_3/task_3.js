'use strict'
/*
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
* */


const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (products) {
    let sale = 0.85
    console.log(`Старая цена ${products.price}`)
    products.price = products.price * sale
    console.log(`Новая цена ${products.price}`)
})