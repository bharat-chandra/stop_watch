let sec = document.querySelector('p #sec');
let min = document.querySelector('p #min');
let hr = document.querySelector('p #hr');
let startbtn = document.querySelector('.container #startbtn');

let Interval;
let ss=0
let mm=0;
let hh=0;
function stop(){
    clearInterval(Interval);
    startbtn.style.pointerEvents = 'visible';
}
function start(){
    startbtn.style.pointerEvents='none';
    Interval = setInterval(()=>{
        if(ss<59){
            ss=ss+1;
            ss<10?sec.innerHTML='0'+ss:sec.innerHTML=ss;
            }
        else{
            ss=0;
            ss<10?sec.innerHTML='0'+ss:sec.innerHTML=ss;
            if(mm<59){
                mm=mm+1;
                mm<10?min.innerHTML='0'+mm:min.innerHTML=mm;
            }
            else{
                hh=hh+1;
                hh<10?hr.innerHTML='0'+hh:hr.innerHTML=hh;
            }
        }
    },1000);
}
function reload(){
    sec.innerHTML='00';
    min.innerHTML='00';
    hr.innerHTML ='00';
}
