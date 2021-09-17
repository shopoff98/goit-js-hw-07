const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onTextRange);

function onTextRange(event) {
    let size = event.currentTarget.value;
    refs.text.style.fontSize = size + "px";

}