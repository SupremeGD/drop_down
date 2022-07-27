window.onload = function () {
    var myBody = document.getElementById("bg");
    var myColor = document.getElementById("color");
    var colorOption = myColor.value;
    
    myColor.onclick = function() {
        colorOption = myColor.value;
        if (colorOption == 0) {
            myBody.style.background = "white";
        } else {
            myBody.style.background = colorOption;
        }
    }
}
