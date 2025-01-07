/* 1 задание */
let a = 10;
alert(a);
a = 20;
alert(a);
/* 2 задание */
let yearPhone = 2007;
alert(yearPhone);
/* 3 задание */
let name1 = 'Brendan';
alert(name1);
/* 4 задание */
let a1 = 10;
let b1 = 2;
alert('a = ' + a1 + ', b = ' + b1 +
      '\nСумма: ' + (a1+b1) +
      '\nРазность: ' + (a1-b1) +
      '\nПроизведение: ' + (a1*b1) +
      '\nДеление: ' + (a1/b1));
/* 5 задание */
let a2 = 2;
a2 **= 5;
alert(a2);
/* 6 задание */
let a3 = 9;
let b3 = 2;
alert(a3%b3);
/* 7 задание    */    
let num = 1;num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
/* 8 задание */
let age = Number(prompt('Сколько вам лет?'));
if (age){
    if (age == 1){
        alert('Вам ' + age + ' год');
    }
    else if (age % 10 < 5 && Math.abs(12 - age) > 2){
        alert('Вам ' + age + ' года');
    }
    else{
        alert('Вам ' + age + ' лет');
    }
}
/* 9 задание */
let user = {
    "name": 'Andrew',
    age: 25,
    isAdmin: true
};
/* 10 задание */
let name = prompt('Введите ваше имя');
let phrase = `Привет, ${name}!`;
alert(phrase);