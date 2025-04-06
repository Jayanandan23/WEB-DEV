function login()
{
	let email=document.getElementById("Email").value;
	let pass = document.getElementById("pswrd").value; 
	let patt= /^.+@.+$/; 
	if(email =="") 
	{ 
		alert("Email is empty"); 
	}
	else if (!patt.test(email)) 
	{
		alert("Invalid Email Format"); 
	} 
	else if (pass =="") 
	{  
		alert("password is empty"); 
	}
	else if (pass.length < 6||pass.length >12) 
	{
		alert("Password must be between 6 and 12 characters"); 
	}
	else 
	{ 
		alert("Form Validation Success"); 
	} 
}