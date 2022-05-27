function move(event) {
    var targ = event.target || event.srcElement + "\n";
    document.getElementById("one").value += targ.textContent || targ.innerText;
    document.getElementById("one").value += '\n';
    $("#two").val($("#one").val());
    $("#last").val($("#two").val());
}

function Copydata(){
    $("#two").val($("#one").val());
    $("#last").val($("#two").val());
    $("#secondNum").val($("#furstNum").val());
    $("#lastval").val($("#secondNum").val());
  }
