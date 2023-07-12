const url = 'https://meme-api.com/gimme/';
let subreddit = ["catmemes","dogmemes","me_irl","wholesomemes"];
function cardAppend(data) {
    let imageUrl = data.url;
    let title = data.title;
    let card = document.querySelector('.card');
    card.innerHTML = `<img src=${imageUrl} alt="MEME IMAGE" class="image"> <h3 class="title">${title}</h3><a href="#" class="btn">Get Meme</a>`;
    const memeBtn = document.querySelector('.btn');
    memeBtn.addEventListener('click',memeApi);
}
async function memeApi() {
    let randomSubreddit = subreddit[Math.floor(Math.random() * subreddit.length)];
    let finalUrl = url + randomSubreddit;
    let res = await fetch(finalUrl);
    let data = await res.json();
    cardAppend(data);
}
memeApi();