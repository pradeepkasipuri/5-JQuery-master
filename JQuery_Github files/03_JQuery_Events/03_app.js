// Click Event
$('#blue-btn').click(function() {
    $(this).removeClass('btn-primary').addClass('btn-danger');
});


// DBLClick Event
$('#red-btn').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-primary');
});

// Toggle Button
let count = 0;
$('#green-btn').click(function() {
    if(count % 2 === 0){
        $(this).removeClass('btn-success').addClass('btn-danger').text('DELETE');
        count++;
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-success').text('REGISTER');
        count++;
    }
});


// Modal Display
$('#dark-btn').hover(function() {
    $('#light-modal').modal('show');
});