const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const button = document.querySelector('.btn');
const Box = document.querySelector('.Box');
const sound = document.querySelector('.sound');
async function dictionaryApi() {
    try {
        const search = document.querySelector('#word');
        let finalUrl = `${url}${search.value}`;
        let res = await fetch(finalUrl);
        if(!res.ok){
            throw new Error('Unable to fetch data from the API');
        }
            let data = await res.json();
            console.log(data[0]);
            Box.innerHTML = `
            <div class="contant">
                <div class="meaningBox">
                    <h3 class="name">${data[0].word}</h3>
                    <button class="btn" onclick="playAudio()"><i class="ri-volume-up-fill"></i></button>
                </div>
                <span>${data[0].meanings[0].partOfSpeech}</span>
                <span>${data[0].phonetic}</span>
                <p class="definition">${data[0].meanings[0].definitions[0].definition}</p>
                <h4 class="example">${data[0].meanings[0].definitions[0].example || " "}</h4>
            </div>`;
            sound.src = `https:${data[0].phonetics[0].audio}`;
            console.log(sound);
    } catch (err) {
        console.log(err);
    }
}
function playAudio(){
    sound.play();
}
button.addEventListener('click', dictionaryApi);