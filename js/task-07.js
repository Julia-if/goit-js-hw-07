const refs = {
    rangeInput: document.getElementById('font-size-control'),
    outPut: document.getElementById('text'),
};
refs.rangeInput.addEventListener('input', onInputChange);
function onInputChange(event) {
    
    refs.outPut.style.fontSize = `${event.target.valueAsNumber}px`;

}