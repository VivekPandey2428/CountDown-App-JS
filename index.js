const Bday="24 May 2022";
const tdays=document.getElementById('days');
const thours=document.getElementById('hours');
const tminutes=document.getElementById('minutes');
const tseconds=document.getElementById('seconds');

function Countdown(){
    const currentDate=new Date();
    console.log('current data',currentDate);
    const Birthday=new Date(Bday);
    console.log('Birthdate',Birthday);
    const totalSeconds=(Birthday-currentDate)/1000;//seconds
    const days=Math.floor(totalSeconds/3600/24);
    console.log('total days left',days);
    const hours=Math.floor(totalSeconds/3600)%24;
    console.log('total hours left for today',hours);
    const minute=Math.floor(totalSeconds/60)%60;
    console.log('minute',minute);
    const seconds=Math.floor(totalSeconds)%60;
    console.log('seconds',seconds);
    tdays.innerHTML=days;
    thours.innerHTML=formatTime(hours);
    tminutes.innerHTML=formatTime(minute);
    tseconds.innerHTML=formatTime(seconds);

}
function formatTime(num){
    return num>9?num:`0${num}`;
}
setInterval(Countdown,1000);