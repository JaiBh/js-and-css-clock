// Global Variables
const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate() {
	const now = new Date();
// Moving the seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (seconds === 0) {
		secondHand.style.transition = `all 0s`;
	} // Remove the snap back effect when the second hit 0
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
// Moving the minutes hand
    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
	if (minutes === 0) {
		minuteHand.style.transition = `all 0s`;
	}
	minuteHand.style.transform = `rotate(${minsDegrees}deg)`
// Moving the hours hand
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	if (hour === 0) {
		hourHand.style.transition = `all 0s`;
	}
	hourHand.style.transform = `rotate(${hourDegrees}deg)`
	console.log(seconds)
	}

// Start the clock, updating every second
setInterval(setDate, 1000);