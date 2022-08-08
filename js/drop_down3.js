var body = document.getElementById("bg");
var btn1 = document.getElementById("black");
var btn2 = document.getElementById("red");
var btn3 = document.getElementById("green");
var btn4 = document.getElementById("orange");
var btn5 = document.getElementById("white");
var btn0 = document.getElementById("switch");

var button = document.getElementById("drop_button");
var dropdown = document.getElementById("content");

var sum = 0;
button.onclick = function () {
    dropdown = document.getElementById("content");
    if ( sum % 2 == 0 ) {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
    sum = sum + 1;
}


btn1.onclick = function () {
    body.style.background = "black";
    btn0 = document.getElementById("switch");
    btn0 = btn0.innerHTML = btn1.value;
}
btn2.onclick = function () {
    body.style.background = "red";
    btn0 = document.getElementById("switch");
    btn0 = btn0.innerHTML = btn2.value;
}
btn3.onclick = function () {
    body.style.background = "green";
    btn0 = document.getElementById("switch");
    btn0 = btn0.innerHTML = btn3.value;
}
btn4.onclick = function () {
    body.style.background = "orange";
    btn0 = document.getElementById("switch");
    btn0 = btn0.innerHTML = btn4.value;
}
btn5.onclick = function () {
    body.style.background = "white";
    btn0 = document.getElementById("switch");
    btn0 = btn0.innerHTML = btn5.value;
}

