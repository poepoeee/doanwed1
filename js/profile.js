window.onload=loadUserData();
window.onload=function(){
    let reloading=sessionStorage.getItem('reloading');
    if(reloading){
        sessionStorage.removeItem('reloading');
        alert('sửa thông tin thành công ');
    }
}
function loadUserData(){
    let userData=JSON.parse(localStorage.getItem('user'));
    let inputs=document.getElementsByClassName('form-control');
    let emailProfile=document.getElementsByClassName('emailProfile')[0];
    let nameProfile=document.getElementsByClassName('nameProfile')[0];
    emailProfile.innerText=userData.email;
    nameProfile.innerText=userData.name;
    let Name=userData.name.split(' ');
    let string='';
    for(let i=0;i<Name.length-1;i++){
        string +=Name[i]+' ';
     }
    inputs[0].value=Name[Name.length-1];
    inputs[1].value=string;
    let values=Object.values(userData);
    for(let i = 2,j=3;j<values.length-1;i++,j++){
        inputs[i].value=values[j];
    }
}
function updateProfile(object){
    let currentText=object.innerText;
    object.innerText="Save Profile";
    let inputs=document.getElementsByClassNameName('form-control');
    if(currentText==="Edit Profile"){
        for(let i=0;i<inputs.length;i++){
           inputs[i].removeAttribute('disabled');
        }
    }else{
        let userData=JSON.parse(localStorage.getItem('user'));
        userData.name=inputs[1].value+' '+inputs[0].value;
        let keys=Object.keys(userData);
        for(let i =2,j=3;j<keys.length-1;i++,j++){
            userData[keys[j]]=inputs[i].value;
        }
        let userArray=JSON.parse(localStorage.getItem('userData'));
        for(let i =0;i<userArray.length;i++){
        if(userArray[i].user===userData.user){
            userArray[i]=userData;
            localStorage.setItem('userData',JSON.stringify(userArray));
            localStorage.setItem('user',JSON.stringify(userData));
            sessionStorage.setItem('reloading','true');
            window.location='profile.html';
        }
    }
    }
    
    
}