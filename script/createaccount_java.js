function validate() {
      
         var e=document.forms["myForm"]["email"];
         var p=document.forms["myForm"]["psw"];

         if( e.value == "" ) {
            window.alert( "Please provide your email!" );
            e.focus() ;
            return false;
         }
         if( p.value == "" ) {
            window.alert( "Please provide your password!" );
            p.focus() ;
            return false;
         }
         
         if( document.forms["myForm"]["name"].value == "" ) {
            window.alert( "Please provide your name!" );
            window.document.myForm.name.focus() ;
            return false;
         }
         if( document.forms["myForm"]["sem"].value == "" ) {
            window.alert( "Please provide your sem!" );
            document.myForm.sem.focus() ;
            return false;
         }
         return true;
         
}


function validateEmail() {
   var emailID = document.forms["myForm"]["email"].value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
         
   if (atpos < 1 || ( dotpos - atpos < 2 )) {
      alert("Please enter correct email ID");
      document.forms["login_form"]["email"].focus() ;
      return false;
   }

   return( true );
}
function goBack() {
  window.history.back()
}