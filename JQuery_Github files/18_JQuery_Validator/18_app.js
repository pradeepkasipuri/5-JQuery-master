$.validator.setDefaults( {
    submitHandler: function () {
        $('#modal').modal('show');
    }
} );
// JQuery Validation
$('#register-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength: 5
        },
        lastname : {
            required : true,
            minlength: 5
        },
        username : {
            required : true,
            minlength: 5
        },
        email : {
            required : true,
            email : true
        },
        password : {
            required : true,
            minlength: 5
        },
        c_password : {
            required : true,
            minlength: 5,
            equalTo : '#password'
        },
        terms : {
            required : true,
        }
    },
    messages : {
        firstname : {
            required : 'Please enter a First Name',
            minlength: 'First Name should be min 5 letters'
        },
        lastname : {
            required : 'Please enter a LastName',
            minlength: 'Last Name should be min 5 letters'
        },
        username : {
            required : 'Please enter a User Name',
            minlength: 'User Name should be min 5 letters'
        },
        email : {
            required : 'Please enter an email',
            email: 'Please enter a proper email'
        },
        password : {
            required : 'Please enter a Password',
            minlength: 'Password should be min 5 letters'
        },
        c_password : {
            required : 'Please enter a Confirm Password',
            minlength: 'Confirm Password should be min 5 letters',
            equalTo : 'Both passwords are not Matched'
        },
        terms : {
            required : 'Please accept the Terms & Conditions',
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }

});