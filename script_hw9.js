//Задание 1
/*
<h1 id="header1">Привет, мир!</h1>
<button id="toggleButton">Скрыть</button>
*/
const header1 = document.querySelector('#header1');
const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    if (header1.style.display === 'none') {
        header1.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
    } else {
        header1.style.display = 'none';
        toggleButton.textContent = 'Показать';
    }
});

//Задание 2
/*
<p id="paragraph">Текст абзаца</p>
<button id="colorButton">Изменить цвет</button>
*/
const paragraph = document.querySelector('#paragraph');
const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', () => {
        paragraph.style.color = 'blue';
});

//Задание 3
/*
<h1 id="header2">Старый текст</h1>
<button id="textButton">Изменить текст</button>
*/
const header2 = document.querySelector('#header2');
const textButton = document.querySelector('#textButton');
    textButton.addEventListener('click', () => {
    header2.textContent = 'Привет, мир!';
});

//Задание 4
/*
<p class="description4">Описание 1</p>
    <p class="description4">Описание 2</p>
    <p>Не описание</p>
    <p class="description4">Описание 3</p>
*/
const descriptions4 = document.querySelectorAll('.description4');
descriptions4.forEach(desc => {
    desc.textContent = 'Измененный текст';
});

//Задание 5
/*
<p class="description5">Описание 1</p>
    <p>Не описание</p>
    <p class="description5">Описание 2</p>
    <p>Еще один абзац</p>
*/
const descriptions5 = document.querySelectorAll('.description5');
descriptions5.forEach(desc => {
    desc.textContent = 'Новый текст';
});

//Задание 6
/*<button id="addButton">Добавить элемент</button>
*/
document.getElementById('addButton').addEventListener('click', function() {
    const newParagraph = document.createElement('p'); 
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

//Задание 7
/*
<button id="removeButton">Удалить элемент</button>
<p class="description7">Первый абзац с классом description7.</p>
<p>Обычный абзац.</p>
<p class="description7">Второй абзац с классом description7.</p>
<p>Еще один обычный абзац.</p>
*/
document.getElementById('removeButton').addEventListener('click', function() {
    const firstDescription = document.querySelector('.description7');
    if (firstDescription) {
        firstDescription.remove();
    } else 
        alert('Нет элементов с классом description7 для удаления.');
});