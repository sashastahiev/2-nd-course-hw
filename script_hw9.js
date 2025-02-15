//Задание 1
const header1 = document.querySelector('#headerone');
const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', () => {
    header1.classList.toggle('text');
});

//Задание 2
const paragraph = document.querySelector('#paragraph');
const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', () => {
        paragraph.style.color = 'blue';
});

//Задание 3
const header2 = document.querySelector('#header2');
const textButton = document.querySelector('#textButton');
    textButton.addEventListener('click', () => {
    header2.textContent = 'Привет, мир!';
});

//Задание 4
const descriptions4 = document.querySelectorAll('.description4');
descriptions4.forEach(desc => {
    desc.textContent = 'Измененный текст';
});

//Задание 5
const descriptions5 = document.querySelectorAll('.description5');
descriptions5.forEach(desc => {
    desc.textContent = 'Новый текст';
});

//Задание 6
document.getElementById('addButton').addEventListener('click', function() {
    const newParagraph = document.createElement('p'); 
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

//Задание 7
document.getElementById('removeButton').addEventListener('click', function() {
    const firstDescription = document.querySelector('.description7');
    if (firstDescription) {
        firstDescription.remove();
    } else 
        alert('Нет элементов с классом description7 для удаления.');
});