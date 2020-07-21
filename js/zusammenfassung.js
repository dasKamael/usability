var slider = document.getElementsByClassName('slider');
var lecture = document.getElementById("lecture").innerHTML = localStorage.getItem('current');
var send = document.getElementById('nextPageButton');
var questionsAnswered = localStorage.getItem('questionAnswers').split(',');

Array.from(slider).forEach(function(e) {
    let resultNode = e.parentNode.parentNode.firstElementChild
    switch(questionsAnswered[Array.from(slider).indexOf(e)]){
        case "1": 
            resultNode.innerText = "Trifft überhaupt nicht zu";
            resultNode.style.cssText = "color: #cb3333";
            console.log(Array.from(slider).indexOf(e));
            break;
        case "2":
            resultNode.innerText = "Trifft nicht zu";
            resultNode.style.cssText = "color: #B24D26";
            break;
        case "3":
            resultNode.innerText = "Trifft eher nicht zu";
            resultNode.style.cssText = "color: darkorange";
            break;
        case "4":
            resultNode.innerText = "Trifft zu";
            resultNode.style.cssText = "color: #7F800D";
            break;
        case "5":
            resultNode.innerText = "Trifft sehr zu";
            resultNode.style.cssText = "color: #669900";
            break;
        default: console.log("gibts nicht");
    }
    
    e.oninput = function(){
        let value = this.value;
        let resultNode = this.parentNode.parentNode.firstElementChild
        switch(value){
            case "1": 
                resultNode.innerText = "Trifft überhaupt nicht zu";
                resultNode.style.cssText = "color: #cb3333";
                questionsAnswered[Array.from(slider).indexOf(e)] = '1';
                break;
            case "2":
                resultNode.innerText = "Trifft nicht zu";
                resultNode.style.cssText = "color: #B24D26";
                questionsAnswered[Array.from(slider).indexOf(e)] = '2';
                break;
            case "3":
                resultNode.innerText = "Trifft eher nicht zu";
                resultNode.style.cssText = "color: darkorange";
                questionsAnswered[Array.from(slider).indexOf(e)] = '4';
                break;
            case "4":
                resultNode.innerText = "Trifft zu";
                resultNode.style.cssText = "color: #7F800D";
                questionsAnswered[Array.from(slider).indexOf(e)] = '4';
                break;
            case "5":
                resultNode.innerText = "Trifft sehr zu";
                resultNode.style.cssText = "color: #669900";
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

    done.push(localStorage.getItem('current'));
    localStorage.setItem('done', done.toString());
    window.open('../pages/chooseLecture.html', '_self');
});

