const intSts = document.getElementById("internetStatus");

function intdetect() {
    if (navigator.onLine) {
        alert("you are back");
        intSts.innerHTML = "welcome! you are online.";
        intSts.style.backgroundColor = "green";
    } else {
        alert("you are offline");
        intSts.innerHTML = "bye! you are offline";
        intSts.style.backgroundColor = "red";
    }
}

window.addEventListener("load", intdetect);
window.addEventListener("online", intdetect);
window.addEventListener("offline", intdetect);
