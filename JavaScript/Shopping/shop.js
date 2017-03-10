var myList = [["chocolate",2],["almond",6],["mango",5]];

function add()
{
  var a=document.getElementById("f").value;
  var b=parseInt(document.getElementById("q").value);
  var l= parseInt(myList.length);
 var x=myList.push([a,b]);
// document.getElementById("demo1").innerHTML=myList.toString();

// document.getElementById("demo").innerHTML=x;

}
function remove()
{var l= parseInt(myList.length);
  myList.pop();
//document.getElementById("demo1").innerHTML=myList.toString();
}
 function sh()
 {
   myList.shift();
  // document.getElementById("demo1").innerHTML=myList.toString();
 }
 function unsh()
 {var p=document.getElementById("f").value;
 var q=parseInt(document.getElementById("q").value);
   myList.unshift([p,q]);
   //document.getElementById("demo1").innerHTML=myList.toString();
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














//  function display()
//  {
// if (myList.length==0) {
//   alert('nothing to display');
// }
// var tab = document.getElementById("tab");
// for(i=0;i<myList.length;i++){
//   list=myList[i];
//     var para1 = document.createElement("tr");
//     for(j=0;j<list.length;j++){
//
//       var para=document.createElement("td");
//       para.textContent=list[j];
//       para1.appendChild(para);
//     }
//     tab.appendChild(para1);
//
//   }
// var element = document.getElementById("div1");
// element.appendChild(tab);
// if(myList.length!==0)
// {
//   var hr1=document.createElement("hr");
//   tab.appendChild(hr1);
// }
//
// }
