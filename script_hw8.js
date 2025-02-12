//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age));

//Задание 2
function isPositive(item) {
    return item > 0;
}
function isMale(item) {
    return item.gender == 'male';
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i]))
            output.push(arr[i]);
    }
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive));
const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(people2, isMale));

//Задание 3
function lesson3(){
    console.log('Отсчет пошел...');
    let data = new Date();
    let threeSecond = 
    setInterval(() => {
        console.log(new Date());  
    },3000);
    setTimeout(() => {
        clearInterval(threeSecond); 
        console.log('30 секунд прошло');
    },30000);
}
lesson3();

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback,1000);
}

delayForSecond(function () {
   console.log(`Привет, Глеб!`);
})

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))
