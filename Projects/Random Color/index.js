const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const body = document.querySelector('body');
const codeName = document.querySelector('.codeName');
let inValid;
startButton.addEventListener('click', () =>{
    inValid = setInterval(() => {
        let Hex = '0123456789ABCDEFF';
        let color = '#';
        for(let i = 0;i < 6;i++){
            color += Hex[Math.floor(Math.random() * 16)];
        }
        body.style.backgroundColor = color;
        codeName.innerHTML = color;
    },1000);
    codeName.style.color = "#ffffff";
});
stopButton.addEventListener('click', () => {
    clearInterval(inValid);
    body.style.backgroundColor = "#ffffff";
    codeName.innerHTML = "#ffffff";
    codeName.style.color = "#000000";
});

