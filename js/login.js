let button = document.getElementById('loginButton');

button.addEventListener('click', function(){
    let username = document.getElementById('username').value;

    if(username == "prof"){
        window.open('pages/results.html',"_self","",true);
        console.log('prof');
    } else{
        window.open('pages/profhover.html',"_self","",true)
        console.log('student');
    }
});