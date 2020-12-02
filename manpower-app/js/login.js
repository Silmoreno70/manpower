window.onload = init

function init() {
    if (localStorage.getItem('token')) {
        window.location.href = 'manpower.html'
    } else {
        window.location.href = 'index.html'
    }
    document.querySelector('#login-btn').addEventListener('click', login)
}
function login() {
    var email = document.getElementById('user-email').value
    var pass = document.getElementById('user-pass').value


    axios({
        method:'post',
        url: 'http://localhost:3000/user/login',
        data: {
            email: email,
            password: pass
        }
    }).then(res => {
        if (res.data.code === 200) {
            localStorage.setItem('token', res.data.message)
            localStorage.setItem('user', res.data.user)
            window.location.href = 'manpower.html'
        }else{
            alert('Usuario y/o contraseña incorrectos 😕')
        }

    }).catch(err => {
        console.error(err);
    })
}