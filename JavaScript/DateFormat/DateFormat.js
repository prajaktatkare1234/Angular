var Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var s1,s2;
var date1;
var date2;
var d1;
var d2;
function a()
{
  if(d1.getDate()==1 || d1.getDate()==21 || d1.getDate()==31)
  {
    s1=d1.getDate()+"st";
  }
  if(d2.getDate()==1 || d2.getDate()==21 || d2.getDate()==31)
  {
    s2=d2.getDate()+"st";
  }
  if(d1.getDate()==2 || d1.getDate()==22 )
  {
    s1=d1.getDate()+"nd";
  }
  if(d2.getDate()==2 || d2.getDate()==22 )
  {
    s2=d2.getDate()+"nd";
  }
  if(d1.getDate()==3 || d1.getDate()==23)
  {
    s1=d1.getDate()+"rd";
  }

  if(d2.getDate()==3 || d2.getDate()==23)
  {
    s2=d2.getDate()+"rd";
  }
  if(d1.getDate()!==1 && d1.getDate()!==2 && d1.getDate()!==3 && d1.getDate()!==21 && d1.getDate()!==22 && d1.getDate()!==31)
  {
    s1=d1.getDate()+"th";
  }
  if(d2.getDate()!==1 && d2.getDate()!==2 && d2.getDate()!==3 && d2.getDate()!==21 && d2.getDate()!==22 && d2.getDate()!==31)
  {
    s2=d2.getDate()+"th";
  }
}
function mydate()
{
   date1=document.getElementById('d1').value;
   date2=document.getElementById('d2').value;
   d1 = new Date(date1);
   d2= new Date(date2);
  document.getElementById('p1').innerHTML=" ";
  if(d1.getYear()==d2.getYear())
  {
    document.getElementById('p1').innerHTML=" ";
    if(d1.getMonth()==d2.getMonth())
    {
      var x=a();
      document.getElementById('p1').innerHTML+=Months[d1.getMonth()]+" "+s1+","+s2;
    }
    if(d1.getMonth()!==d2.getMonth() )
    {
      var x=a();
        document.getElementById('p1').innerHTML+=Months[d1.getMonth()]+" "+s1+","+Months[d2.getMonth()]+" "+s2;
    }


}
  if(d1.getYear()!==d2.getYear())
  {
    var x=a();
      document.getElementById('p1').innerHTML+=d1.getFullYear()+" "+Months[d1.getMonth()]+" "+s1+","+d2.getFullYear()+" "+Months[d2.getMonth()]+" "+s2;
  }
}
