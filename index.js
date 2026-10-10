
const canvasHeight = 600;
const canvasWidth = 600;
let defaultRoomStatus = 'red';

const canvas = document.getElementById('testcanvas');
const ctx = canvas.getContext('2d');

if (!localStorage.getItem('roomStatus')) {
    // set default room status
    localStorage.setItem('roomStatus', 'red');
}
ctx.fillStyle = localStorage.getItem('roomStatus');
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

canvas.onclick = () => {
    const answer = confirm('Möchtest du den Raumstatus ändern?');
    if (answer === true) {
        changeRoomStatus();
    }
}

function changeRoomStatus() {
    if (localStorage.getItem('roomStatus') === 'red') {
        localStorage.setItem('roomStatus', 'green');
    } else {
        localStorage.setItem('roomStatus', 'red');
    }
    ctx.fillStyle = localStorage.getItem('roomStatus');
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}