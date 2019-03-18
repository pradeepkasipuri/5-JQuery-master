let tableBody = $('#table-body');

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        url : 'https://gist.githubusercontent.com/KallaSaikumar/cc6451c90ddbd947cd9a99f9cbf63040/raw/6dd3773e3aee56da051641b3c9e4e6b6e1ebec27/employee.json',
        method : 'GET',
        success : function(data) {
            processData(data);
        }
    });
});

// Javascript AJAX
$('#js-ajax').click(function () {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://gist.githubusercontent.com/KallaSaikumar/cc6451c90ddbd947cd9a99f9cbf63040/raw/6dd3773e3aee56da051641b3c9e4e6b6e1ebec27/employee.json');

    // Send the Request
    http.send();

    // if Server is ready with response
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
                processData(theData);
        }
    };
});

// Process the data
let processData = (theData) => {
    let employees = JSON.parse(theData);
    displayEmployees(employees);
};

// display Employees
let displayEmployees = (employees) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.contry}</td>
                        <td>${employee.state}</td>
                        <td>${employee.city}</td>
                      </tr>`;
    });
    tableBody.empty().append(tableRows);
};