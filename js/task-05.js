const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


const onInputValue = (event) => {
    let value = inputRef.value;
    (value === "")?
        outputRef.textContent = "незнакомец"
    :
        outputRef.textContent = value;
    
};


inputRef.addEventListener('input', onInputValue);