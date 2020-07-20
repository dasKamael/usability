let button = document.getElementById('loginButton');
let user = document.getElementById('username');

button.addEventListener('click', function(){
    let username = document.getElementById('username').value;


    if(username == "prof"){
        localStorage.setItem('user', user.value);
        window.open('pages/results.html',"_self","",true);
    } else {
        localStorage.setItem('user', user.value);
        window.open('pages/chooseLecture.html',"_self","",true)
    }
});