
function formvalidate()                                    
{ 

    var f_name = document.forms["comment_form"]["f_name"];               
    var l_name = document.forms["comment_form"]["l_name"];    
    var email = document.forms["comment_form"]["email"];  
    var comment =  document.forms["comment_form"]["comment"];  


    if (f_name.value == "")                                  
    {
        alert("Please enter your first name."); 
        f_name.focus(); 
        return false; 
    }


    var num = (f_name.value).length;
   
    if((f_name.value).length>50)
    {
        alert("length of First name should not exceed to 50 characters"); 
        f_name.focus(); 
        return false; 
    }


    if (l_name.value == "")                                  
    {
        alert("Please enter your last name."); 
        l_name.focus(); 
        return false; 
    }


    if((l_name.value).length>50)
    {
        alert("length of Last name should not exceed to 50 characters"); 
        l_name.focus(); 
        return false; 
    }

    if (email.value == "")                                  
    {
        alert("Please enter your E-mail address. "); 
        l_name.focus(); 
        return false; 
    }


    if (comment.value == "")                                  
    {
        alert("Please enter a comment."); 
        l_name.focus(); 
        return false; 
    }


    if (!validateEmail(email.value))                                  
    { 
        alert("Please enter valid email."); 
        email.focus(); 
        return false; 
    }

      return true;
}


function validateEmail(email) 
{
    var re = /\S+@\S+/;
    return re.test(email);
}