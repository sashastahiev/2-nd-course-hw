//Задание 1
function minNumber(a, b) {
    return a < b ? a : b;
}
console.log(minNumber(8, 4));
console.log(minNumber(6, 6));

//Задание 2
function checkEvenOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(5));

//Задание 3
function printSquare(n) {
    const square = n * n;
    console.log(square);
}
function returnSquare(n) {
    return n * n;
}
printSquare(3);
console.log(returnSquare(4));

//Задание 4
function askAge() {
    const age = prompt("Сколько вам лет?");
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}
askAge();

//Задание 5
function multiplyNumbers(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 'Одно или оба значения не являются числом';
    }
    return x * y;
}
console.log(multiplyNumbers(5, 3)); 
console.log(multiplyNumbers(5, "abc")); 

//Задание 6
function cubeNumber() {
    const input = prompt("Введите число:");
    const num = Number(input);
    
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }
    const cube = Math.pow(num, 3);
    return `${num} в кубе равняется ${cube}`;
}
console.log(cubeNumber());

//Задание 7
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Пример использования
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getArea()); 
console.log(circle1.getPerimeter()); 
console.log(circle2.getArea()); 
console.log(circle2.getPerimeter()); 