/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */


// for (let index = 1; index <6; index+=1){
//     setTimeout(()=>{console.log(`Сообщение номер ${index}`)},2000)
    
   
// }
let index=1
const timerId = setInterval(()=>{
    console.log(`Сообщение номер ${index}`)
    index+=1
    if (index>5)  {
       clearInterval(timerId) 
    }

    }, 2000);