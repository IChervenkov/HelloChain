var count = 1;
var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var N3 = document.getElementById("N3");
var N4 = document.getElementById("N4");
var N5 = document.getElementById("N5");
var N6 = document.getElementById("N6");
var N7 = document.getElementById("N7");
var N8 = document.getElementById("N8");
var N9 = document.getElementById("N9");
var N10 = document.getElementById("N10");

var writeTransaction = document.getElementById("writeTransaction");

var modalFinishTask = document.getElementById("myModalFinishTask");
var modalFinishTask1 = document.getElementById("myModalFinishTask1");

var spanFinishTask = document.getElementsByClassName("closeFinishTask")[0];
var spanFinishTask1 = document.getElementsByClassName("closeFinishTask")[1];

function writeSecretWord() {

    if (count == 12) {
        document.getElementById("saveSecretWord").disabled = true;
        document.getElementById("secretWord").readOnly = true;
        modalFinishTask.style.display = "block";
        document.getElementById("disableBtn1").disabled = false;
    }

    document.getElementById("secretWordList").value += document.getElementById("secretWord").value + "\n";
    count++;
}

spanFinishTask.onclick = function () {
    modalFinishTask.style.display = "none";
}

N1.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N2.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N3.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N4.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N5.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N6.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N7.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N8.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N9.onclick = function () {
    modalFinishTask1.style.display = "block";
}

N10.onclick = function () {
    modalFinishTask1.style.display = "block";
}

spanFinishTask1.onclick = function () {
    modalFinishTask1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalFinishTask) {
        modalFinishTask.style.display = "none";
    }

    if (event.target == modalFinishTask) {
        modalFinishTask1.style.display = "none";
    }
}

function freeButton() {
    var queryString = location.search.substring(1);
    if (queryString == "free") {
        document.getElementById("mintNFT").disabled = false;
    }
}