function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startGame2() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    let task;
    let answer;
    switch(operator) {
        case '+':
            {
            task = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
            }
        case '-':
            {
            task = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
            }
        case '*':
            {
            task = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
            }
        case '/':
            {
            answer = num1; 
            num1 = answer * num2;
            task = `${num1} / ${num2}`;
            break;
            }
    }
    const userAnswer = prompt(`Решите задачу: ${task}`);
    if (parseFloat(userAnswer) === answer) {
        alert("Правильно! Ваш ответ верный.");
    } else {
        alert(`Неправильно. Правильный ответ: ${answer}.`);
    }
};
