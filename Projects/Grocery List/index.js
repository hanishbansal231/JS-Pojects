const form = document.querySelector('.form');
const groceryList = (e) => {
    e.preventDefault();
    const item = document.querySelector('#item');
    const ol = document.querySelector('ol');
    let li = document.createElement('li');
    let p = document.createElement('p');
    let result = item.value;
    if (result == " ") {
        alert("Please enter the value");
        return;
    }
    li.innerHTML = '<ion-icon name="remove-outline" class="deleteIcon"></ion-icon>';
    p.textContent = result;
    li.appendChild(p);
    ol.appendChild(li);
    item.value = ' ';
    const deleteIcons = document.querySelectorAll('.deleteIcon');
    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener('click', () => {
            const listItem = deleteIcon.parentNode;
            listItem.remove();
        });
    });
    p.addEventListener('click', () => {
        li.classList.toggle('done');
    });
}
form.addEventListener('submit', groceryList);