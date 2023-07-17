const accesskey = ''; // Use own acceesskey
const form = document.querySelector('.form');
const imageSearch = document.getElementById('imageSearch');
const resultBoxs = document.querySelector('.result-boxs');
const showMore = document.querySelector('.show-more');

let inputData = "";
let page = 1;

async function searchImage(){
    inputData = imageSearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response = await fetch(url);
    const data =  await response.json();
    const results = data.results;
    if(page === 1){
        resultBoxs.innerHTML = ""
    }
    results.map(result => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('result-box');
        const image = document.createElement('img');
        image.src = result.urls.small
        image.alt = result.alt_discription
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_discription;
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        resultBoxs.appendChild(imageWrapper)

    })
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMore.addEventListener('click', () => {
    searchImage();
})