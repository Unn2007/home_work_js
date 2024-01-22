/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */
const myArray = [1,2,3,4,5,6,7,8,9,0]
myArray.map((val)=>console.log(val))
myArray.forEach(val=>console.log(val*2))
for (const val of myArray) {
    console.log(val*(-1))
}