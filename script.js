setInterval(setClock, 1000)

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

function setClock() {
    const currentDate = new Date();

    const secondsDeg = (360 / 60) * currentDate.getSeconds(); // 15 ---> 90
    const minutesDeg = (360 / 60) * (currentDate.getMinutes() + secondsDeg / 360); // (6) * (8 + 90/360) ----> 49.5
    const hoursDeg = (360 / 12) * (currentDate.getHours() + minutesDeg / 360);

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setClock();

setInterval(getDigitalWatch, 1000)

function getDigitalWatch() { 

    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();
    let day = now.getDay(); // день недели
    let date = now.getDate(); // день месяца
    let month = now.getMonth(); // месяц
    
    // let date = now.toDateString();
    sec = Zero(sec);
    min = Zero(min);
    hour = Zero(hour);

    function Zero(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }

    let weekday = new Array(7);
    weekday[0] = 'Воскресенье';
    weekday[1] = 'Понедельник';
    weekday[2] = 'Вторник';
    weekday[3] = 'Среда';
    weekday[4] = 'Четверг';
    weekday[5] = 'Пятница';
    weekday[6] = 'Суббота';

    let monthArr = new Array(12);
    monthArr[0]="января";
    monthArr[1]="февраля";
    monthArr[2]="марта";
    monthArr[3]="апреля";
    monthArr[4]="мая";
    monthArr[5]="июня";
    monthArr[6]="июля";
    monthArr[7]="августа";
    monthArr[8]="сентября";
    monthArr[9]="октября";
    monthArr[10]="ноября";
    monthArr[11]="декабря";

    document.querySelector('#digitalWatch').innerText = `${hour} : ${min} : ${sec}`;
    document.querySelector('#date').innerText = `${weekday[day]}, ${date} ${monthArr[month]}`;
}

currentTime()



    
