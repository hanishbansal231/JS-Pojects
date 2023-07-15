const detectBox = document.querySelector('.container');
const codeBox = document.querySelector('.codeBox');
const keyName = document.querySelector('.keyName');
const key = document.querySelector('.key');
const code = document.querySelector('.code');
window.addEventListener('keydown', (e) => {
    const value = e.key === " " ? "Space" : e.key;
    detectBox.classList.add('active');
    codeBox.innerHTML = e.keyCode;
    keyName.innerHTML = value;
    key.innerHTML = `Key: ${value}`;
    code.innerHTML = `Code: ${e.keyCode}`;
    console.log(e);
});