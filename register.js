const state=document.getElementById("State")
const city=document.getElementById("city")

const AP=["Vizianagaram","Visakhapatnam","Parvathipuram Manyam","Alluri Sitharama Raju"]
const KL=["Kottayam","Kollam","Thiruvananthapuram","Ernakulam"]
const TN=["Chennai","Coimbatore","Salem","Kanjipuram"]
const KKA=["Bangalore","Vijayapura","Udupi","Belagavi"]

function dropdown(){
    city.innerHTML="";

    if(state.value=="KL"){
        for(var i=0;i<KL.length;i++){
            let newOption=document.createElement("option");
            newOption.value=KL[i];
            newOption.textContent=KL[i];
            city.appendChild(newOption);
        }
    }
    else if(state.value=="AP"){
        for(var i=0;i<AP.length;i++){
            let newOption=document.createElement("option");
            newOption.value=AP[i];
            newOption.textContent=AP[i];
            city.appendChild(newOption);
        }
    }
    else if(state.value=="TN"){
        for(var i=0;i<TN.length;i++){
            let newOption=document.createElement("option");
            newOption.value=TN[i];
            newOption.textContent=TN[i];
            city.appendChild(newOption);
        }
    }
    else{
        for(var i=0;i<KKA.length;i++){
            let newOption=document.createElement("option");
            newOption.value=KKA[i];
            newOption.textContent=KKA[i];
            city.appendChild(newOption);
        }
    }
}
state.addEventListener("change",dropdown);

function setError2(input,message){
    input.style.border="1px solid red";
    const registerform=input.parentElement;
    const small=registerform.querySelector("small");
    small.className="smallshown";
    small.innerHTML=message;
    let submitbtn=document.getElementById("signup");
    submitbtn.disabled=true;

}
function setSuccess2(input){
    input.style.border="1px solid green";
    const registerform=input.parentElement;
    const small=registerform.querySelector("small");
    small.className="smallhidden";
    small.innerHTML=message;
    let submitbtn=document.getElementById("signup");
    submitbtn.disabled=false;

}
function firstNamevalid(){
    let firstName=document.getElementById("Firstname");
    if(firstName.value.trim()===""){
        setError2(firstName,"First Name is empty");
    }
    else{
        setSuccess2(firstName);
    }
}
function lastNamevalid(){
    let lastName=document.getElementById("Lastname");
    if(lastName.value.trim()===""){
        setError2(lastName,"Last Name is empty");
    }
    else{
        setSuccess2(lastName);
    }
}
function dateofBirthvalid(){
    let dateofBirth=document.getElementById("date of Birth");
    if(dateofBirth.value.trim()===""){
        setError2(dateofBirth,"Date of Birth is required");
    }
    else{
        setSuccess2(dateofBirth);
    }
}
function agevalid(){
    let age=document.getElementById("Age");
    if(age.value.trim()===""){
        setError2(age,"Age is empty");
    }
    else{
        setSuccess2(age);
    }
}
function gendervalid(){
    let gender=document.getElementById("Gender");
    if(gender.value.trim()===""){
        setError2(gender,"Gender is empty");
    }
    else{
        setSuccess2(gender);
    }
}
function phonevalid(){
    let phone=document.getElementById("PhoneNumber");
    if(phone.value.trim()===""){
        setError2(phone,"Phone Number is empty");
    }
    else{
        setSuccess2(phone);
    }
}
function mailvalid(){
    let email=document.getElementById("Gender");
    if(email.value.trim()==="" || !email.value.trim()==="@" || !email.value.trim()==="."){
        setError2(email,"Email is empty");
    }
    else{
        setSuccess2(email);
    }
}
function addressvalid(){
    let address=document.getElementById("Address");
    if(address.value.trim()===""){
        setError2(address,"Address is empty");
    }
    else{
        setSuccess2(address);
    }
}
function statevalid(){
    let state=document.getElementById("State");
    if(state.value.trim()===""){
        setError2(state,"State is empty");
    }
    else{
        setSuccess2(state);
    }
}
function usernamevalid(){
    let username=document.getElementById("Username");
    if(username.value.trim()===""){
        setError2(username,"Username is empty");
    }
    else{
        setSuccess2(username);
    }
}
function cpasswordvalid(){
    let password=document.getElementById("password");
    let cpassword=document.getElementById("Password2")
    if(password.value.trim()!=""){
        if(password.value.trim()===cpassword.value.trim())
        {
        setSuccess2(cpassword);
        }
    else{
        setError2(cpassword,"password  not matched");
       }
    }
}