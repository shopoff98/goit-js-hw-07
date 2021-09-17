const refs = {
    input: document.querySelector(`#name-input`),
    output: document.querySelector(`#name-output`),

}
console.log(refs.output.textContent);

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
    if (event.currentTarget.value.length > 0) {
        refs.output.textContent = event.currentTarget.value
    }
    else {
        refs.output.textContent = 'незнакомец'
    }
}

