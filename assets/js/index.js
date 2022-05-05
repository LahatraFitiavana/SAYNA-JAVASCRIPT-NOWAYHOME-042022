$(document).ready(function(){
    $('#marveltext').fadeIn();
    $('#marveltext').animate({left:"300px"},"slow");
})


$(document).ready(function(){
    $(window).scroll(function(){
        let scroll=$(window).scrollTop();
        $('#marvel-img').css('top',scroll+'px');
        if(scroll>1747) $(window).off('scroll');
    })
})

let modal=document.querySelector('#myModal');
let popupButton=document.querySelector('#popup');

popupButton.onclick=()=>{
    modal.style.display='block';
    setTimeout(()=>{
        modal.style.display='none';
        },3000);
}

