let button = document.getElementById('loginButton');

button.addEventListener('click', function(){
    let username = document.getElementById('username').value;

    if(username == "prof"){
        console.log('prof');
    } else {
        console.log('student');
    }
});