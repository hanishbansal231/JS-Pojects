const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');
async function jokeApi(){
  try{
    let response = await fetch(url);
    let data = await response.json();
    joke.innerHTML = data.joke;
    joke.classList.add('fade');
  }catch(err){
    console.log(err);
  }
}
jokeBtn.addEventListener('click', jokeApi);
jokeApi();