function goBack() {
  window.history.back()
}
function myFunction() {
  document.getElementById("login_form").reset();
}

function validateForm() {
  var x = document.forms["login_form"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}