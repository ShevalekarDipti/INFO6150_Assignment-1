$(document).ready(function() {
  function validateEmail(email) {
    return email.includes("@northeastern.edu");
  }

  function validateUsername(username) {
    const regex = /^[a-zA-Z0-9]{8,}$/;
    return regex.test(username);
  }

  function validatePassword(password) {
    const uppercaseRegex = /[A-Z]/;
    const specialCharacterRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
    return (
      password.length >= 10 &&
      uppercaseRegex.test(password) &&
      specialCharacterRegex.test(password)
    );
  }

  function validateConfirmPassword(confirmPassword, password) {
    return confirmPassword === password;
  }

  function displayError(inputField, errorMessage) {
    inputField.siblings('.error').text(errorMessage).css('color', 'red').show();
  }

  function clearError(inputField) {
    inputField.siblings('.error').text('').hide();
  }

  function enableLoginButton() {
    const email = $('#email').val();
    const username = $('#username').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    const isEmailValid = validateEmail(email);
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword, password);

    if (isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid) {
      $('#loginButton').prop('disabled', false);
    } else {
      $('#loginButton').prop('disabled', true);
    }
  }

  $('#email').on('input', function() {
    const email = $(this).val();
    if (!validateEmail(email)) {
      displayError($(this), 'Please enter a valid northeastern email.');
    } else {
      clearError($(this));
      enableLoginButton();
    }
  });

  $('#username').on('input', function() {
    const username = $(this).val();
    if (!validateUsername(username)) {
      displayError($(this), 'Username size should be at least 8 & should not contain any special characters.');
    } else {
      clearError($(this));
      enableLoginButton();
    }
  });

  $('#password').on('input', function() {
    const password = $(this).val();
    if (!validatePassword(password)) {
      displayError($(this), 'Password size should be at least 10, contain at least one uppercase letter & one special character.');
    } else {
      clearError($(this));
      enableLoginButton();
    }
  });

  $('#confirmPassword').on('input', function() {
    const confirmPassword = $(this).val();
    const password = $('#password').val();
    if (confirmPassword !== password) {
      displayError($(this), 'Password doesnt match.');
    } else {
      clearError($(this));
      enableLoginButton();
    }
  });

  $('#log-in-Form').submit(function(event) {
    event.preventDefault();
    const username = $('#username').val();
    window.location.href = `SecondPage.html?username=${username}`;
  });
});
