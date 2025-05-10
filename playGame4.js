function startGame4() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let count = 0;
    quiz.forEach(q => {
        const userAnswer = prompt(`${q.question}\n${q.options.join('\n')}\nВаш ответ (введите номер варианта):`);
        if (userAnswer == q.correctAnswer) {
            count++;
        }
    });

    alert(`Вы дали ${count} правильных ответов из ${quiz.length}.`);
}