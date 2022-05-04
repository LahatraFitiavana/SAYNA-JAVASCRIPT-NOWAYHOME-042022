
// This file contains the global animations applied to all the pages

let revButtons=document.querySelectorAll('.btn-reverse');

revButtons.forEach((button)=>{
    button.addEventListener('mouseover',()=>{
        button.style.backgroundColor='#b11313';
        button.style.color='white';
        button.style.fontWeight='bold';
        button.style.boxShadow='5px 5px 30px white';
    })
    button.addEventListener('mouseout',()=>{
        button.style.backgroundColor='white';
        button.style.color='#b11313';
        button.style.boxShadow='none';
    })
})

let icons=document.querySelectorAll('.footer-icon');

icons.forEach((icon)=>{
    icon.addEventListener('mouseover',()=>{
        icon.style.color='white';
    });

    icon.addEventListener('mouseout',()=>{
        icon.style.color='black';
    })
})

let menu=document.querySelectorAll('li');

menu.forEach((li)=>{
    li.addEventListener('mouseover',()=>{
    li.style.textDecoration='line-through';
    li.style.color='white';
    })

    li.addEventListener('mouseout',()=>{
        li.style.textDecoration='none';
        })
})


$(document).ready(function(){
    $('.box').animate({
        left:'30px',
    },"10000");
    
    $('.description').fadeIn(5000);
})