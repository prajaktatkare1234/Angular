
var str1,allText,d;

function get_text()
{
return new Promise(function(resolve, reject) {
  var xhttp = new XMLHttpRequest();

xhttp.open("GET","abc.text", true);
xhttp.onreadystatechange = function ()
  {
      if(xhttp.readyState === 4)
      {
          if(xhttp.status === 200 || xhttp.status == 0)
          {
              allText = xhttp.responseText;

                str1=allText.toString();
               resolve(str1);
               return str1;
          }else {
            reject("error");
          }
      }
};
   xhttp.send();
});
}









 function linkedlist()
 {
      this.head= null;
     this.tail=null;
  }

linkedlist.prototype.insert= function(value)
    {
      var temp={
      dt:value,
      next:null
    }
    if(this.head==null)
    {
      this.head= temp;
      return;
    }
    var temp1= this.head;

    while(temp1.next!==null)
    {
      temp1=temp1.next;
    }
    temp1.next=temp;

      };


linkedlist.prototype.search = function(value)
{
 var c=false;
  var temp
  {
    dt:value,next=null
  }
  temp=this.head;

  while(temp.next!=null)
  {
    if(temp.dt==value)
    {
    alert("found");
    break;
    }
    temp=temp.next;

  }

  alert(" not found");


};

linkedlist.prototype.remove = function(value)
{
 var temp
 {
   dt=value,
   next=null
 }
 var follow
 {
   dt:value,
   next=null
 }
 temp=follow=this.head;
 while(temp.next!=null)
 {
   if(temp.dt==value)
 {
   break;
 }

   follow=temp;
   temp= temp.next;
 }

 follow.next=temp.next;
};

linkedlist.prototype.display = function()
{
  if(this.head==null)
  {
    document.getElementById("demo").innerHTML="list Empty";
  }
  var temp
  {
    dt=null,
    next=null
  }
  document.getElementById("demo1").innerHTML=" ";
  temp=this.head;
  while(temp.next!=null)
  {

    document.getElementById("demo1").innerHTML+=temp.dt + "<br>";
      temp=temp.next;
  }
  document.getElementById("demo1").innerHTML+=temp.dt;
};
var l = new linkedlist();
function a()
{


      get_text().then(function (data){
      console.log(data);
      d= data;
    //  document.getElementById("demo").innerHTML=d;
      var s=d.split(" ");

      for(var i in s)
      {
        l.insert(s[i]);

      }
       l.display();


        })

}
function push()
{
    document.getElementById("demo").innerHTML=" ";
  var x=document.getElementById("push").value;
  l.insert(x);
  l.display();
}
function pop()
{
    document.getElementById("demo").innerHTML=" ";
  var x=document.getElementById("push").value;
  l.remove(x);
     l.display();
}
function s()
{
  var x=document.getElementById("push").value;
    document.getElementById("demo").innerHTML=" ";
l.search(x);
   l.display();
}
function d()
{
     l.display();
}
