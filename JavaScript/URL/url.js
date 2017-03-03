
function a()
  {
    alert("hii");
var location= window.location;
for( var aa in location)
{
console.log(aa+":",location[aa]);
document.write(aa +": "+location[aa]+"<br>");
}
}
