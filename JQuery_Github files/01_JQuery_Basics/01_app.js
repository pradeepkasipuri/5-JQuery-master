
// External Way
$('#green-btn').click(function() {
    ($(this).text() === 'HIDE')? $(this).text('SHOW') : $(this).text('HIDE');
    $('#green-card').toggle(1000);
});

// Form Using JQuery
$('#user').keyup(function() {
    $('#h2-tag').text($(this).val());
});