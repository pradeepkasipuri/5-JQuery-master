let employeeNameTag = $('#emp_name');
let empAgeTag = $('#emp_age');
let empDesgTag = $('#emp_desg');
let jobLocationTag = $('#job_location');
let tableBody = $('#table_body');

let employees = [];

$('#register').click(function() {
    let employee = {
        name : employeeNameTag.val(),
        age : empAgeTag.val(),
        designation : empDesgTag.val(),
        location : jobLocationTag.val()
    };
    employees.push(employee);
    clearFields();
    displayTableData(employees);
});

let clearFields = () => {
    employeeNameTag.val('');
    empAgeTag.val('');
};

// Display Table Data
let displayTableData = (employees) => {
    let count = 1;
    let tableRow = '';
    employees.forEach((employee) => {
        tableRow += `<tr>
                         <td>${count}</td>
                         <td>${employee.name}</td>
                         <td>${employee.age}</td>
                         <td>${employee.designation}</td>
                         <td>${employee.location}</td>
                     </tr>`;
        count++;
    });
    tableBody.empty().append(tableRow);
};