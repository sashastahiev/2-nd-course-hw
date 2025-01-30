// Генерируем случайное число от 1 до 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Счетчик попыток
let guessed = false; // Флаг для отслеживания статуса игры

console.log("Угадайте число от 1 до 100. Для выхода введите 'exit'.");

// Функция для проверки введенного числа
function guessNumber() {
    const userInput = prompt("Введите ваше число:");

    // Проверяем, вводит ли пользователь команду выхода
    if (userInput.toLowerCase() === 'exit') {
        console.log("Вы вышли из игры.");
        return;
    }

    const userGuess = parseInt(userInput, 10);
    attempts++; // Увеличиваем число попыток

    // Проверяем, является ли введённое значение числом
    if (isNaN(userGuess)) {
        console.log("Пожалуйста, введите допустимое число.");
    } else if (userGuess < 1 || userGuess > 100) {
        console.log("Число должно быть в диапазоне от 1 до 100.");
    } else if (userGuess < randomNumber) {
        console.log("Слишком мало! Попробуйте снова.");
    } else if (userGuess > randomNumber) {
        console.log("Слишком много! Попробуйте снова.");
    } else {
        console.log(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
        guessed = true; // Устанавливаем флаг, что число угадано
    }

    // Если число не угадано, вызываем функцию снова
    if (!guessed) {
        guessNumber();
    }
}

// Начинаем игру
guessNumber();