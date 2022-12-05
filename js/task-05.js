const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(e) {
  outputName.textContent = e.currentTarget.value ? e.currentTarget.value : 'Anonymous';
}
