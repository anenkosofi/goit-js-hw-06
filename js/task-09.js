function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor(e) {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  colorName.textContent = randomHexColor;
}
