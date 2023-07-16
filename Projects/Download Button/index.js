const button = document.querySelector('.box');
const data = document.querySelector('.data');
const icon = document.querySelector('.icon');
button.addEventListener('click', function(){
    button.classList.add('active');
    setTimeout(() => {
        data.innerHTML = 'Complete';
        icon.attributes.name.textContent = "checkmark-circle-outline";
        button.classList.remove('active');
    },6000);
});