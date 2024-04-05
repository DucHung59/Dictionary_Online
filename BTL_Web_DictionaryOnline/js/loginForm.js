var checkSignup = () => {

};

var checkLogin = () => {
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');
    let checkUserId = document.getElementById('checkUserId');
    let checkPass = document.getElementById('checkPass');

    if (user.value == "") {
        checkUserId.innerHTML = `<span>Tài khoản không được để trống</span>`;
    } else if (pass.value == "") {
        checkPass.innerHTML = `<span>Mật khẩu không được để trống</span>`;
    } 
};
