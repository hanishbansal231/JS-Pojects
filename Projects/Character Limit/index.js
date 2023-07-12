const inputBox = document.querySelector('.input-box');
const textArea = inputBox.querySelector('textarea');
const single = inputBox.querySelector('.singleNumber');
const h1Element = document.createElement('h1');
textArea.addEventListener('input', () => {
    let valLength = textArea.value.length;
    single.innerHTML = valLength;
    if (valLength > 0) inputBox.classList.add('active');
    else inputBox.classList.remove('active');
    if (valLength > 100) {
        inputBox.classList.add('error');
        h1Element.classList.add('heading');
        h1Element.innerHTML = 'Error Message Write Only 100 Word';
        inputBox.insertAdjacentElement("beforeend", h1Element);
    }
    else {
        inputBox.classList.remove('error');
        h1Element.remove();
    }
});