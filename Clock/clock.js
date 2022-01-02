function timeFunc1(){
    let a;
    let date;
    let time;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + '<br>on ' + date;
}
timeFunc1();
setInterval(timeFunc1, 1000);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const map = new Map([
    [-11, 'Pacific/Niue'],
    [-10, 'Pacific/Tahiti'],
    [-9, 'Pacific/Gambier'],
    [-8, 'Pacific/Pitcairn'],
    [-7, 'America/Vancouver'],
    [-6, 'America/Denver'],
    [-5, 'America/Rio_Branco'],
    [-4, 'America/Manaus'],
    [-3, 'America/Cayenne'],
    [-2, 'Atlantic/South_Georgia'],
    [-1, 'Atlantic/Azores'],
    [0, 'GMT'],
    [1, 'Europe/Brussels'],
    [2, 'Europe/Helsinki'],
    [3, 'Asia/Riyadh'],
    [4, 'Asia/Dubai'],
    [5, 'Asia/Tashkent'],
    [6, 'Asia/Urumqi'],
    [7, 'Asia/Bangkok'],
    [8, 'Asia/Singapore'],
    [9, 'Asia/Chita'],
    [10, 'Pacific/Chuuk'],
    [11, 'Pacific/Pohnpei'],
    [12, 'Pacific/Wake'],
])
const min = -11;
const max = 12;
let tz1 = randomInt(min, max);
let tz2 = randomInt(min, max);
let tz3 = randomInt(min, max);
let tz4 = randomInt(min, max);
const tz = [tz1, tz2, tz3, tz4]; 
const timeDiv = ['time1', 'time2', 'time3', 'time4'];
let a;
let time;
for (let index = 0; index < tz.length; index++) {
    const element = tz[index];
    function timeFunc2(){
        const options = {timeZone: map.get(element), weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        a = new Date();
        time = a.toLocaleTimeString(undefined, options)
        document.getElementById(timeDiv[index]).innerHTML = time + '<br>at ' + options.timeZone;
    }
    timeFunc2();
    setInterval(timeFunc2, 1000);
}