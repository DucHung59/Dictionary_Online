
function checkLength(input, err, leng) {
    if (input.length > leng) {
        err.innerText = `Độ dài kí tự tối đa là: ${leng}`;
    } else {
        err.innerText = '';
    }
}


var checkSignup = () => {
    let name = document.getElementById('name').value.trim();
    let user = document.getElementById('user').value.trim();
    let pass = document.getElementById('pass').value.trim();

    let checkYourName = document.getElementById('checkYourName');
    let checkUserName = document.getElementById('checkUserName');
    let checkPass = document.getElementById('checkPass');

    if (name == "") {
        checkYourName.innerText = 'không được để trống!';
    } else {
        checkLength(name, checkYourName, 15);
    }
    if (user == "") {
        checkUserName.innerText = 'không được để trống!';
    } else {
        checkLength(user, checkUserName, 8);
    }
    if (pass == "") {
        checkPass.innerText = 'không được để trống!';
    } else {
        checkLength(pass, checkPass, 8);
    }
    if (checkYourName.innerText.trim() === '' && checkUserName.innerText.trim() === '' &&
        checkPass.innerText.trim() === '') {
        return true;
    }
    return false;
};

var checkLogin = () => {
    let user = document.getElementById('username').value.trim();
    let pass = document.getElementById('password').value.trim();

    let checkUserName = document.getElementById('checkUserName');
    let checkPass = document.getElementById('checkPass');

    if (user == "") {
        checkUserName.innerText = 'không được để trống!';
    } else {
        checkUserName.innerText = '';
    }
    if (pass == "") {
        checkPass.innerText = 'không được để trống!';
    } else {checkUserName
        checkPass.innerText = '';
    }
    if (checkUserName.innerText.trim() === '' && checkPass.innerText.trim() === '') {
        return true;
    }
    return false;
};
