const secondsHand = document.getElementById('seconds');
const minutesHand = document.getElementById('minutes');
const hourHand = document.getElementById('hours');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds(); 
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const timeInterval = 6
    // console.log(now);

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hourHand.style.transform = 'rotate(' + (hour * 30 + minutes / 2) + 'deg)'


}

setInterval(getTime, 100)