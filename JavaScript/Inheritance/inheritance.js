
class books
{
  constructor(bname)
  {
    this.bname=bname;
      console.log("name of the book : "+this.bname);

  }

  bdetail()
  {
    alert("name of the book : "+this.bname);
  }
}
class topic extends books
{
  t_detail(topic_name)
  {
    this.topic_name=topic_name;
//  console.log("name of the book : "+this.bname);
       console.log(this.topic_name);

  }
}

// var t= new topic('dsklfds');
// t.topic('social');

var text={
  "book":[{"name":"java","topic":["Inheritance","Abstraction"]

  },
  {"name":"javascript","topic":["Inheritance","objects"]

  }]
}
function aa()
{
  document.getElementById('id').innerHTML=" ";

 for(var i=0;i<text.book.length;i++)
 {  var t=new topic(text.book[i].name);
   document.getElementById('id').innerHTML+= "name of the book : "+text.book[i].name+"<br>";

  for(var j=0;j<text.book[i].topic.length;j++)
 {
   document.getElementById('id').innerHTML+= text.book[i].topic[j]+"<br>";

  t.t_detail(text.book[i].topic[j])
 }
}
}
function java()
{  document.getElementById('id').innerHTML=" ";
  document.getElementById('id').innerHTML+= "name of the book : "+text.book[0].name+"<br>";
  for(var j=0;j<text.book[0].topic.length;j++)
  {
    var a= document.createElement("a");
    var b= document.createElement("br");

  a.textContent=text.book[0].topic[j]+"    ";
  a.setAttribute("href","#");
  a.appendChild(b);
   document.getElementById('id').appendChild(a);

}
}
function javascript()
{
 document.getElementById('id').innerHTML=" ";
  document.getElementById('id').innerHTML+= "name of the book : "+text.book[1].name+"<br>";
  for(var j=0;j<text.book[1].topic.length;j++)
  {
    var a= document.createElement("a");
    var b= document.createElement("br");
    a.textContent=text.book[1].topic[j]+"   ";
    a.setAttribute("href","#");
    a.appendChild(b);
     document.getElementById('id').appendChild(a);

}
}
