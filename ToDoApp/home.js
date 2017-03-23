

function validate()
{

if(document.getElementById("pwd").value==document.getElementById("repwd").value)
  {
   var obj={name:document.getElementById("name").value,email:document.getElementById("email").value,
   pwd:document.getElementById("pwd").value,repwd:document.getElementById("repwd").value};
   var temp = JSON.parse(localStorage.getItem("data")) || [];
   temp.push(obj);
   localStorage.setItem("data", JSON.stringify(temp));
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
    var e= localStorage.getItem("data");
    var x=JSON.parse(e);
    for (var i in x)
      {
//console.log(x[i]);
        if(x[i].name==document.getElementById("Username").value && x[i].pwd==document.getElementById("lpwd").value)
          {
          alert("logged in successfully");
          welcome();
          break;
          }
      }

    if(x[i].name!==document.getElementById("Username").value && x[i].pwd!==document.getElementById("lpwd").value)
      {
        alert("invalid user");
      }
  }


  function welcome()
  {
    // alert("hii");
    $.ajax({
      url:"welcome.html",
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
