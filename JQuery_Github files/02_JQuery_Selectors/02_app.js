/*
    1) Tag Selector
    2) Class Selector
    3) Id Selector
    4) Attribute Selector

 */

// Tag
$('#orange').click(function() {
    $(this).css({
        color : 'white',
        'background-color':'orange',
         padding : '10px',
        'font-size':'20px',
        'box-shadow':'0 0 10px black'
    });
});

// Attribute Selectors
let inputTag = $('input[type="text"]');
inputTag.focus(function() {
    $(this).css({
        'background-color':'lightblue'
    });
}).blur(function() {
    $(this).css({
        'background-color':'white'
    });
});
