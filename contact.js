function setError(input,message){
    input.style.border="1px solid red";
    const formcontrol=input.parentElement;
    const small1=formcontrol.querySelector("small");
    small1.className="smallshown";
    small1.innerHTML=message;
    let submitbtn=document.getElementById("btn");
    submitbtn.disabled=true;

}
function setSuccess(input){
    input.style.border="1px solid green";
    const formcontrol=input.parentElement;
    const small1=formcontrol.querySelector("small");
    small1.className="smallhidden";
    small1.innerHTML=message;
    let submitbtn=document.getElementById("btn");
    submitbtn.disabled=false;

}
function firstnamevalid(){
    let firstname=document.getElementById("firstName");
    if(firstname.value.trim() ===""){
       setError(firstname,"First Name is empty");
    }
    else{
        setSuccess(firstname);
    }
}
function lastnamevalid(){
    let lastname=document.getElementById("lastName");
    if(lastname.value.trim()===""){
        setError(lastname,"Last Name is empty");
    }
    else{
        setSuccess(lastname);
    }
}
function phonevalid(){
    let phonenumber=document.getElementById("phone");
    if(phonenumber.value.trim()===""){
        setError(phonenumber,"Phone Number is invalid");
    }
    else{
        setSuccess(phonenumber);
    }
}
function emailvalid(){
    let email=document.getElementById("email");
    if(email.value.trim()==="" || !email.value.trim()==="@" || !email.value.trim()==="."){
        setError(email,"Email is invalid");
    }
    else{
        setSuccess(email);
    }
}
function messagevalid(){
    let message=document.getElementById("message");
    if(message.value.trim()==="" ){
        setError(message,"message is empty");
    }
    else{
        setSuccess(message);
    }
}