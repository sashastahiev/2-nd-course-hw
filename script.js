let lesson = 8;

while(lesson != 0){
    lesson = Number(prompt('Введите номер задания'));
    switch(lesson){
        case 1:{
            let a = 10;
            alert(a);
            a = 20;
            alert(a);
            break;
        }
        case 2:{
            let yearPhone = 2007;
            alert(yearPhone);
            break;
        }
        case 3:{
            let name = 'Brendan';
            alert(name);
            break;
        }
        case 4:{
            let a = 10;
            let b = 2;
            alert('a = ' + a + ', b = ' + b +
                  '\nСумма: ' + (a+b) +
                  '\nРазность: ' + (a-b) +
                  '\nПроизведение: ' + (a*b) +
                  '\nДеление: ' + (a/b)
            );
            break;
        }
        case 5:{
            let a = 2;
            a **= 5;
            alert(a);
            break;
        }
        case 6:{
            let a = 9;
            let b = 2;
            alert(a%b);
            break;
        }
        case 7:{
            let num = 1;
            num += 5;
            num -= 3;
            num *= 7;
            num /= 3;
            num++;
            num--;
            alert(num);
            break;
        }
        case 8:{
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
            break;
        }
        case 9:{
            let user = {
                "name": 'Andrew',
                age: 25,
                isAdmin: true
            };
        }
        case 10:{
            let name = prompt('Введите ваше имя');
            let phrase = `Привет, ${name}!`;
            alert(phrase);
        }
     }
}