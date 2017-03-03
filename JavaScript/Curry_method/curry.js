


//

var r;
function add(x)
{
//  var a=parseInt(x);
  return function (y)
  {  //alert("hii");

//  console.log(r);
    return x+y;

  }
}
function curry()
{

  var a= parseInt(document.getElementById("no1").value);
  var b= parseInt(document.getElementById("no2").value);
  var c=  add(a)(b);
  document.write(c);
}
