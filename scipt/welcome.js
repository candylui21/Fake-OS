// greeting
let newDate = new Date();
let hours = newDate.getHours();
let year = newDate.getFullYear();
let month = newDate.getMonth() + 1;
let day = newDate.getDate();
var greeting;

const morningAfternoon = () => {
    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours >= 12) {
        greeting = "Good Afternoon";
    }

    document.getElementById(
        "greeting"
    ).innerHTML = `${greeting} Visitor! Thank you for visiting my Fake OS on ${day}/${month}/${year}.`;
};

morningAfternoon();
