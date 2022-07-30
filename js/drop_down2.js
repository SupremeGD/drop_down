var body = document.getElementById("bg");
var btn1 = document.getElementById("black");
var btn2 = document.getElementById("red");
var btn3 = document.getElementById("green");
var btn4 = document.getElementById("yellow");
var btn0 = document.getElementById("white");


btn1.onclick = function () {
    body.style.background = "black";
}
btn2.onclick = function () {
    body.style.background = "red";
}
btn3.onclick = function () {
    body.style.background = "green";
}
btn4.onclick = function () {
    body.style.background = "yellow";
}
btn0.onclick = function () {
    body.style.background = "white";
}