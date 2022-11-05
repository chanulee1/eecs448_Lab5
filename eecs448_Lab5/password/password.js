function handleClick() {
    var pass1Text = document.getElementById("pass1").value;
    var pass2Text = document.getElementById("pass2").value;
    console.log(pass1Text, pass2Text)
    if (pass1Text != pass2Text) {
        alert('Passwords do not match.');
    } else if (pass1Text.length < 8 || pass2Text.length < 8) {
        alert('Password is not at least 8 characters long.');
    } else {
        alert('Valid!')
    }
};