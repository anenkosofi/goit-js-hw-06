// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія 
//     input) і змінює інлайн - стиль span#text, оновлюючи властивість font -
//     size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector('#font-size-control');

const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInputChange);

function onInputChange(e) {
    textElement.style.fontSize = e.currentTarget.value + 'px';
}