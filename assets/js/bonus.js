let minuter=document.querySelector('.minuter');
let deadline=new Date("05/04/2022 00:00:00").getTime();


let countDown=()=>{
    let now=new Date().getTime();
    let left=deadline-now;
    let days=Math.floor(left/(1000*60*60*24));
    let hours=Math.floor((left%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((left%(1000*60*60))/(1000*60));
    let seconds=Math.floor((left%(1000*60))/(1000));

    if(left>0){
    minuter.innerHTML=`${days}:${hours}:${minutes}:${seconds}`;
    }else{
        minuter.innerHTML='le temps est écoulé!'
    }
}

setInterval(()=>{
    countDown()
},1000);
