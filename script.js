function processIndigestionForm(input1,input2,input3)
{
	var letters = /^[A-Za-z]+$/;  
      if(!input1.value.match(letters))   
      {  
      alert('Your name possibly cant have numbers');  
      return false;  
      }  

      if(input2.value.length <6)
      {
      alert('The longer the better');  
      return false; 
      }
      if(input2.value===input3.value)
      {

      }
      else
      {
      alert('Reconfirm');  
      return false; 
      }

	var fn=document.IndigestionApplicants.firstname.value;
	var em=document.IndigestionApplicants.usremail.value;
	var pass=document.IndigestionApplicants.pwd.value;
	var passconf=document.IndigestionApplicants.pwdconfirm.value;
	var prob=document.IndigestionApplicants.problem.value;

	var disp = '<div> First Name: ' + fn +'<br>'+'Email:'+em+'<br>'+'Problem:'+prob+'<br>'+ '</div>';

    document.getElementById("patientform").innerHTML += disp;
    

}
  
