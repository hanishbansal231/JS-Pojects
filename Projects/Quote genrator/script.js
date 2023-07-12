const url = "https://api.quotable.io/random";
const quoteBtn = document.querySelector('.btn');
const quotePra =document.querySelector('.quote');
async function quote(){
   try{
    let res = await fetch(url);
    let data = await res.json();
    quotePra.innerHTML = data.content;
   }catch(err){
    console.log(err);
   }
}
quoteBtn.addEventListener('click', quote);
quote();