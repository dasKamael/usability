var lectureList = [
    'Usability Engineering',
    'Algorithmen und Datenstrukturen',
    'Datenbanken',
    'Rechnernetz- werke und Tele- kommunikation',
    'Objektorientierte Software- entwicklung',
]

var elements = document.getElementsByClassName('link');
var visited = [];
if(localStorage.getItem('visited') != null)
    visited = localStorage.getItem('visited').split(',');

for(i=0;i<lectureList.length;i++){
    createChooseLecture(lectureList[i]);
}

function createChooseLecture(lecture){
    let wrap = document.createElement('div');
        wrap.classList.add('profImage');

        if(visited.length >=0 && visited.indexOf(lecture)>=0){
            wrap.classList.add('alreadyDone');
        }
        console.log(visited);       
    
    let header = document.createElement('h1');
        header.classList.add('lecture');
        header.innerText = lecture;
    
    let chooseLecture = document.createElement('div');
        chooseLecture.classList.add('chooseLecture');
    
    let lecture1 = document.createElement('h2');
        lecture1.innerText = 'Vorlesung'; 
        lecture1.classList.add('link');
        
    let lecture2 = document.createElement('h2');
        lecture2.innerText = 'Übung';
        lecture2.classList.add('link');

    let lectureLink1 = document.createElement('a');
        //lectureLink1.setAttribute("href", "../pages/fragebogen.html");


    let lectureLink2 = document.createElement('a');
        //lectureLink2.setAttribute("href", "../pages/fragebogen.html");

    wrap.appendChild(header);
    wrap.appendChild(chooseLecture);
    lectureLink1.appendChild(lecture1);
    lectureLink2.appendChild(lecture2);
    chooseLecture.appendChild(lectureLink1);
    chooseLecture.appendChild(lectureLink2);
    document.getElementById('proflist').appendChild(wrap);
}

for(let i=0;i<elements.length;i++){
    elements[i].addEventListener('click', function(e){
        let item = e.target.parentNode.parentNode.parentNode.childNodes[0].innerText;
        if(visited.indexOf(item)<0){
            visited.push(item);
        }
        localStorage.setItem('visited', visited.toString());
        localStorage.setItem('current', item);
        window.open('../pages/fragebogenNeu.html', '_self');
    }, false);
}

