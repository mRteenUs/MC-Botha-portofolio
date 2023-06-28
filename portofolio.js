 

 document.getElementById("send-email").onclick = function(){
    const iptNameSurname =document.getElementById("nameSurname");
    const iptEmail =document.getElementById("email");
    const iptMessage = document.getElementById("message");

    const nameSurname = iptNameSurname.value;
    const email = iptEmail.value;
    const message = iptMessage.value;

    
    
    var probCount = 0;
    if(clearInput(nameSurname) == false){
    probCount += 1;
    iptNameSurname.style.border= '3px solid red';
    }
    if(clearInput(email) == false){
        probCount += 1; 
        iptEmail.style.border= '3px solid red';   
    }
    if(clearInput(message) == false){
        probCount += 1; 
       iptMessage.style.border= '3px solid red';  
    }

    if(probCount == 0){
        
        Email.send({
            SecureToken :"624a2fc1-fd11-4227-964e-eef57a9f90b2",
            To : 'mcbotha.2005@gmail.com',
            From : email,
            Subject : "Contact form | Portofolio",
            Body : "Name and surname: "+nameSurname+"<br>Message: "+message
        }).then(
          message => alert("Email has been sent to MC Botha. Thank you!")
        );
    
        iptNameSurname.value = '';
        iptEmail.value = '';
        iptMessage.value = '';
    }}
    
 

 function clearInput(text){
    if(text == ''){
        return false;
    }

 }

 document.getElementById("nameSurname").onclick = function(){
    document.getElementById("nameSurname").style.border='2px solid black';
 }

 document.getElementById("email").onclick = function(){
    document.getElementById("email").style.border='2px solid black';
 }

 document.getElementById("message").onclick = function(){
    document.getElementById("message").style.border='2px solid black';
 }

 document.getElementById("project-1").onclick = function(){
    alert("Project not available");
 }
 document.getElementById("project-2").onclick = function(){
    alert("Project not available");
 }
 document.getElementById("project-3").onclick = function(){
    alert("Project not available");
 }
 document.getElementById("project-4").onclick = function(){
    alert("Project not available");
 }