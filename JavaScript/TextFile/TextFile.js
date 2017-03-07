

function getText()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readystate==4 && this.status==200)
    {
      document.getElementById("demo").innerHTML=this.resposeText;
    }

};
xhttp.open("GET","abc.text",true);
xhttp.send();

  }
