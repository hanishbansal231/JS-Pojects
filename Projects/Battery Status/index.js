const chargeLevel = document.querySelector('.charge-level');
const charge = document.querySelector('.charge');
const batteryHeading = document.querySelector('.batteryHeading');
async function batteryStatus() {
    try {
        let response = await navigator.getBattery();
        if (!response) {
            alert("Browser does not support battery status");
            return;
        }
        function allActive() {
            batteyLevelCheck();
            checkCharging();
        }
        allActive();
        response.addEventListener('chargingchange', () => {
            checkCharging();
        });
        response.addEventListener('levelchange', () => {
            batteyLevelCheck();
        });
        function checkCharging() {
            if (response.charging) {
                batteryHeading.innerHTML = "Charging: " + response.charging;
            } else {
                batteryHeading.innerHTML = "Not Charging: " + response.charging;
                if (parseInt(response.dischargingTime)) {
                    let hr = parseInt(response.dischargingTime / 3600);
                    let min = parseInt(response.dischargingTime / - 60 - hr * 60);
                    console.log(`${hr}hr ${min}mins remaining`);
                }
            }
        }
        response.addEventListener('', () => {
            checkCharging();
        });
        function batteyLevelCheck() {
            let batteryLevel = (response.level * 100);
            chargeLevel.innerHTML = `${batteryLevel}%`;
            charge.style.width = `${batteryLevel}%`;
        }
    } catch (err) {
        console.log('Error', err);
    }
}
batteryStatus();