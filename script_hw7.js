//Задание 1
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);

//Задание 2
function filterByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

//Задание 3
const number = 32.58884;
const roundedDown = Math.floor(number);
const roundedUp = Math.ceil(number);
const roundedNearest = Math.round(number);

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

//Задание 5
function getRandomNumber() {
    const randomNumber = Math.round(Math.random() * 10) + 1;
    console.log(randomNumber);
}

//Задание 6 
function getRandomArray(length) {
    const result = [];
    for (let i = 0; i < length / 2; i++) {
        result.push(Math.floor(Math.random() * length));
    }
    return result;
}

//Задание 7
function getRandomInRange(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

//Задание 8
const date8 = new Date();
console.log(date8);

//Задание 9
const date9 = new Date();
const newDate = new Date(date9.getFullYear(), date9.getMonth(), date9.getDate() + 73);
console.log(date9);
console.log(newDate);

//Задание 10
function formatDate(date) {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const time = date.toTimeString().split(' ')[0]; // Получаем только часы, минуты и секунды

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${time}`;
}
const now = new Date();
console.log(formatDate(now));