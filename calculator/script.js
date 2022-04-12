window.addEventListener('DOMContentLoaded', function () {

    const array = document.getElementsByClassName('cell');
    const array2 = ['c', '/', '*', 'del', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '.', '(', '0', ')', '='];
    const specialChars = ['c', 'del', '='];
    const c = document.getElementById('c');
    const del = document.getElementById('del');
    const display = document.querySelector('.display');

    c.addEventListener('click', clearAll)
    del.addEventListener('click', deteleItem)

    function selection(array) {
        for (let i = 0; i < array.length; i++) {
            const key = array[i].innerHTML;
            const isKeyInList = specialChars.includes(key.toLowerCase());
            if (!isKeyInList) {
                array[i].addEventListener('click', function (e) {
                    display.innerHTML = display.innerHTML + key
                })
            }
        }
    }
    function deteleItem() {

        const valueToArray = (display.innerHTML.split(""));
        valueToArray.pop();
        // valueToArray[valueToArray.length - 1] = '';
        let arrayToString = (valueToArray.toString()).replace(/\,/g, "");
        console.log(display.innerHTML = arrayToString);
    }
    function clearAll() {
        display.textContent = '0';
    }
    selection(array)
})




