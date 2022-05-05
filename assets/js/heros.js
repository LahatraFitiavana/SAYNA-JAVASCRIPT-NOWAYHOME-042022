let images=['heroslider1.png','heroslider2.png','heroslider3.png','heroslider4.png','heroslider5.png'];
let index=0;
let avengers=document.querySelector('#avengers');
console.log(avengers);

function slide(){
    document.slider.src='./assets/img-js/'+images[index];
    if(index<images.length-1){
        index++;
    }
    else{
        index=0;
    }
    setTimeout("slide()",2000);
}

window.onload=slide;