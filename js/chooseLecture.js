var lectureList = [
    ['Usability Engineering','Staab'],
    ['Algorithmen und Datenstrukturen', 'Ulges'],
    ['Datenbanken', 'Martin'],
    ['Rechnernetz- werke und Tele- kommunikation', 'Geib'],
    ['Objektorientierte Software- entwicklung', 'Panitz']
]

// Set loggedInUser
document.getElementById('loggedUser').innerHTML = localStorage.getItem('user');
var elements = document.getElementsByClassName('link');
var done = [];
if(localStorage.getItem('done') != null)
    done = localStorage.getItem('done').split(',');

for(i=0;i<lectureList.length;i++){
    createChooseLecture(lectureList[i][0]);
}

function createChooseLecture(lecture){
    let wrap = document.createElement('div');
        wrap.classList.add('profImage');

        if(done.length >=0 && done.indexOf(lecture)>=0){
            wrap.classList.add('alreadyDone');
        }     
    
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
    let lecture = [];
    elements[i].addEventListener('click', function(e){
        let item = e.target.parentNode.parentNode.parentNode.childNodes[0].innerText;
        lecture.push(item);
        
        for(let j=0;j<lectureList.length;j++)
            if(item == lectureList[j][0])
                lecture.push(lectureList[j][1]);
        

        localStorage.setItem('current', lecture.toString());
        window.open('../pages/fragebogenNeu.html', '_self');
    }, false);
}

