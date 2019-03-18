$('#load-ajax-btn').click(function() {

    // JQuery AJAX
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/xx8gw',
        success : function (data) {
            displayImages(data.contacts);
        }
    });

});

// Display Images
let displayImages = (contactsArray) => {
    let count = 1;
    let imageSelection = '#image';
    let nameSelection = '_name';
    let cardSelection = '#card';
    contactsArray.forEach((contact) => {
        let imageAddress = contact.picture.large;
        let fullName = `${contact.name.first} ${contact.name.last}`;
        let dateOfBirth = `${contact.dob}`;
        // $('#image1)
        $(`${imageSelection}${count}`).attr('src',imageAddress);
        // $('#image1_name)
        $(`${cardSelection}${count}${nameSelection}`).text(fullName);
        // $('#dob1)
        $(`#dob${count}`).text(dateOfBirth);
        count++;
    });
};