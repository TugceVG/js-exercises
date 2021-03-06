window.addEventListener('DOMContentLoaded', function () {
    const buttons = document.getElementsByClassName('cell');
    const specialChars = ['ac', 'del', '='];
    const clearAllBtn = document.getElementById('clear-all-btn');
    const deleteBtn = document.getElementById('del');
    const display = document.querySelector('.display');

    clearAllBtn.addEventListener('click', clearAll);
    deleteBtn.addEventListener('click', deteleItem);

    function selection(buttons) {
        for (let i = 0; i < buttons.length; i++) {
            const key = buttons[i].innerHTML;
            const isKeyInList = specialChars.includes(key.toLowerCase());
            if (!isKeyInList) {
                buttons[i].addEventListener('click', function (e) {
                    display.innerHTML = display.innerHTML + key
                })
            }
        }
    }

    function deteleItem() {
        const displayToArray = display.innerHTML.split("");
        displayToArray.pop();
        let arrayToString = displayToArray.toString().replace(/\,/g, "");
        display.innerHTML = arrayToString;
    }

    function clearAll() {
        display.textContent = '';
    }

    selection(buttons);
});
