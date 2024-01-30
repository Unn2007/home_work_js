/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]



const arraySortInfo = (inputArray) =>{
    if (!inputArray.every((item)=> Boolean(Number(item)))) {
        return ("Некоторые элементы не являются числами")
    }
    
    const isArraySortedUp =  inputArray.every((item,index,array)=>{
        if (index<(array.length-1)) {
            return (Boolean((item-array[index+1])<=0))
        } else {return true}
     })

    if (isArraySortedUp) {
        return ("Массив отсортирован по возрастанию")
    }
     
const isArraySortedDown = inputArray.every((item,index,array)=>{
    if (index<(array.length-1)) {
        return (Boolean((item-array[index+1])>=0))
    } else {return true}
 })

    if (isArraySortedDown) {
        return ("Массив отсортирован по убыванию")
    }

    if ((!isArraySortedDown)&(!isArraySortedUp)) {
        return "Массив не отсортирован"
    }


}

console.log(arraySortInfo(a)) 
console.log(arraySortInfo(b)) 
console.log(arraySortInfo(c)) 
console.log(arraySortInfo(d)) 

