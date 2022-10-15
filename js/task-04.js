// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення 
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

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

