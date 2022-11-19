var index = 1;
var i = 1;
// window.onload(function(){
//     if(sessionStorage.getItem("username")!==null){
//         let login_href=document.getElementById("login-href");
//         login_href.innerText=sessionStorage.getItem("username");
//     }
// })
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
window.onload=getSession();
function getSession(){
    if(sessionStorage.getItem("user")!==null){
        let login_href=document.getElementById("login-href");
        login_href.innerText="hello,"+ sessionStorage.getItem("user");
        let list=document.getElementById("contact-list");
        let item=document.createElement("li");
        let item_button=document.createElement("button");
        item_button.setAttribute("onclick","logOut()");
        item_button.setAttribute("class","logOutButton");
        item_button.innerText="LOG OUT";
        item.appendChild(item_button);
        item.setAttribute("cursor","pointer");
        list.appendChild(item);
    }
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
    