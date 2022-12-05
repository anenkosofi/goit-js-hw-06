function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer = document.querySelector('#boxes');
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  let boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = 10 * i + 30 + 'px';
    box.style.height = 10 * i + 30 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  return boxes;
}

createBtn.addEventListener('click', onButtonCreateBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function onButtonCreateBoxes() {
  const elements = createBoxes(Number(inputNumber.value));
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  inputNumber.value = '';
}
