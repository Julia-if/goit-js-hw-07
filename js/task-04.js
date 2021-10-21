const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const startValue = document.querySelector('#value');


let currentValue = 0;
const decrement = (e) => 
    startValue.textContent = currentValue -= 1;

const increment = () => 
     startValue.textContent= currentValue +=1;

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);




