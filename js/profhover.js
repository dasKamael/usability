let lectureList = [
    'Usability Engineering',
    'Algorithmen und Datenstrukturen',
    'Datenbanken',
    'Rechnernetz- werke und Tele- kommunikation',
    'Objektorientierte Software- entwicklung',
]

for(i=0;i<lectureList.length;i++){
    createChooseLecture(lectureList[i]);
}


function createChooseLecture(lecture){
    let wrap = document.createElement('div');
        wrap.classList.add('profImage');
    
    let header = document.createElement('h1');
        header.classList.add('lecture');
        header.innerText = lecture;
    
    let chooseLecture = document.createElement('div');
        chooseLecture.classList.add('chooseLecture');
    
    let lecture1 = document.createElement('h2');
        lecture1.innerText = 'Vorlesung'; 
        
    let lecture2 = document.createElement('h2');
        lecture2.innerText = 'Übung';

    let lectureLink1 = document.createElement('a');
        lectureLink1.setAttribute("href", "../pages/fragebogen.html");


    let lectureLink2 = document.createElement('a');
        lectureLink2.setAttribute("href", "../pages/fragebogen.html");

    wrap.appendChild(header);
    wrap.appendChild(chooseLecture);
    lectureLink1.appendChild(lecture1);
    lectureLink2.appendChild(lecture2);
    chooseLecture.appendChild(lectureLink1);
    chooseLecture.appendChild(lectureLink2);
    

    document.getElementById('proflist').appendChild(wrap);
}

