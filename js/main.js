var index = 1;
var i = 1;
// window.onload(function(){
//     if(sessionStorage.getItem("username")!==null){
//         let login_href=document.getElementById("login-href");
//         login_href.innerText=sessionStorage.getItem("username");
//     }
// })
window.onload=setUser();
function setUser(){
    if(sessionStorage.getItem("userData")==null){
        let userData=[
            {
                "user":"hiep",
                "password":"1",
                "name":"Nguyễn Hoàng Hiệp",
                "email":"nguyenhoanghiep478@gmail.com",
                "date":"31/08/2003",
                "sex":"nam",
                "role":"user"
            },
            {
                "user":"admin",
                "password":"1",
                "name":"admin",
                "email":"nguyenhoanghiep478@gmail.com",
                "date":"31/08/2003",
                "sex":"nam",
                "role":"admin",
            }
        ];
       
        sessionStorage.setItem("userData",JSON.stringify(userData));
    }
    
}
function changeimg () {
    var imgs = ["../slideshow_1.webp","../slideshow_2.webp","../slideshow_3.webp"];
    document.getElementById("img-slider").src = imgs[index];
    index++;
    if (index == 3)
    {
        index = 0;
    }
}
setInterval(changeimg,2000);

function showDiv (k)
{
    var imgs = ["../slideshow_1.webp","../slideshow_2.webp","../slideshow_3.webp"];
    document.getElementById("img-slider").src = imgs[k-1];
}

function showDivs(k) {
    var i;
    var imgs = ["../slideshow_1.webp","../slideshow_2.webp","../slideshow_3.webp"];
    if (k > 2) {index = 1}
    if (k < 1) {index = 2}
    for (i = 0; i < 3; i++) {
      document.getElementById("img-slider").src = imgs[i];
    }
    document.getElementById("img-slider").src = imgs[index-1];  
  }

function plusDivs (k)
{
    showDivs(index += k);
}

function logOut(){
    sessionStorage.removeItem("user")
    window.location="index.html"
}
const loginbtn = document.querySelector(".js-login");
const modal = document.querySelector(".js-modal");
const modalformlogin = document.querySelector(".js-modal-login");
const modalformsingup = document.querySelector(".js-modal-singup")
const modalclose = document.querySelectorAll(".js-modal-close");
const nextLink = document.querySelector(".nextLine");
const turnBack = document.querySelector(".modal-turn-back");
loginbtn.onclick = () => {
    modalformlogin.style.display="block";
    modalformsingup.style.display="none";
}
nextLink.addEventListener("click",() => {
    modalformlogin.style.display = "none";
    modalformsingup.style.display = "block";
})

turnBack.addEventListener("click",()=>{
    modalformlogin.style.display="block";
    modalformsingup.style.display="none";
})

loginbtn.addEventListener("click",()=>{
    modal.classList.add("open");
})

modal.addEventListener("click",()=>{
    modal.classList.remove("open");
})

modalclose.forEach((item)=>{
    item.onclick = function() {
        modal.classList.remove("open");
    }
})

modalformlogin.addEventListener("click",(e)=>{
    e.stopPropagation();
})

modalformsingup.addEventListener("click",(e)=>{
    e.stopPropagation();
})

const overplaynotify = document.querySelector('.overplay-notify')
const loginEmail = document.getElementById('modal-email');
const loginPassword = document.getElementById('modal-password');

function openFormLogin ()
{
    loginbtn.onclick = function() {
        const arr = JSON.parse(localStorage.getItem('account'));
        if(arr[0].isAdmin == false && arr[0].isUser == false) {
            modalformsingup.style.display = 'none';
            modalformlogin.style.display = 'block';
            modal.classList.add('open');
        }
    }
}
function showPassword(){
    let passwordInput=document.getElementById("modal-password");
    if(passwordInput.getAttribute("type")=="password"){
        passwordInput.setAttribute("type","text");
    }else{
        passwordInput.setAttribute("type","password");
    }
}
function showPasswordSignUp(){
    let passwordInput=document.getElementById("modal-password-signup");
    if(passwordInput.getAttribute("type")=="password"){
        passwordInput.setAttribute("type","text");
    }else{
        passwordInput.setAttribute("type","password");
    }
}
// login
function checkLogin(){
    let user = document.getElementById("modal-email").value;
    let password=document.getElementById("modal-password").value;
    let passwordInput=document.getElementById("modal-password");
    let userData=JSON.parse(sessionStorage.getItem("userData"));
    console.log(userData[0]);
    if(user!==''&&password!==''){
        for(let i=0;i<userData.length;i++){
            if(userData[i].user===user&&userData[i].password===password){
                sessionStorage.setItem("user",userData[i].name);
                window.location="index.html";
            }
        }
        if(sessionStorage.getItem("user")===null){
            passwordInput.value='';
            let messageLogin=document.getElementById("messageLogin");
            let message="<span class='warning-alert' style='margin-left:40%;margin-bottom:20px' > <strong>Your user or password incorrect</strong> </span>";
            messageLogin.innerHTML=message;
        }
    }else{
        
    }
    
}
function messageAlert(messageAlert){
    let message="<span class='warning-alert' style='margin-left:145px' > <strong>"+messageAlert+"</strong> </span>";
    return message;
}
function isCorrect(username,name,date,sex,email,password){
    let check = true;
    if(username.value===''){
        let userNof=document.getElementById("userNofication");
        userNof.innerHTML=messageAlert("user name can't empty");
        check=false;
    }
    if(name.value===''){
        let nameNof=document.getElementById("nameNofication");
        nameNof.innerHTML=messageAlert("full name can't empty");
        check=false;
    }
    if(date.value===''){
        let dateNof=document.getElementById("dateNofication");
        dateNof.innerHTML=messageAlert("date can't empty");
        check=false;
    }
    if(email.value===''){
        let emailNof=document.getElementById("emailNofication");
        emailNof.innerHTML=messageAlert("email can't empty");
        check=false;
    }
    if(password.value===''){
        let passwordNof=document.getElementById("passwordNofication");
        passwordNof.innerHTML=messageAlert("password can't empty");
        check=false;
    }
    return check;

}
function Register(){
    let username=document.getElementById("modal-username-signup");
    let name=document.getElementById("modal-name");
    let date=document.getElementById("modal-date");
    let sex=document.getElementById("modal-sex");
    let email=document.getElementById("modal-email-signup");
    let password=document.getElementById("modal-password-signup")
    if(isCorrect(username,name,date,sex,email,password)){
        let userData=JSON.parse(sessionStorage.getItem("userData"));
        let role;
        if((username.value).includes("admin"))role="admin";
        else role="user";
        userData.push({
            "user":username.value,
            "name":name.value,
            "date":date.value,
            "sex":sex.value,
            "email":email.value,
            "password":password.value,
            "role":role
        })
        sessionStorage.removeItem("userData");
        sessionStorage.setItem("userData",JSON.stringify(userData));
        window.location="index.html";
    };
}
window.onload=getSession();
function getSession(){
    if(sessionStorage.getItem("user")!==null){
        let login_href=document.getElementById("login-href");
        login_href.innerText="hello,"+ sessionStorage.getItem("user");
        let list=document.getElementById("contact-list");
        let item=document.createElement("li");
        item.innerHTML="LOG OUT";
        item.setAttribute("onclick","logOut()");
        item.setAttribute("cursor","pointer");
        list.appendChild(item);
    }
}
    