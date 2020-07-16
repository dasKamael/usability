let slider = document.getElementsByClassName('slider');
let sliderResult = document.getElementsByClassName('sliderResult');
let lecture = document.getElementById("lecture").innerHTML = localStorage.getItem('current');

Array.from(slider).forEach(function(e) {
    
    e.oninput = function(){
        let value = this.value;  
        switch(value){
            case "1": 
                this.nextElementSibling.innerHTML = "Trifft überhaupt nicht zu";
                console.log(Array.from(slider).indexOf(e));
                break;
            case "2":
                this.nextElementSibling.innerHTML = "Trifft nicht zu";
                break;
            case "3":
                this.nextElementSibling.innerHTML = "Trifft eher nicht zu";
                break;
            case "4":
                this.nextElementSibling.innerHTML = "Trifft zu";
                break;
            case "5":
                this.nextElementSibling.innerHTML = "Trifft sehr zu";
                break;
            default: console.log("gibts nicht");
        }
    }
});

