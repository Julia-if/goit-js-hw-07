const inputArea = document.querySelector('#validation-input');
inputArea.addEventListener('blur', inValidArea);

function inValidArea () {
    let inputLength = inputArea.dataset.length;
    let value = inputArea.value;    
    let inputLengthNumber = Number(inputLength);
    
    if (inputLengthNumber === value.length) {
        inputArea.classList.remove('invalid');
        inputArea.classList.add('valid');
    } else {
        inputArea.classList.remove('valid');
        inputArea.classList.add('invalid')
    }
};
