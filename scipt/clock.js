const currentTime = () => {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let amPm = "";
    // set am,pm
    if (h >= 12) {
        amPm = "PM";
    } else {
        amPm = "AM";
    }
    // 24 hr to 12 hr
    if (h > 12) {
        h = h - 12;
    } else if (h == 0) {
        h = 12;
    }
    // double digit
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // link using id

    document.getElementById("clock").innerText =
        h + ":" + m + ":" + s + " " + amPm;
    //update time
    setTimeout(currentTime, 1000);
};

currentTime();

const appleMenu = document.querySelector("#menu");

appleMenu.addEventListener("click", () => {});
