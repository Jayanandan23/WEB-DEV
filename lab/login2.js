function login() {
    let pass=document.getElementById("pswrd").value; 
    if(pass.trim()==="")
    {
        alert("Password is required");
    }
    let email=document.getElementById("Email").value;
    if(email.trim()=="")
    {
         alert("Email is required ");
    }
}