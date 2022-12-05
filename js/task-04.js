let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

refs.btnDecrement.addEventListener('click', onButtonDecrease);

refs.btnIncrement.addEventListener('click', onButtonIncrease);

function onButtonDecrease(e) {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onButtonIncrease(e) {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
