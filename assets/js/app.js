cl= console.log;
var setdigitalClock=document.getElementById("digitalClock");

function createDigitalClock() {
    var d= new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var session = "AM";
    cl(hr,min,sec);

    if(hr > 12){
        hr = hr -12;
        session = "PM";
}
 if (hr < 10) {
     hr = "0" + hr;
 }
 if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}
//sec = sec <10 ?("0" + sec) : sec;

 var result = `${hr} : ${min} : ${sec} ${session}`;
 setdigitalClock.innerHTML = result;
 setTimeout(createDigitalClock, 1000)
}

createDigitalClock()
function setZero(x){
    //if (x < 10){
      //  x = "0" +x
    //}
    x = (x < 10) ? x = ("0"+x) :x;
    return x;
}