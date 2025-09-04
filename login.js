let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountain3');
let mountains4 =document.getElementById('mountain4');
let word =document.querySelector('.word');
let boat =document.getElementById('boat');
let river5=document.getElementById('river');
window.onscroll=function(){
    let value= scrollY;
    moon.style.top =value*2 +'px';
    mountains3.style.top =value*1.5 +'px';
   mountains4.style.top =value*1.2 +'px';
    boat.style.top =value +'px';
    boat.style.left =value*2 +'px';
    river.style.top =value +'px';
    word.style.fontSize =value +'px';
    if(scrollY>=50){
        word.style.fontSize =50 +'px';
        word.style.position='fixed';
        if(scrollY>=430){
            word.style.display='none';
        }else
        {
            word.style.display='block';
        }
        if(scrollY>=127){
            document.querySelector('.main').style.background='linear-gradient(skyblue,white)';
        }
        else{
            document.querySelector('.main').style.background='linear-gradient(navy,black)';
        }
    }
}


