let slider = document.getElementsByClassName('slider');
let lecture = document.getElementById("lecture").innerHTML = localStorage.getItem('current');


Array.from(slider).forEach(function(e) {
    
    e.oninput = function(){
        let value = this.value;
        let resultNode = this.parentNode.parentNode.firstElementChild
        switch(value){
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
    }
});

