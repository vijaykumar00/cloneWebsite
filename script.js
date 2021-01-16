function validateForm(){
    var name=document.getElementById("fullname").value;
    var email=document.getElementById("email").value;
    var submit=document.getElementById("btn").value;
    if(name =="" && email ==""){
        alert("Name and email should be filled out")
    }else{
document.write(submit);
    }


  
    

}
