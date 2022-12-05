const fontSizeControl = document.querySelector('#font-size-control');

const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInputChange);

function onInputChange(e) {
  textElement.style.fontSize = e.currentTarget.value + 'px';
}
