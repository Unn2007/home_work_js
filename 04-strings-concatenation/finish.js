/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = "Roman"
const myThirname ="Super"
const myProf="Bezdelnik"
const result="Меня зовут "+myName+" "+myThirname+" и я "+myProf
console.log(result)
const newResult=`Меня зовут ${myName} ${myThirname} и я ${myProf}`
console.log(newResult);
