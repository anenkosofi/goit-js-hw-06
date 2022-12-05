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
}
