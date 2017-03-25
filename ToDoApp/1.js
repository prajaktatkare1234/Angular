function validate()
{

if(document.getElementById("pwd").value==document.getElementById("repwd").value)
  {
   var obj={name:document.getElementById("name").value,email:document.getElementById("email").value,
   pwd:document.getElementById("pwd").value,repwd:document.getElementById("repwd").value};
   var temp = JSON.parse(localStorage.getItem("data")) || [];
   temp.push(obj);
   localStorage.setItem("data", JSON.stringify(temp));
  //alert("Registered Successfully");
   }
 else
  {
   alert("password do not match");
   document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("pwd").value="";
   document.getElementById("repwd").value="";
  }
}
function login()
  {
    var User= localStorage.getItem("data");
    var UserObject=JSON.parse(User);
    for (var i in UserObject)
      {
//console.log(x[i]);
        if(UserObject[i].name==document.getElementById("Username").value && UserObject[i].pwd==document.getElementById("lpwd").value)
          {
          // alert("logged in successfully");
          welcome();
          break;
          }
      }

    if(UserObject[i].name!==document.getElementById("Username").value && UserObject[i].pwd!==document.getElementById("lpwd").value)
      {
        alert("invalid user");
      }
  }


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
