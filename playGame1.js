function startGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    let guessed = false;

    while (!guessed) {
        let userGuess = prompt("Угадайте число от 1 до 100:");

        // Проверка, ввел ли пользователь число
        if (userGuess === null) { // Если пользователь нажал "Отмена"
            alert("Игра завершена.");
            break;
        }

        userGuess = Number(userGuess); // Преобразуем в число

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Пожалуйста, введите число от 1 до 100.");
            continue; // Запрашиваем ввод снова
        }

        if (userGuess < randomNumber) {
            alert("Загаданное число больше.");
        } else if (userGuess > randomNumber) {
            alert("Загаданное число меньше.");
        } else {
            alert("Поздравляю! Вы угадали число: " + randomNumber);
            guessed = true; // Завершаем игру
        }
    }
};