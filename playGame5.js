function startGame5(){
    let gestures = ['Камень','Ножницы','Бумага'];
    gesturesVariant = gestures.map((item, index) => {return `${index + 1}. ${item}`});
    let indicator = false;
    let userСhoice;
    userСhoice = prompt(`Выберите номер комбинации: \n${gesturesVariant.join('\n')}`);
    do {
        if (userСhoice === null){
            alert('Игра завершена.');
            indicator = true;
        }
        else if (userСhoice - 1 >= 0 && userСhoice - 1 < 3 && Number.isInteger(userСhoice - 1)){
            indicator = true;
            userСhoice--;
            let compChoice = Math.round(Math.random()*10) % 3;
            if (userСhoice - compChoice == -1 || userСhoice - compChoice == 2){
                alert(`Вы победили: ${gestures[userСhoice]} бьет ${gestures[compChoice]}`)
            }
            else if (userСhoice == compChoice){
                alert(`Ничья: ${gestures[userСhoice]} и ${gestures[compChoice]}`);
            }
            else {
                alert(`Вы проиграли: ${gestures[userСhoice]} не бьет ${gestures[compChoice]}`);        
            }
        }
        else{
            userСhoice = prompt(`Выберите номер комбинации: \n${gesturesVariant.join('\n')}`);
        }
    } while (!indicator)
}