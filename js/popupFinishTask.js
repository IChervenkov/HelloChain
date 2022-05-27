var modalFinishTask = document.getElementById("myModalFinishTask");
var modalFinishTask1 = document.getElementById("myModalFinishTask1");
var modalFinishTask2 = document.getElementById("myModalFinishTask2");

var btnFinishTask = document.getElementById("BtnFinishTask");
var btnFinishTask1 = document.getElementById("BtnOK");
var btnFinishTask2 = document.getElementById("findNonceBtn");

var spanFinishTask = document.getElementsByClassName("closeFinishTask")[0];
var spanFinishTask1 = document.getElementsByClassName("closeFinishTask")[1];
var spanFinishTask2 = document.getElementsByClassName("closeFinishTask")[2];


btnFinishTask.onclick = function() {
  modalFinishTask.style.display = "block";
  document.getElementById("Block1").hidden = false;
  document.getElementById("disableBtn1").disabled = false;
}

spanFinishTask.onclick = function() {
  modalFinishTask.style.display = "none";
}


btnFinishTask1.onclick = function() {
  if (document.getElementById("one").value.length != 0) {
    modalFinishTask1.style.display = "block";
    document.getElementById("findNonceBtn").disabled = false;
  }
}

spanFinishTask1.onclick = function() {
  modalFinishTask1.style.display = "none";
}

btnFinishTask2.onclick = function() {
  var nonce = Math.floor(Math.random() * 20) + 1;
  document.getElementById("findNonce").value += nonce + "\n";
  var lastVal = document.getElementById("secondNum").value;

  if (nonce == 15) {
          modalFinishTask2.style.display = "block";
          document.getElementById("lastNonce").value = nonce;
          document.getElementById("lastval").value = lastVal;
          document.getElementById("lastBlock").hidden = false;
  }
}

spanFinishTask2.onclick = function() {
  modalFinishTask2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalFinishTask) {
    modalFinishTask.style.display = "none";
  }

  if (event.target == modalFinishTask1) {
    modalFinishTask1.style.display = "none";
  }

  if (event.target == modalFinishTask2) {
    modalFinishTask2.style.display = "none";
  }
}