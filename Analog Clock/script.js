// Select the .number-hours element
const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');


// Initialize an empty array to store the HTML elements
const numberElement = [];
const barElement = [];


// Loop through the numbers 1 to 12
for (let i = 1; i <= 12; i++) {
    // Push a new span for each number with the correct index
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

// Insert the generated elements into the .number-hours container
numberHours.insertAdjacentHTML('afterbegin', numberElement.join(''));

// Optional: Log the array of generated elements to the console
// console.log(numberElement);

for (let i=1; i<=60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML('afterbegin', barElement.join(''));

// console.log(barElement);
const handHours = document.querySelector('.hours')
const handMinutes = document.querySelector('.minutes')
const handSeconds = document.querySelector('.seconds')


function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours() % 12; // Use modulo to convert 24-hour format to 12-hour format
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    console.log(currentHours,currentHours,currentSeconds,handHours)

    
    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`; // 360 / 12 = 30 degrees per hour
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`; // 360 / 60 = 6 degrees per minute
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`; // 360 / 60 = 6 degrees per second
    
}
setInterval(getCurrentTime, 1000);
getCurrentTime();
