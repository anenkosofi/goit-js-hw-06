// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія 
//     input), підставляє його поточне значення в span#name - output.Якщо інпут
// порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(e) { 
    outputName.textContent =
        e.currentTarget.value ? e.currentTarget.value : 'Anonymous';
}