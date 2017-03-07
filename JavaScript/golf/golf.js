function golf()
{
  var r;
  var stroke=parseInt(document.getElementById("s").value);
  var par=parseInt(document.getElementById("p").value);
  if(stroke==1)
  {
      r="Hole in one!";
  }
else  if(stroke <=(par-2))
  {
      r="Eagle";
  }
else  if(stroke==(par-1))
  {
      r="Birdie";
  }
  else if(stroke==par)
  {
      r="Par";
  }
else  if(stroke==(par+1))
  {
      r="Bogey";
  }
else   if(stroke==(par+2))
  {
      r="Double Bogey";
  }
else  if(stroke>=(par+3))
  {
      r="Go Home!";
  }
  document.getElementById("demo").innerHTML=r;
}
