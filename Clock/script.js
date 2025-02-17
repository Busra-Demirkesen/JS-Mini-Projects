const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');


function updateClock() {
 const currentTime = new Date();
    //setTimeout(updateClock,1000);
    setInterval(updateClock,1000);
  
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    const hourDeg = (hour/ 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute/ 60 ) *360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second/60)*360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

    

}  

updateClock();