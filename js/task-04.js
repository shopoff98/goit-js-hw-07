let counterPoint = document.querySelector(`#value`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
let counterValue = 0;


decrementBtn.addEventListener(`click`, onValueDecrement);
incrementBtn.addEventListener(`click`, onValueIncrement);

function onValueIncrement(event) {
counterValue += 1;
counterPoint.textContent = counterValue;
};

function onValueDecrement(event) {
    counterValue -= 1;
    counterPoint.textContent = counterValue;
};
