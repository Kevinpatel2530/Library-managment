function goBack() {
  window.history.back()
}
function myFunction() {
  document.getElementById("login_form").reset();
}
function validateForm() {
  var x = document.forms["login_form"]["email"].value;
  var y = document.forms["login_form"]["psw"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  if (y == "") {
    alert("password must be filled out");
    return false;
  }
  return true;
}

function validateEmail() {
    var emailID = document.forms["login_form"]["email"].value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
         
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        document.forms["login_form"]["email"].focus() ;
        return false;
    }

    return( true );
 }