// local storage with one floor

const rooms = document.querySelectorAll('.defaultRoom');
for (const room of rooms) {
    // add click event
    room.onclick = function () {
        const answer = confirm('Möchtest du den Raumstatus ändern?');
        if (answer === true) {
            changeRoomStatus(room);
        }
    }
}
function changeRoomStatus(room) {
    const roomKey = 'status_' + room.id;
    const currentStatus = localStorage.getItem(roomKey) ? localStorage.getItem(roomKey) : 'red';
    // fallback when set item does not work
    localStorage.setItem(
        roomKey,
        currentStatus === 'red' ? 'green' : 'red'
    );
/*
    changeRoomColor(room);
*/
}

function changeRoomColor(room) {
    // tbd
    room.classList.remove('red', 'green', 'defaultRoom');
}

/**********************************************************************************************************************/
// DEBUGGING CONSOLE LOGS
function logLocalStorage() {
    console.log('local storage size: ' + localStorage.length)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log('local storage item key: ' + key);
        console.log('local storage item value: ' + localStorage.getItem(key));
    }
}

function clearLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorage.removeItem(key);
    }
}

