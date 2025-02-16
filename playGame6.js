function startGame6()
{
    const btng6 = document.querySelector('.games__mini__block__btn');
    const content = document.getElementById('change');
    const color = ['red','blue','green','pink','white','yellow','black','orange','purple','grey'];
    let index = Math.floor(Math.random()*10);
    content.style.backgroundColor = color[index];
}