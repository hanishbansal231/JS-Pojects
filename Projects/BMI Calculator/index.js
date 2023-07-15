const form = document.querySelector('.form');
form.addEventListener('submit', calculateBMI);
function calculateBMI(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    if (height == ' ' || height < 0 || isNaN(height)) { alert(`Please give a valid height ${height}`); }
    else if (weight == ' ' || weight < 0 || isNaN(weight)) { alert(`Please give a valid weight ${weight}`); }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = bmi;
    }
};