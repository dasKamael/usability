let lectureList = [
    'Usability',
    'ADS',
    'Usability',
    'ADS',
    'AFS',
    'Algorithmen und Datenstrukturen',
    'AFS',
    'ADS',
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

    wrap.appendChild(header);
    wrap.appendChild(chooseLecture);
    chooseLecture.appendChild(lecture1);
    chooseLecture.appendChild(lecture2);
    

    document.getElementById('proflist').appendChild(wrap);
}