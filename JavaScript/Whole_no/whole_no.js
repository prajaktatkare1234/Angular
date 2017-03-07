



function getRandom()
{
  var m= parseInt(document.getElementById("m").value);
var r=  Math.floor(Math.random() * (m+1));
console.log(r);
document.getElementById("p").innerHTML=r;
}
