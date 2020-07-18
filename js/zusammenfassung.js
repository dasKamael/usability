let slider = document.getElementsByClassName('slider');
let lecture = document.getElementById("lecture").innerHTML = localStorage.getItem('current');


Array.from(slider).forEach(function(e) {
    
    e.oninput = function(){
        let value = this.value;  
        switch(value){
            case "1": 
                this.parentNode.parentNode.firstElementChild.innerText = "Trifft überhaupt nicht zu";
                console.log(Array.from(slider).indexOf(e));
                break;
            case "2":
                this.parentNode.parentNode.firstElementChild.innerText = "Trifft nicht zu";
                break;
            case "3":
                this.parentNode.parentNode.firstElementChild.innerText = "Trifft eher nicht zu";
                break;
            case "4":
                this.parentNode.parentNode.firstElementChild.innerText = "Trifft zu";
                break;
            case "5":
                this.parentNode.parentNode.firstElementChild.innerText = "Trifft sehr zu";
                break;
            default: console.log("gibts nicht");
        }
    }
});

