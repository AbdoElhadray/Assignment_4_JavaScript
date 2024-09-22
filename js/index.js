
var NameInput=document.getElementById('Name');
var EmailInput=document.getElementById('Email');
var PasswordInput=document.getElementById('Password');

var SignINEmail=document.getElementById('SignInEmail');
var SignINPass=document.getElementById('SignINPass');

var signUpDataContainer;

if(localStorage.getItem('signUpData') == null ){
    signUpDataContainer=[] ;  
}
else{
    signUpDataContainer=JSON.parse(localStorage.getItem('signUpData'));
}



function signIn(){


    if(SignINEmail.value== false || SignINPass.value==false)
    {

        required.classList.replace('d-none','d-block');
        incorrect.classList.replace('d-block','d-none');
    }

    else{

        if(validateSignInInputs()==true)
        {
        
            for(var i=0;i<signUpDataContainer.length;i++)
            {
                if (SignINEmail.value==signUpDataContainer[i].email && SignINPass.value== signUpDataContainer[i].password)
                {
                
                
                    Welcome.classList.replace('d-none','d-block');
                    SignINPage.classList.replace('d-block','d-none');
                required.classList.replace('d-block','d-none');
                incorrect.classList.replace('d-block','d-none');
                document.getElementById('welcomeUser').innerHTML= "Welcome "+(signUpDataContainer[i].name);
               
                
            }
            else{
            
                incorrect.classList.replace('d-none','d-block');
                required.classList.replace('d-block','d-none');
               
            
            }
            }
        
        
        }

    }




     




}

function setToSignUp(){

    SignINPage.classList.replace('d-block','d-none');
    SignUpPage.classList.replace('d-none','d-block');

}

function signUp(){


    if(EmailInput.value==false || NameInput.value==false|| PasswordInput.value==false)
    {

        required2.classList.replace('d-none','d-block');
        exsit.classList.replace('d-block','d-none');

    }

    else{

        if(validateSignUpInputs()==true)
        {
            var SignUpdata={
       
                email:EmailInput.value,
                name:NameInput.value,
                password:PasswordInput.value,
                
            }
            if(checkEmail()==true)
            {


                exsit.classList.replace('d-none','d-block');
                Success.classList.replace('d-block','d-none');
                required2.classList.replace('d-block','d-none');
                invalid.classList.replace('d-block','d-none');
            }
            
            else{
                if(validateEmail()==true){
                    signUpDataContainer.push(SignUpdata);
                    localStorage.setItem("signUpData", JSON.stringify(signUpDataContainer) );
                    clearSignUpForm();
                    Success.classList.replace('d-none','d-block');
                    required2.classList.replace('d-block','d-none');
                    exsit.classList.replace('d-block','d-none');
                    invalid.classList.replace('d-block','d-none');


                }
                else{
                    invalid.classList.replace('d-none','d-block');
                    required2.classList.replace('d-block','d-none');
                    exsit.classList.replace('d-block','d-none');
                    Success.classList.replace('d-block','d-none');
                }

               
            }
     
             
            }
          


        
        }


    }

function signINBack()
{

    SignINPage.classList.replace('d-none','d-block');
    Welcome.classList.replace('d-block','d-none');
    SignINEmail.value="";
    SignINPass.value="";
    required.classList.replace('d-block','d-none');
    incorrect.classList.replace('d-block','d-none');


}


function checkEmail()

{

    for(var i=0; i < signUpDataContainer.length; i++)
    {
        if(EmailInput.value==signUpDataContainer[i].email)
        {
            return true;

        }
    }
}

function validateSignInInputs()
{

    var regexsignIn=/[A-Za-z]|[1-9]/;


    if(regexsignIn.test(SignINEmail.value)==true && regexsignIn.test(SignINPass.value)==true)
    {

        return true;
    }
    else 
    {

     return false;
    }



}

function clearSignUpForm(){

    NameInput.value="";
    EmailInput.value="";
    PasswordInput.value="";
    Success.classList.replace('d-block','d-none');
}






function validateSignUpInputs(){

var regexsignUp=/[A-Za-z]|[1-9]/;


if(regexsignUp.test(NameInput.value)==true && regexsignUp.test(EmailInput.value)==true && regexsignUp.test(PasswordInput.value)==true)
{

    return true;

}

else{
    return false;
}


}


function validateEmail()
{


    var regexEmail=/[A-Za-z0-9.]@[A-Za-z0-9.]/;

    return regexEmail.test(EmailInput.value);
}