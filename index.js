// local storage with one floor

const rooms = document.querySelectorAll('.room');
setRoomStatus();
setClickEvent();

// debugging
showAllClassesOfEveryRoom();
console.log('local storage size: ' + localStorage.length)
clearLocalStorage();
// debugging

function setRoomStatus() {
    for (const room of rooms) {
        if (localStorage.getItem(room.id)) {
            // funktioniert nur mit cache
            // hier eine andere Lösung finden, um den status dauerhaft zu speichern
            // herausfinden, ob die Seite mit cache reload kaputt geht (Stichwort dark mode)
            changeRoomColor(room, localStorage.getItem(room.id));
        }
    }
}

function setClickEvent() {
    for (const room of rooms) {
        room.onclick = function () {
            const answer = confirm('Möchtest du den Raumstatus ändern?');
            if (answer === true) {
                changeRoomStatus(room);
            }
        }
    }
}

function changeRoomStatus(room) {
    if (!localStorage.getItem(room.id)) {
        localStorage.setItem(room.id, 'green');
    } else {
        const currentStatus = localStorage.getItem(room.id);
        const newStatus = currentStatus === 'red' ? 'green' : 'red';
        localStorage.setItem(room.id, newStatus);
    }
    changeRoomColor(room, localStorage.getItem(room.id));
}

function changeRoomColor(room, currentStatus) {
    room.classList.remove('red', 'green', 'defaultRoom');
    room.classList.add(currentStatus);
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

function showAllClassesOfEveryRoom() {
    for (const room of rooms) {
        console.log('classlist of ' + room.id + ': ' + room.classList);
    }
}