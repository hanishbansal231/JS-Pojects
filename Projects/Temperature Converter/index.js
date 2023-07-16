const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('input', () => {
    if (isNaN(celsius.value)) {
        alert('Invalid celcius value');
        celsius.value = ' ';
        return;
    }
    fahrenheit.value = ((celsius.value * 9 / 5) + 32).toFixed(2);
});
fahrenheit.addEventListener('input', () => {
    if (isNaN(fahrenheit.value)) {
        alert('Invalid fahrenheit value');
        fahrenheit.value = ' ';
        return;
    }
    celsius.value = ((fahrenheit.value - 32) * 5 / 9).toFixed(2);
});