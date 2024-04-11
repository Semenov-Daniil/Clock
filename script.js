const stalkSecond = document.querySelector('.stalk-second');
const stalkMinute = document.querySelector('.stalk-minute');
const stalkHour = document.querySelector('.stalk-hour');

const timerSecond = document.querySelector('.timer-clock--second');
const timerMinute = document.querySelector('.timer-clock--minute');
const timerHour = document.querySelector('.timer-clock--hour');

const date = new Date();
let secondLast = secondDeg = date.getSeconds() * 6;
let minuteLast = minuteDeg = date.getMinutes() * 6;
let hourLast = hourDeg = date.getHours() * 30 + minuteLast / 12;

setInterval(function() {
    const date = new Date();

    const second = date.getSeconds() * 6;
    const minute = date.getMinutes() * 6;
    const hour = date.getHours() * 30 + minute / 12;

    if (secondLast != second) {
        secondDeg += 6;
        secondLast = second;
    }

    if (minuteLast != minute) {
        minuteDeg += 6;
        minuteLast = minute;
    }

    if (hourLast != hour) {
        hourDeg += 0.5;
        hourLast = hour;

    }

    stalkSecond.style.transform = `rotate(${secondDeg}deg)`;
    stalkMinute.style.transform = `rotate(${minuteDeg}deg)`;
    stalkHour.style.transform = `rotate(${hourDeg}deg)`;

    timerSecond.innerHTML = String(date.getSeconds()).padStart(2, '0');
    timerMinute.innerHTML = String(date.getMinutes()).padStart(2, '0');
    timerHour.innerHTML = String(date.getHours()).padStart(2, '0');
});