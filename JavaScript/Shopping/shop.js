var myList = [["chocolate",2],["almond",6],["mango",5]];

function add()
{
  var a=document.getElementById("f").value;
  var b=parseInt(document.getElementById("q").value);
  var l= parseInt(myList.length);
 var x=myList.push([a,b]);

}
function remove()
{var l= parseInt(myList.length);
  myList.pop();

}
 function sh()
 {
   myList.shift();

 }
 function unsh()
 {var p=document.getElementById("f").value;
 var q=parseInt(document.getElementById("q").value);
   myList.unshift([p,q]);

}
function display()
{
  if(myList.length==0)
  {
    alert("list Empty");
  }
  document.getElementById("d").innerHTML=" ";
  for(var i=0;i<myList.length;i++)
  {
    var list=myList[i];
    for(var j=0;j<list.length;j++)
    {
      document.getElementById("d").innerHTML+=list[j]+"<br>";
    }
  }
}
