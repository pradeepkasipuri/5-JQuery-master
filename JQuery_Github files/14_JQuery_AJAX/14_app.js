$('#load-images-btn').click(function() {

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
    contactsArray.forEach((contact) => {
        let imageAddress = contact.picture.large;
        let fullName = `${contact.name.first} ${contact.name.last}`;
        $(`${imageSelection}${count}`).attr('src',imageAddress);
        $(`${imageSelection}${count}${nameSelection}`).text(fullName);
        count++;
    });
};