$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const loggedInUser = urlParams.get('username');
    $('#loggedInUser').text(loggedInUser);

    function checkNumberFields() {
        const number1 = $('#number1').val();
        const number2 = $('#number2').val();

        let number1Valid = validateInputField(number1, $('#number1'));
        let number2Valid = validateInputField(number2, $('#number2'));

        const allFieldsValid = number1Valid && number2Valid;
        $('#add, #subtract, #multiply, #divide').prop('disabled', !allFieldsValid);
    }

    $('#number1, #number2').on('input', checkNumberFields);

    function validateInputField(value, inputField) {
        const numberRegex = /^\d+$/;
        if (value === '') {
            displayError(inputField, 'This field cannot be empty.');
            return false;
        } else if (!numberRegex.test(value)) {
            displayError(inputField, 'Please enter a valid number.');
            return false;
        } else if (!isFinite(value)) {
            displayError(inputField, 'Please enter a finite number.');
            return false;
        } else {
            clearError(inputField);
            return true;
        }
    }

    function displayError(inputField, errorMessage) {
        inputField.siblings('.error').text(errorMessage).css('color', 'red').show();
    }

    function clearError(inputField) {
        inputField.siblings('.error').text('').hide();
    }

    $('#add, #subtract, #multiply, #divide').on('click', function() {
        const operation = $(this).attr('id');
        calculate(operation);
    });

    const calculate = operation => {
        const num1 = parseFloat($('#number1').val());
        const num2 = parseFloat($('#number2').val());

        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
        }

        $('#result').val(result);
    };
});
