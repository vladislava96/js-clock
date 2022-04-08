let body = document.body
let clock = document.getElementById('clock');
let min = document.getElementById('minute');
let hour = document.getElementById('hour');
let button = document.getElementById('hider');

function themeChange() {
    body.classList.toggle('light-body');
    clock.classList.toggle('light-clock');
    min.classList.toggle('light-minutes');
    hour.classList.toggle('light-hours');
    button.classList.toggle('light-button');  
}
