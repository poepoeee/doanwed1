
// Chuyen Image
var index = 0;
function changeimg () {
    var imgs = ["/access/img/slideshow_1.webp","/access/img/slideshow_2.webp","/access/img/slideshow_3.webp"];
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
    var imgs = ["/access/img/slideshow_1.webp","/access/img/slideshow_2.webp","/access/img/slideshow_3.webp"];
    document.getElementById("img-slider").src = imgs[k-1];
}

function next ()
{
    var imgs = ["/access/img/slideshow_1.webp","/access/img/slideshow_2.webp","/access/img/slideshow_3.webp"];
    index++;
    if (index >= imgs.length)
    {
        index = 0;
    }
    document.getElementById("img-slider").src = imgs[index];
}

function prev () {
    var imgs = ["/access/img/slideshow_1.web","/access/img/slideshow_2.web","/access/img/slideshow_3.web"];
    index--;
    if (index < 0)
    {
        index = imgs.length - 1;
    }
    document.getElementById("img-slider").src = imgs[index];
}

// Dong/mo modal 
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


function setAccount () {
    var users = [
        {
            isAdmin: false,
            isUser: false,
            isLogout: true
        },
        {
            Name:"user",
            Email:"user",
            Password: 'user'
        },
    ]
    
    localStorage.setItem('userLocal',JSON.stringify(users));
}

function clear() {
    // loginUsername.value = "";
    loginEmail.value = "";
    loginPassword.value = "";
    // loginAgainPassword.value = "";
}

function addLogin() {
    var email = loginEmail.value;
    var password = loginPassword.value;
    var arr = localStorage.getItem('userLocal') ? JSON.parse(localStorage.getItem('userLocal')) : [];
    var User = {
        Name: Name,
        Email: email,
        Password: password
    }
    arr.push(User);
    localStorage.setItem('userLocal', JSON.stringify(arr));
    clear();
}

function checkSignin() {
    var Email = document.getElementById('modal-email').value;
    var Password = document.getElementById('modal-password').value;
    const arr = JSON.parse(localStorage.getItem('userLocal'));
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].Email == Email && arr[i].Password == Password) {
            arr[1].Name = arr[i].Name;
            arr[1].Email = arr[i].Email;
            arr[1].Password = arr[i].Password;
            localStorage.setItem('userLocal', JSON.stringify(arr));
            return true;
        }
    }

    return false;
}

function checkAdmin() {
    var Email = document.getElementById('modal-email').value;
    var Password = document.getElementById('modal-password').value;
        if (Email == "admin@admin" && Password == "admin") {
            return true;
        }
    return false;
}

// function checkNull () 
// {
//     var Email = document.getElementById('modal-email').value;
//     var Password = document.getElementById('modal-password').value;
//     let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (Email == null || Email == "")
//     {
//         alert("Please enter a valid email");
//         loginEmail.style.background = '#fceae9';
//         loginEmail.style.boderColor = '#e74c3c'
//         loginEmail.focus();
//         return false;
//     }
//     else if (Email.match(regExp) && Password.length < 7 )
//     {
//         loginEmail.style.borderColor = "#27ae60";
//         loginEmail.style.background = "#eafaf1";
//         return true;
//     }
//     else if (Password == null || Password == "")
//     {
//         alert("Please enter a valid password");
//         loginPassword.style.background = '#fceae9';
//         loginPassword.style.boderColor = '#e74c3c'
//         Password.focus();
//         return false;
//     } 
// }

document.getElementById('modal-submit-login').onclick = function() {
        setAccount();
        const arr = JSON.parse(localStorage.getItem('userLocal'));
        if(checkAdmin()) {
            arr[0].isAdmin = true;
            arr[0].isUser = false;
            arr[0].isLogout = false;
            
            setTimeout(function() {
                overplaynotify.style.transform = 'translateX(0)';
                overplaynotify.style.opacity = '1';
                overplaynotify.innerHTML = `<div class= "overplay-notify success"
                                            style="width:90px;height:180px; background: black; color: green;
                                            border-radius: 12px;"
                                            >
                                            <i class="fa-solid fa-circle-check"></i>
                                            Đăng nhập thành công
                                        </div>`;
                checkAccount();
            }, 500)
    
            setTimeout(function() {
                overplaynotify.style.transform = 'translateX(100%)';
                overplaynotify.style.opacity = '0';
                modalformlogin.classList.remove('open');
            }, 2000)
            document.querySelector('.js-login').innerText = 'Admin';
            modal.classList.remove('open');
            window.location.pathname = '/html/settings.html';
        }
        else if (checkSignin())
        {
            arr[0].isAdmin = false;
            arr[0].isUser = true;
            arr[0].isLogout = false;
            
            setTimeout(function() {
                overplaynotify.style.transform = 'translateX(0)';
                overplaynotify.style.opacity = '1';
                overplaynotify.innerHTML = `<div class="overplay-notify success" style="width:90px;"
                                            height:100px; background: white; color: green;>
                                            <i class="fa-solid fa-circle-check"></i>
                                            Đăng nhập thành công
                                        </div>`;
                checkSignin();                        
                checkAccount();
            }, 2000)
    
            setTimeout(function() {
                overplaynotify.style.transform = 'translateX(100%)';
                overplaynotify.style.opacity = '0';
                modalformlogin.classList.remove('open');
            }, 2000)
        }
        else
        {
            // checkNull();
            setTimeout(function() {
                overplaynotify.style.transform = 'translateX(0)';
                overplaynotify.style.opacity = '1';
                overplaynotify.innerHTML = `<div class="overplay-notify error"
                                            style="width:90px;"
                                            height:100px; background: white; color: red;>
                                            <i class="fa-solid fa-circle-xmark"></i>
                                            Đăng nhập thất bại!!
                                        </div>`;
                console.log("That bai")
            }, 500)
    
            setTimeout(function() {
                overplaynotify.style.transform = 'translateX(100%)';
                overplaynotify.style.opacity = '0';
                document.getElementById('modal-email').value = "";
                document.getElementById('modal-password').value = "";
            }, 2000)
        }
        localStorage.setItem('userLocal',JSON.stringify(arr)) 
    }  

function checkAccount() {
        const arr = JSON.parse(localStorage.getItem("userLocal"));
    
        if(arr == null ) {
            setAccount();
        }
        else {
            if(arr[0].isAdmin == false && arr[0].isUser == false) {
                openFormLogin();
            }
            else {
                if(arr[0].isAdmin == true) {
                    document.querySelector('.js-login').innerText = 'Admin';
                }
                else if(arr[0].isUser == true) {
                    document.querySelector('.js-login').innerText = arr[1].Name;
                }
            }
    
            localStorage.setItem('userLocal',JSON.stringify(arr));
        }   
    }



