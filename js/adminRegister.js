window.onload=getSession();
function getSession(){
    if(localStorage.getItem("user")!==null){
        let login_href=document.getElementById("login-href");
        login_href.innerText="Hello,"+ JSON.parse(localStorage.getItem("user")).name;
        let list=document.getElementById("contact-list");
        let item=document.createElement("li");
        let item2=document.createElement("li");
        item2.innerHTML="Admin Page";
        item2.setAttribute('onclick',"redirectPage('settings.html')");
        item2.setAttribute("cursor","pointer");
        list.appendChild(item2);
        item.innerHTML="LOG OUT";
        item.setAttribute("onclick","logOut()");
        item.setAttribute("cursor","pointer");
        list.appendChild(item);
    }
}
function logOut(){
    localStorage.removeItem("user")
    window.location="index.html"
}
function isCorrect(username,fullname,email,password,confirmPassword,number,address,country,region){
    let check = true;
    if(username.value===''){
        let userNof=document.getElementById("userNofication");
        userNof.innerHTML=messageAlert("user name can't empty");
        check=false;
    }
    if(fullname===' '){
        let nameNof=document.getElementById("nameNofication");
        nameNof.innerHTML=messageAlert("full name can't empty");
        check=false;
    }
    if(number.value===''){
        let phoneNumberNof=document.getElementById("phoneNumberNofication");
        phoneNumberNof.innerHTML=messageAlert("phone number can't empty");
        check=false;
    }
    if(confirmPassword.value===''){
        let confirmPasswordNof=document.getElementById("confirmPasswordNofication");
        confirmPasswordNof.innerHTML=messageAlert("confirm password is not samiliar");
        check=false;
    }
    if(password.value===''){
        let passwordNof=document.getElementById("passwordNofication");
        passwordNof.innerHTML=messageAlert("password can't empty");
        check=false;
    }
    if(email.value===''){
        let emailNof=document.getElementById("emailNofication");
        emailNof.innerHTML=messageAlert("email can't empty");
        check=false;
    }
    if(address.value===''){
        let addNof=document.getElementById("addressNofication");
        addNof.innerHTML=messageAlert("address can't empty");
        check=false;
    }
    if(country.value===''){
        let countryNof=document.getElementById("countryNofication");
        countryNof.innerHTML=messageAlert("country can't empty");
        check=false;
    }
    if(region.value===''){
        let regionNof=document.getElementById("regionNofication");
        regionNof.innerHTML=messageAlert("region can't empty");
        check=false;
    }
    return check;
}
function Register(){
    let inputs=document.getElementsByClassName("form-control");
    let name=inputs[1].value+' '+inputs[0].value;
    let username=inputs[2];
    let password=inputs[3];
    let confirmPassword=inputs[4];
    let sex=inputs[5];
    let phone=inputs[6];
    let address=inputs[7];
    let email=inputs[8];
    let country=inputs[9];
    let region=inputs[10];

    if(isCorrect(username,name,email,password,confirmPassword,phone,address,country,region)){
        let userData=JSON.parse(localStorage.getItem("userData"));
        let role;
        if((username.value).includes("admin"))role="admin";
        else role="user";
        userData.push({
            "user":username.value,
            "name":name,
            "phone":phone.value,
            "sex":sex.value,
            "Địa chỉ":address.value,
            "email":email.value,
            "password":password.value,
            "status":"working",
            "Đất nước":country.value,
            "Tôn giáo":region.value,
            "role":role
        })
        localStorage.removeItem("userData");
        localStorage.setItem("userData",JSON.stringify(userData));
        sessionStorage.setItem('action','3');
        window.location="settings.html";
    };
}
function messageAlert(messageAlert){
    let message="<span class='warning-alert' style='margin-left:145px' > <strong>"+messageAlert+"</strong> </span>";
    return message;
}
