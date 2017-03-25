


$(document).ready(function(){

$('#b2').click(function(){
  register();
});

$('#b1').click(function(){
  login();
});

$("#reg").click(function(){


var name=$('#name').val();
var email=$('#email').val();
var pwd=$('#pwd').val();
var repwd=$('#repwd').val();
if(pwd==repwd)
{
   var obj={name:name,email:email,
   pwd:pwd,repwd:repwd};

   var temp = JSON.parse(localStorage.getItem("data")) || [];
   temp.push(obj);
      alert("registered Successfully");
   localStorage.setItem("data", JSON.stringify(temp));

}
else
{
alert("passwords are not same");
}
});



$('#email').keyup(function() {
    $('span.error-keyup-7').remove();
    var inputVal = $(this).val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-7">Invalid Email </span>');
    }
});




$('#log').click(function(){
  //alert("hii");
  var User= localStorage.getItem("data");
  var UserObject=JSON.parse(User);
  for (var i in UserObject)
    {
      // alert("hii");
console.log(UserObject[i]);
      if(UserObject[i].name==$("#Username").val() && UserObject[i].pwd==$("#lpwd").val())
        {
        alert("logged in successfully");
        welcome();
        break;
        }
    }

  if(UserObject[i].name!==$("#Username").val() && UserObject[i].pwd!==$("#lpwd").val())
    {
      alert("invalid user");
    document.getElementById("Username").value="";
      document.getElementById("lpwd").value="";
    }
});

});

  function welcome()
  {
    // alert("hii");
    $.ajax({
      url:"html/welcome.html",
      type:"GET",
      datatype:"html",
      success: function( response ) {
      console.log('the page was loaded', response);
      $('body').html(response);
    },
    error: function( error ) {
    console.log('the page was not loaded', response);
    },
    complete : function( xhr, status ) {
      console.log("the request is complete!");
    },

  });
  }
function logout()
{
  $.ajax({
    url:"home.html",
    type:"GET",
    datatype:"html",
    success: function( response ) {
    console.log('the page was loaded', response);
    $('body').html(response);
  },
  error: function( error ) {
  console.log('the page was not loaded', response);
  },
  complete : function( xhr, status ) {
    console.log("the request is complete!");
  },

});
}


function register()
{
  $.ajax({
    url:"/html/Registration.html",
    type:"GET",
    datatype:"html",
    success: function( response ) {
    console.log('the page was loaded', response);
    $('body').html(response);
  },
  error: function( error ) {
  console.log('the page was not loaded', response);
  },
  complete : function( xhr, status ) {
    console.log("the request is complete!");
  },

});
}
function login()
{
  $.ajax({
    url:"/html/login.html",
    type:"GET",
    datatype:"html",
    success: function( response ) {
    console.log('the page was loaded', response);
    $('body').html(response);
  },
  error: function( error ) {
  console.log('the page was not loaded', response);
  },
  complete : function( xhr, status ) {
    console.log("the request is complete!");
  },

});
}
