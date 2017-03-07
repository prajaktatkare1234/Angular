

function s()
{ var x=document.getElementById("str").value;
var res = x.replace(/:/g, ",");

  var a= res.split(',')
  console.log(a);
  document.write(a);
}
