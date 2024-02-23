/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь
vowelsCount=[...str].reduce((acc,char)=>((vowels.includes(char))?acc+=1:acc+=0),0)
console.log(vowelsCount)
// 9
