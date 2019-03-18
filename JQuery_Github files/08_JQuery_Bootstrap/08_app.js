// Get the HTML elements
let cardHeader = $('#form-card-header');
let cardTitle = $('#card-title');
let submitButton = $('#submit-button');

// Login Button
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardTitle.text('Login Here');
    submitButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login');
});

// Register Button
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    cardTitle.text('Register Here');
    submitButton.removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning').text('Register');
});

// Signup Button
$('#signup-button').click(function() {
    cardHeader.removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    cardTitle.text('Signup Here');
    submitButton.removeClass('btn-warning').removeClass('btn-success').addClass('btn-teal').text('Signup');
});