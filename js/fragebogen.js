let slider = document.getElementsByClassName('slider');
let sliderResult = document.getElementsByClassName('sliderResult');
let lecture = document.getElementById("lecture").innerHTML = localStorage.getItem('current');


Array.from(sliderResult).forEach(function(e){
    let questionPage = parseInt(document.getElementById('currentQuestionPage').innerText);
    console.log(typeof(questionPage));
})

Array.from(slider).forEach(function(e) {
    
    e.oninput = function(){
        let value = this.value;
        let resultNode = this.nextElementSibling;  
        switch(value){
            case "1": 
                resultNode.innerHTML = "Trifft überhaupt nicht zu";
                resultNode.style.cssText = "color: #cb3333";
                break;
            case "2":
                resultNode.innerHTML = "Trifft nicht zu";
                resultNode.style.cssText = "color: #B24D26";
                break;
            case "3":
                resultNode.innerHTML = "Trifft eher nicht zu";
                resultNode.style.cssText = "color: darkorange";
                break;
            case "4":
                resultNode.innerHTML = "Trifft zu";
                resultNode.style.cssText = "color: #7F800D";
                break;
            case "5":
                this.nextElementSibling.innerHTML = "Trifft sehr zu";
                resultNode.style.cssText = "color: #669900";
                break;
            default: console.log("gibts nicht");
        }
    }
});

