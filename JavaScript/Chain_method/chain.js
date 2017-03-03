

var r;
  var calculate=function()
  {
       var firstno=function(x)
      {
      this.x=x;
      return this;
      };
       var secondno=function(y)
      {
        this.y=y;
        return this;
      };
      var sum=function()
      {
          r=this.x+this.y;
          //console.log(r);
      };

return{firstno:firstno,secondno:secondno,sum:sum};
};
function add()
{
  var a=parseInt(document.getElementById("no1").value);
  var b=parseInt(document.getElementById("no2").value);
  var p=calculate().firstno(a).secondno(b).sum();
document.write(r);
}
