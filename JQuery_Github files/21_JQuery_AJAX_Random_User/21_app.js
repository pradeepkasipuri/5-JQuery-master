let theRow = $('#theRow');
let theButton = $('#get-user');
let contactsArray = [];

let callAJAX = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let contact = data.results[0];
            contactsArray.push(contact);
            displayCard(contact);
        }
    });
};

setInterval(callAJAX,1000);

theButton.click(function() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let contact = data.results[0];
            contactsArray.push(contact);
            displayCard(contact);
        }
    });
});

// display Card
let displayCard = (contact) => {
    let cardStr = `<div class="col-md-3">
                        <div class="card" id="t_card">
                            <div class="card-body text-center">
                                <img id="image1" src="${contact.picture.large}" class="img-fluid img-thumbnail w-50 rounded-circle">
                                <h4 id="card1_name" class="mt-2">${contact.name.first} ${contact.name.last}</h4>
                                <p id="dob1" class="lead text-muted">${contact.dob.age} Yrs</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur earum eligendi incidunt, labore sapiente.</p>
                                <div class="d-flex flex-row">
                                    <div class="p-4">
                                        <a href="#">
                                            <i class="fab fa-facebook-f fa-2x text-teal" ></i>
                                        </a>
                                    </div>
                                    <div class="p-4">
                                        <a href="#">
                                            <i class="fab fa-twitter fa-2x text-teal" ></i>
                                        </a>
                                    </div>
                                    <div class="p-4">
                                        <a href="https://github.com/thenaveensaggam" target="_blank">
                                            <i class="fab fa-github fa-2x text-teal" ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    theRow.append(cardStr);
};

// display The User Data
let displayUser = (contactArray) => {

};