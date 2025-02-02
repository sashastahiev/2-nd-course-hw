function generateTask() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomArbitrary(0, operators.length - 1)];
    const num1 = getRandomArbitrary(1, 20);
    const num2 = getRandomArbitrary(1, 20);
    let task;
    let answer;
    switch(operator) {
        case '+':
            task = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            task = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            task = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            answer = num1; 
            num1 = answer * num2;
            task = `${num1} / ${num2}`;
            break;
    }
    return { task, answer };
};
function startGame2() {
    const { task, answer } = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);
    if (parseFloat(userAnswer) === answer) {
        alert("Правильно! Ваш ответ верный.");
    } else {
        alert(`Неправильно. Правильный ответ: ${answer}.`);
    }
};

