/*Вывести в консоль значения выражений и объяснить почему получились такие значения
используя комментарии к каждому выражению:
10 + 10 + "10";
10 + "10" + 10;
10 + 10 + +"10"; (обратите внимание на пробелы, пишите также)
10 / -"";
10 / +"2,5"; (да здесь запятая, это не опечатка)*/

'use strict'
console.log(10 + 10 + "10");
/*выполнение слева направо, приоритет одинаковый, сначала происходит сложение, 10+10=20,
* потом происходит приведение типов 20 к строке и следует конкатенация строк*/
console.log(10 + "10" + 10);
/*выполнение слева направо, приоритеты одинаковые, 1) приведение 10 к строке, следом конкатенация "10" + "10",
* следом еще одно приведение к строке и конкатенация "1010" + "10"*/
console.log(10 + 10 + +"10");
console.log(10 / -"");
console.log(10 / +"2,5");
