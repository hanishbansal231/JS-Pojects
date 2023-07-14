document.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password');
    const icon = document.querySelector('.icon');
    const listIcon = document.querySelectorAll('.lists li');

    const requirements = [
        { regex: /.{8,}/, index: 0 }, // minimum 8 characters
        { regex: /[0-9]/, index: 1 }, // At least one number
        { regex: /[a-z]/, index: 2 }, // At least one lower character
        { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
        { regex: /[A-Z]/, index: 4 }, // At least one upper character
    ];
    password.addEventListener('input', (e) => {
        e.preventDefault();
        requirements.forEach((item) => {
            let isValid = item.regex.test(e.target.value);
            const reqItem = listIcon[item.index];
            if (isValid) {
                reqItem.firstElementChild.innerHTML = '<ion-icon name="checkmark-sharp"></ion-icon>';
                reqItem.firstElementChild.classList.add('active');
            } else {
                reqItem.firstElementChild.innerHTML = '<ion-icon name="close"></ion-icon>';
                reqItem.firstElementChild.classList.remove('active');

            }
        })
    });
    icon.addEventListener('click', () => {
        if (password.type == 'password') {
            password.type = 'text';
            icon.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
        } else {
            password.type = 'password';
            icon.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
        }
    });
});