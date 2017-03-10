
var str1,allText;
// function aa()
// {
function readTextFile()
{
return new Promise(function(resolve, reject) {
  var rawFile = new XMLHttpRequest();

 rawFile.open("GET","abc.text", true);
 rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
               //alert(allText);
                str1=allText.toString();
               resolve(str1);
               return str1;
          }else {
            reject("error");
          }
      }
};
   rawFile.send();
});

}
var d;
var a=function()
{
readTextFile().then(function (data){
console.log(data);
//
 d= data;
 document.getElementById("demo").innerHTML=d;

})
 }
