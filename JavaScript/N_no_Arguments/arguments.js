

function Arg(arg1, arg2)
{
    var s = "";

    s +=  this;

    for (i in Arg.arguments) {
        s +=  Arg.arguments[i];

  }
    return s;
}
function aa()
{
var x=document.getElementById("ar").value;
//console.log(x);
console.log(Arg.apply('BridgeLabz ',[x]));
}
