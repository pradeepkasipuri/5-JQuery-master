// hide & Show
let hideCount = 0;
$('#btn-1').click(function() {
    if(hideCount %2 === 0){
        $(this).text('SHOW');
        $('#card-1').hide(1000);
        hideCount++;
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show(1000);
        hideCount++;
    }
});

// hide & Show = Toggle
$('#btn-2').click(function() {
    ($(this).text() === 'HIDE')? $(this).text('SHOW') :  $(this).text('HIDE');
    $('#card-2').toggle(1000);
});

// fadeIn & fadeOut
let fadeCount = 0;
$('#btn-3').click(function() {
    if(fadeCount %2 === 0){
        $(this).text('FADEIN');
        $('#card-3').fadeOut(1000);
        fadeCount++;
    }
    else{
        $(this).text('FADEOUT');
        $('#card-3').fadeIn(1000);
        fadeCount++;
    }
});

// fadeOut & fadeIn = fadeToggle
$('#btn-4').click(function() {
    ($(this).text() === 'FADEOUT')? $(this).text('FADEIN') :  $(this).text('FADEOUT');
    $('#card-4').fadeToggle(1000);
});

// slideUp & slideDown
let slideCount = 0;
$('#btn-5').click(function() {
    if(slideCount %2 === 0){
        $(this).text('SLIDEDOWN');
        $('#card-5').slideUp(1000);
        slideCount++;
    }
    else{
        $(this).text('SLIDEUP');
        $('#card-5').slideDown(1000);
        slideCount++;
    }
});

// slideUp & slideDown = slideToggle
$('#btn-6').click(function() {
    ($(this).text() === 'SLIDEDOWN')? $(this).text('SLIDEUP') :  $(this).text('SLIDEDOWN');
    $('#card-6').slideToggle(1000);
});