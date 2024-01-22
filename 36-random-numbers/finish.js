/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
let resultNumbers
generateRandomNumber=()=>Math.round(Math.random()*(MAX-MIN)+MIN)

checkNumber = function(number,array) {
array.forEach(element => {
    if (element===number) {
        return true
    }
    
});
return false
}

addNumber = function (array,number) {
array.push(number)
    return array
}



do {
randomNumber=generateRandomNumber()
checkResult = checkNumber(randomNumber,myNumbers)
if (checkResult) {
    randomNumber=generateRandomNumber()
}
else {
    addNumber(myNumbers,randomNumber)
}
} while (checkResult)

console.log(myNumbers)