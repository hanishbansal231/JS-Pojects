const yearResult = document.querySelector('.yearResult');
const monthResult = document.querySelector('.monthResult');
const dayResult = document.querySelector('.dayResult');
const error = document.querySelectorAll('.error');
const form = document.querySelector('.form');
const erroMessage = ["Must be valid day","Must be valid month","Must be valid year"];
function calculateAge(e) {
    e.preventDefault();
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    let date = new Date();
    let yearCurrent = date.getFullYear();
    let monthCurrent = date.getMonth() + 1;
    let dayCurrent = date.getDate();
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(day.value == '' || month.value == '' || year.value == ''){
        form.classList.add('active');
        return;
    }
    if (day.value > dayCurrent) {
        dayCurrent += months[monthCurrent - 1];
        monthCurrent -= 1;
    }
    if (month.value > monthCurrent) {
        monthCurrent += 12;
        yearCurrent -= 1;
    }
    let resultYear = yearCurrent - year.value;
    let resultMonth = monthCurrent - month.value;
    let resultDay = dayCurrent - day.value;
    if(day.value > 31 || month.value > 12 || year.value > yearCurrent){
        erroMessage.forEach((err,idx) => {
            error[idx].textContent = err;
        })
        form.classList.add('active');
        return;
    }else{
        form.classList.remove('active');
        yearResult.textContent = resultYear;
        monthResult.textContent = resultMonth;
        dayResult.textContent = resultDay + 1;
    }
}

form.addEventListener('submit',calculateAge);

