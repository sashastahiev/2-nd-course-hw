//Задание 1
const array1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) {
        break;
    }
}

//Задание 2
const array2 = [1, 5, 4, 10, 0, 3];
const indexOfFour = array2.indexOf(4);
console.log(indexOfFour);

//Задание 3
const array3 = [1, 3, 5, 10, 20];
const result = array3.join(' ');
console.log(result);

//Задание 4
const array4 = [];
for (let i = 0; i < 3; i++) {
    const innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    array4.push(innerArray);
}
console.log(array4);

//Задание 5
const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

//Задание 6
const array6 = [9, 8, 7, 'a', 6, 5];
const sorted = array6.sort();
const filtered = sorted.filter(item => !isNaN(item)); // Удаляем букву 'a'
console.log(filtered);

//Задание 7
const array7 = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число:");
if (array7.includes(Number(userInput))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//Задание 8 
const str = 'abcdef';
let reversed = str.split('');
reversed = reversed.reverse();
reversed = reversed.join('');
console.log(reversed);

//Задание 9
const array9 = [[1, 2, 3], [4, 5, 6]];
const flattened = array9.flat();
console.log(flattened);

//Задание 10
const array10 = [1, 2, 3, 4, 5];
for (let i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1]);
}

//Задание 11
function square(array11) {
    return array11.map(num => num * num);
}

//Задание 12
function wordLength(arr) {
    return arr.map(word => word.length);
}

//Задание 13
function negative(arr) {
    return arr.filter(num => num < 0);
}

//Задание 14
let array14 = new Array(10);
for(let i = 0; i < 10; i++){
    array14[i] = Math.floor(Math.random()*10);
}
const NewArray = array14.filter(num => num % 2 === 0);
console.log("Исходный массив:", array14);
console.log("Четные значения:", NewArray);

//Задание 15
let array15 = new Array(10);
for(let i = 0; i < 10; i++){
    array15[i] = Math.floor(Math.random()*10);
}
const average = array15.reduce((acc, num) => acc + num, 0) / array15.length;
console.log("Массив:", array15);
console.log("Среднее арифметическое:", average);