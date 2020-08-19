var slider = document.getElementsByClassName('slider');
var lecture = document.getElementById("lecture").innerHTML = localStorage.getItem('current');
var send = document.getElementById('nextPage');
document.getElementById('loggedUser').innerHTML = localStorage.getItem('user');
var current = localStorage.getItem('current').split(',');

var prof = document.getElementById("profName").innerHTML = current[1];
var lecture = document.getElementById("lecture").innerHTML = current[0];
var questionsAnswered = localStorage.getItem('questionAnswers').split(',');

var color1 = "color: #cb3333";
var color2 = "color: #B24D26";
var color3 = "color: darkorange";
var color4 = "color: #7F800D";
var color5 = "color: #669900";

class User{

    constructor(username, done, questionAnswers, firstTime = false){
        this.username = username;
        this.done = done;
        this.questionAnswers = questionAnswers;
        this.firstTime = firstTime;
    }

    setLocalStorage() {
        localStorage.setItem('user', this.username);
        localStorage.setItem('done', done.toString());
        localStorage.setItem('questionAnswers', questionAnswers.toString());
    }

    getExistingUser(loggedUser){
        if(localStorage.getItem(loggedUser) != null) {
            return JSON.parse(localStorage.getItem(loggedUser));
        }
    }

    createUser() {
        localStorage.setItem(this.username.toString(), JSON.stringify(this));
    }

}

Array.from(slider).forEach(function(e) {
    let resultNode = e.parentNode.parentNode.firstElementChild
    switch(questionsAnswered[Array.from(slider).indexOf(e)]){
        case "1": 
            resultNode.innerText = "Trifft überhaupt nicht zu";
            resultNode.style.cssText = color1;
            console.log(Array.from(slider).indexOf(e));
            break;
        case "2":
            resultNode.innerText = "Trifft nicht zu";
            resultNode.style.cssText = color2;
            break;
        case "3":
            resultNode.innerText = "Trifft eher nicht zu";
            resultNode.style.cssText = color3;
            break;
        case "4":
            resultNode.innerText = "Trifft zu";
            resultNode.style.cssText = color4;
            break;
        case "5":
            resultNode.innerText = "Trifft sehr zu";
            resultNode.style.cssText = color5;
            break;
        default: console.log("gibts nicht");
    }
    
    e.oninput = function(){
        let value = this.value;
        let resultNode = this.parentNode.parentNode.firstElementChild
        switch(value){
            case "1": 
                resultNode.innerText = "Trifft überhaupt nicht zu";
                resultNode.style.cssText = color1;
                questionsAnswered[Array.from(slider).indexOf(e)] = '1';
                break;
            case "2":
                resultNode.innerText = "Trifft nicht zu";
                resultNode.style.cssText = color2;
                questionsAnswered[Array.from(slider).indexOf(e)] = '2';
                break;
            case "3":
                resultNode.innerText = "Trifft eher nicht zu";
                resultNode.style.cssText = color3;
                questionsAnswered[Array.from(slider).indexOf(e)] = '4';
                break;
            case "4":
                resultNode.innerText = "Trifft zu";
                resultNode.style.cssText = color4;
                questionsAnswered[Array.from(slider).indexOf(e)] = '4';
                break;
            case "5":
                resultNode.innerText = "Trifft sehr zu";
                resultNode.style.cssText = color5;
                questionsAnswered[Array.from(slider).indexOf(e)] = '5';
                break;
            default: console.log("gibts nicht");
        }
        localStorage.setItem('questionAnswers', questionsAnswered.toString());
    }
});


send.addEventListener('click', function(){
    let done = [];
    if(localStorage.getItem('done') != null)
        done = localStorage.getItem('done').split(',');
    
    localStorage.setItem('questionAnswers', '3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3')
    done.push(current[0]);
    done.push(current[2])
    localStorage.setItem('done', done.toString());
    let updatedUser = new User(localStorage.getItem('user'), done.toString(), '3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3', false);
    localStorage.setItem(localStorage.getItem('user'), JSON.stringify(updatedUser));
    window.open('../pages/confirmation.html', '_self');
});

