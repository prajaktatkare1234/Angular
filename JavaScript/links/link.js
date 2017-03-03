

window.onload=function link()
{
  var x= document.links.length;
    document.getElementById("h4").innerHTML="No of Links: "+ x;

  for(var i=0;i<x;i++)

  {
    document.getElementById("demo").innerHTML += document.links[i].href + "<br>";
  }

}
