var slider = document.getElementsByClassName('slider');
var sliderResult = document.getElementsByClassName('sliderResult');
var current = localStorage.getItem('current').split(',');

var prof = document.getElementById("profName").innerHTML = current[1];
var lecture = document.getElementById("lecture").innerHTML = current[0];
var currentQuestionPage = document.getElementById('currentQuestionPage').innerText;

var questionsAnswered = [];


if(localStorage.questionAnswers == null){
    localStorage.setItem('questionAnswers', '3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3');
    questionsAnswered = localStorage.getItem('questionAnswers').split(',');
} else {
    questionsAnswered = localStorage.getItem('questionAnswers').split(',');
}


Array.from(sliderResult).forEach(function(e){
    switch(questionsAnswered[Array.from(sliderResult).indexOf(e) + (parseInt(currentQuestionPage)-1)*5]){
        case "1": 
            e.innerText = "Trifft überhaupt nicht zu";
            e.style.cssText = "color: #cb3333";
            console.log(Array.from(slider).indexOf(e));
            break;
        case "2":
            e.innerText = "Trifft nicht zu";
            e.style.cssText = "color: #B24D26";
            break;
        case "3":
            e.innerText = "Trifft eher nicht zu";
            e.style.cssText = "color: darkorange";
            break;
        case "4":
            e.innerText = "Trifft zu";
            e.style.cssText = "color: #7F800D";
            break;
        case "5":
            e.innerText = "Trifft sehr zu";
            e.style.cssText = "color: #669900";
            break;
        default: console.log("gibts nicht");
    }
})

Array.from(slider).forEach(function(e) {

    switch(questionsAnswered[Array.from(slider).indexOf(e) + (parseInt(currentQuestionPage)-1)*5]){
        case "1": 
            e.value = 1;
            e.style.cssText = "color: #cb3333";
            console.log(Array.from(slider).indexOf(e));
            break;
        case "2":
            e.value = 2;
            e.style.cssText = "color: #B24D26";
            break;
        case "3":
            e.value = 3;
            e.style.cssText = "color: darkorange";
            break;
        case "4":
            e.value = 4;
            e.style.cssText = "color: #7F800D";
            break;
        case "5":
            e.value = 5;
            e.style.cssText = "color: #669900";
            break;
        default: console.log("gibts nicht");
    }


    e.oninput = function(){
        let value = this.value;
        let resultNode = this.nextElementSibling;
        let pos = Array.from(slider).indexOf(this) + (parseInt(currentQuestionPage)-1)*5
        switch(value){
            case "1": 
                resultNode.innerHTML = "Trifft überhaupt nicht zu";
                resultNode.style.cssText = "color: #cb3333";
                questionsAnswered[pos] = '1';
                break;
            case "2":
                resultNode.innerHTML = "Trifft nicht zu";
                resultNode.style.cssText = "color: #B24D26";
                questionsAnswered[pos] = '2';
                break;
            case "3":
                resultNode.innerHTML = "Trifft eher nicht zu";
                resultNode.style.cssText = "color: darkorange";
                questionsAnswered[pos] = '3';
                break;
            case "4":
                resultNode.innerHTML = "Trifft zu";
                resultNode.style.cssText = "color: #7F800D";
                questionsAnswered[pos] = '4';
                break;
            case "5":
                this.nextElementSibling.innerHTML = "Trifft sehr zu";
                resultNode.style.cssText = "color: #669900";
                questionsAnswered[pos] = '5';
                break;
            default: console.log("gibts nicht");
        }
        localStorage.setItem('questionAnswers', questionsAnswered.toString());
    }
});

