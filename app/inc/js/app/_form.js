function validateForm() {
    var
    formValid   = true,
    name        = _doc.forms.mailForm.name,
    email       = _doc.forms.mailForm.email,
    content     = _doc.forms.mailForm.content,
    emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    // Check Name
    if (name.value === null || name.value === "") {
        name.parentNode.classList.add('error');
        formValid = false;
    }else{
        name.parentNode.classList.remove('error');
    }

    // Check Email
    if (name.value === null || name.value === "" || !emailFilter.test(email.value)) {
        email.parentNode.classList.add('error');
        formValid = false;
    }else{
        email.parentNode.classList.remove('error');
    }

    // Check Content
    if (content.value === null || content.value === "") {
        content.parentNode.classList.add('error');
        formValid = false;
    }else{
        content.parentNode.classList.remove('error');
    }

    //Sending the email
    if(formValid){
        _win.open('mailto:aitorpalomares@gmail.com?subject=Web message from: '+ name.value +'&body=' + content.value);
    }
    return false;
}
