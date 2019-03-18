/*
    1) SMS App
    2) Enable Submit Button if file selected
    3) Show Password with check Box
    4) Change Images with button
    5) Display Triangle Strings with Text Box

 */

// SMS App
let charCount = 100;
$('#text-area').keyup(function() {
    $('#span').text(charCount - $(this).val().length);
});

// Show Password
let passwordBox = $('#password');
$('#check').change(function() {
    let theType = passwordBox.attr('type');
    (theType === 'password') ? passwordBox.attr('type','text') : passwordBox.attr('type','password');
});


