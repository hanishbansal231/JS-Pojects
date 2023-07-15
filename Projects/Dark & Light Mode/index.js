const button = document.querySelector('#btn');
const label = document.querySelector('.label');
const body = document.getElementsByTagName('body')[0];
button.addEventListener('click', function(e){
    label.classList.toggle('active');
    if(label.classList.contains('active')){
        body.classList.add('dark');
    }else{
        body.classList.remove('dark');
    }
});