var myList = [["chocolate",2],["almond",6],["mango",5]];

function add()
{
  var a=document.getElementById("f").value;
  var b=parseInt(document.getElementById("q").value);
  var l= parseInt(myList.length);
 var x=myList.push([a,b]);
 document.getElementById("demo1").innerHTML=myList.toString();
// document.getElementById("demo").innerHTML=x;

}
function remove()
{var l= parseInt(myList.length);
  myList.pop();
document.getElementById("demo1").innerHTML=myList.toString();
}
 function sh()
 {
   myList.shift();
   document.getElementById("demo1").innerHTML=myList.toString();
 }
 function unsh()
 {var p=document.getElementById("unf").value;
 var q=parseInt(document.getElementById("unq").value);
   myList.unshift([p,q]);
   document.getElementById("demo1").innerHTML=myList.toString();
 }
