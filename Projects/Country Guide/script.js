const capital = document.querySelector('.capital');
const continent = document.querySelector('.continent');
const population = document.querySelector('.population');
const currency = document.querySelector('.currency');
const language = document.querySelector('.language');
const flagName = document.querySelector('.flagName');
const flagImage = document.querySelector('.flagImage');
const searchBtn = document.querySelector('.btn');
const search = document.getElementById('search');
const countryList = document.querySelector('.countryList');
const imageBox = document.querySelector('.imageBox');
async function countryApi() {
    try {

        let countryName = search.value;
        const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === 404) {
            alert("invalid country Name");
        } else {
            flagImage.src = data[0].flags.svg;
            flagName.innerHTML = data[0].name.common;
            capital.innerHTML = data[0].capital;
            continent.innerHTML = data[0].continents;
            population.innerHTML = data[0].population;
            currency.innerHTML = data[0].currencies[Object.keys(data[0].currencies)].name;
            language.innerHTML = Object.values(data[0].languages).toString().split(",").join(", ");
            countryList.classList.add('active');
            imageBox.classList.add('active');
        }
    } catch (err) {
        console.log(err.message);
    }
}
searchBtn.addEventListener('click', countryApi);