// Яка кількість смиволів повинна бути в інпуті, зазначається в його 
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
    if (e.currentTarget.value.length !== Number(validationInput.dataset.length)) {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
};



