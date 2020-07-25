let sendButton = document.getElementById('loginButton');

sendButton.addEventListener('click', function(){
    let username = document.getElementById('username').value;

    if(username == "prof"){
        localStorage.setItem('user', user.value);
        window.open('pages/results.html',"_self","",true);
    } else {
        setLocalStorage(username);
        window.open('pages/chooseLecture.html',"_self","",true)
    }
});

function setLocalStorage(loggedUser) {
    if(localStorage.getItem(loggedUser) != null) {
        let student = JSON.parse(localStorage.getItem(loggedUser));

        localStorage.setItem('user', student.username);
        localStorage.setItem('done', student.done);
        localStorage.setItem('questionAnswers', student.questionAnswers);
    } else {
        localStorage.setItem('user', loggedUser);
        localStorage.setItem('done','');
        localStorage.setItem('questionAnswers', '3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3');
    }
}