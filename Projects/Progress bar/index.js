const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let currentIndex = 1;
next.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex > circles.length){
        currentIndex = circles.length;
    }
    update();
});
prev.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 1){
        currentIndex = 1;
    }
    update();
});
const update = () => {
    console.log(currentIndex)
    circles.forEach((circle,idx) => {
        if(idx < currentIndex) circle.classList.add('active');
        else circle.classList.remove('active');
        const activeIndex = document.querySelectorAll('.active');
        const progress = document.querySelector('.progress');
        progress.style.width = (activeIndex.length - 1) / (circles.length - 1) * 100 + '%';
    });
}