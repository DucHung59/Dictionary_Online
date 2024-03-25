document.querySelector('#Signup').onclick = () => {
    if(document.querySelector('.Message').classList.contains('message-login')) {
        document.querySelector('.Message').classList.remove('message-login');
    }
    document.querySelector('.Message').classList.add('message-signup');
    document.querySelector('#Message-Header').innerHTML = "Sign up for Free!";
}

document.querySelector('#Login').onclick = () => {
    if(document.querySelector('.Message').classList.contains('message-signup')) {
        document.querySelector('.Message').classList.remove('message-signup');
    }
    document.querySelector('.Message').classList.add('message-login');
    document.querySelector('#Message-Header').innerHTML = "Welcome back!";
}