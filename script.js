const stalkSecond = document.querySelector('.stalk-second');
const stalkMinute = document.querySelector('.stalk-minute');
const stalkHour = document.querySelector('.stalk-hour');

let oldSecond = (new Date()).getSeconds() * 6;
let rotateSecond = oldSecond;

setInterval(function() {
    const date = new Date();

    const second = date.getSeconds() * 6;
    const minute = date.getMinutes() * 6;
    const hour = date.getHours() * 30 + minute / 12;

    if (oldSecond != second) {
        if (second == 0) {
            rotate += 6;
        } else {
            rotate += (second - oldSecond);
        }
    }

    console.log(rotate);

    stalkSecond.style.transform = `rotate(${rotate}deg)`;
    stalkMinute.style.transform = `rotate(${minute}deg)`;
    stalkHour.style.transform = `rotate(${hour}deg)`;

    oldSecond = second;
});