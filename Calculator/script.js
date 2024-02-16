document.addEventListener("DOMContentLoaded", function () {
    // Get the display element
    var display = document.querySelector('input[name="display"]');

    // Get all calculator buttons
    var buttons = document.querySelectorAll('input[type="button"]');

    // Add click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button.value);
        });
    });

    // Function to handle button click
    function handleButtonClick(value) {
        switch (value) {
            case 'AC':
                display.value = '';
                break;
            case 'DE':
                display.value = display.value.toString().slice(0, -1);
                break;
            case '=':
                display.value = eval(display.value);
                break;
            default:
                display.value += value;
        }
    }
});
