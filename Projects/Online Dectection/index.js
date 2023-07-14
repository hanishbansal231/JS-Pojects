document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.cross-icon');
    const Checkbox = document.querySelector('.Checkbox');
    const heading = document.querySelector('.heading');
    const para = document.querySelector('.para');
    const wifiIcone = document.querySelector('.check-icon');
    function slideEffect() {
        Checkbox.classList.remove('active');
    }
    async function getData() {
        const response = navigator.onLine;
        return response;
    }
    async function onlineCheck() {
        const response = await getData();
        if (response) {
            Checkbox.classList.add('active');
            heading.textContent = "You're online now";
            para.textContent = "Hurray! Internet is connected.";
            wifiIcone.innerHTML = '<ion-icon name="wifi"></ion-icon>';
            wifiIcone.style.backgroundColor = '#0f0';
            wifiIcone.style.color = '#fff';
        }
    }
    async function offlineCheck() {
        const response = await getData();;
        if (!response) {
            Checkbox.classList.add('active');
            heading.textContent = "You're offline now";
            para.textContent = "Opps! Internet is disconnected.";
            wifiIcone.innerHTML = '<ion-icon name="cloud-offline"></ion-icon>';
            wifiIcone.style.backgroundColor = '#eceaea';
            wifiIcone.style.color = '#555';
        }
    }
    onlineCheck();
    closeBtn.addEventListener('click', slideEffect);
    window.addEventListener('online', onlineCheck);
    window.addEventListener('offline', offlineCheck);
});