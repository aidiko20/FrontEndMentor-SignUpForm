const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstname = form['firstName'].value;
    const lastname = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstname === '') {
        addErrorTo('firstName', 'First Name is required')
    } else {
        removeErrorForm('firstName');
    }

    if (lastname === '') {
        addErrorTo('lastName', 'Last Name is required')
    } else {
        removeErrorForm('lastName');
    }

    if (email === '') {
        addErrorTo('email', 'Email Address is required')
    } else if (!isValid(email)) {
        addErrorTo('email', 'Email is not valid')
    } else {
        removeErrorForm('email');
    }

    if (password === '') {
        addErrorTo('password', 'Password is required')
    } else {
        removeErrorForm('password');
    }


    function addErrorTo(field, message) {
        const formControl = form[field].parentNode;
        formControl.classList.add('error');

        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    function removeErrorForm(field) {
        const formControl = form[field].parentNode;
        formControl.classList.remove('error');
    }

    function isValid(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

})