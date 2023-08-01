let hrs_V = document.getElementById("hrs");
let mins_V = document.getElementById("mins");
let secs_V = document.getElementById("secs");

setInterval(() => {
    let currentTime = new Date();

    hrs_V.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins_V.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs_V.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)