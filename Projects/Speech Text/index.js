function speak() {
    try {
        const text = document.getElementById('text').value;
        const textSpeak = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(textSpeak);
    }catch(err){
        console.log(err);
    }
}