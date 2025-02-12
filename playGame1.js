function startGame1() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessed = false;

    while (!guessed) {
        let userGuess = prompt("Угадайте число от 1 до 100:");
        if (userGuess === null) { 
            alert("Игра завершена.");
            break;
        }
        userGuess = Number(userGuess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Пожалуйста, введите число от 1 до 100.");
            continue; 
        }
        if (userGuess < randomNumber) {
            alert("Загаданное число больше.");
        } else if (userGuess > randomNumber) {
            alert("Загаданное число меньше.");
        } else {
            alert("Поздравляю! Вы угадали число: " + randomNumber);
            guessed = true;
        }
    }
};
