/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = (person) => {

  const {name,age:personAge,location:{country:origin,city:homeCity},friendsQty=0,createdAtYear=new Date().getFullYear()} = person
  // const {name,personAge=person.age,origin=person.location.country,homeCity=person.location.city} = person
  // const friendsQty=0
  // const date= new Date()
  // const createdAtYear = date.getFullYear()
  return {name,personAge,origin,homeCity,friendsQty,createdAtYear}
}


const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
