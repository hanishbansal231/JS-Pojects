let url = 'https://random-data-api.com/api/v2/users?';
let imageCont = document.querySelector('.imageCont');
let detailCont = document.querySelector('.detailCont');
let btn = document.querySelector('.btn');
async function randomUser(){
    let res = await fetch(url);
    let data = await res.json();
    imageCont.innerHTML = `<img src=${data.avatar} class="image"/>`;
    detailCont.innerHTML = `<h1>${data.first_name} ${data.last_name}</h1><h2>${data.employment.title}</h2><p><i class="ri-map-pin-fill"></i> ${data.address.city}</p>`
    let randomColor = '#' + ((Math.random() * 0Xffffff) << 0).toString(16).padStart(6,"0");
    document.documentElement.style.setProperty("--theme-color",randomColor);
}
btn.addEventListener('click',randomUser);
randomUser();