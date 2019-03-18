let imageGalleryDiv = document.querySelector('#image-gallery-div');

// JavaScript way
let getAJAX = () => {

    // Create AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the Request
    http.open('GET','https://api.myjson.com/bins/xx8gw',true);

    // send the Request
    http.send();

    // Handle the request
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            processData(http.responseText);
        }
    };
};

// process Data
let processData = (data) => {
    let contactsArray = JSON.parse(data).contacts;
    displayImages(contactsArray);
};

// display Images
let displayImages = (contactsArray) => {
    let imageTag = '';
    contactsArray.forEach((contact) => {
        imageTag += `<img src="${contact.picture.large}"> \n`;
    });
    imageGalleryDiv.innerHTML = imageTag;
};




