export class User{

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