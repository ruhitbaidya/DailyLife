// this is code of signup page

// all variable

let singupinfo = document.querySelector('#signup');
let formSing = singupinfo.querySelector('form');
let alertShow = singupinfo.querySelector('p');
let fname = singupinfo.querySelector('#fname');
let lname = singupinfo.querySelector('#lname');
let email = singupinfo.querySelector('#email');
let password = singupinfo.querySelector('#password');
let textShow = document.querySelector('#textShow');
// login variable

let loginPage = document.querySelector('#login');
let formLog = loginPage.querySelector('#logInpage');
let emailL = loginPage.querySelector('#emailL');
let passwordL = loginPage.querySelector('#passwordL');

let mainPages = document.querySelector('#main-content');
let main = document.querySelector('#page-all');
    // logout Variable
    let logout = 0;

// main page variable

let logo = document.querySelector('#pageLogo');
// main page show

let mainPage = document.querySelector('#main-page');

let allData = [];

// log out store
let outStore = document.querySelector('#outStore');

// random id generate

let ids = Math.floor(Math.random() * 20);

// operation all signup page 
formSing.addEventListener('submit', function(e){
    e.preventDefault();
    if(fname.value === '' || lname.value === '' || email.value === '' || password.value === ''){
        alertShow.textContent = 'Pleace Fill Up All the Gap';
    }else{
        signUp()
        
            singupinfo.classList.add('d-none');
            loginPage.classList.add('d-block');
            
    }
});

function clearFields(){
    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';
}
// data collection
function signUp(){
    let data = {
        id : ids,
        Fname : fname.value ,
        Lname : lname.value ,
        Email : email.value ,
        Password : password.value,

    }
    clearFields();
    alertShow.textContent = 'SuccessFully Register';
    
    allData.push(data);

    dataStorage()
};

// data storage function
function dataStorage(){
    if(localStorage.getItem('info') === null){
        localStorage.setItem('info', JSON.stringify(allData))
        localStorage.setItem('id', JSON.stringify(ids));
    }else{
        alert('You have already an a account please login')
    }

    
};


// login page work
let catchpass = '';
let indexs = '';
formLog.addEventListener('submit', function(e){
    e.preventDefault();
    let elCondition = false;
    logOutShow();
   allData.map((task, index)=>{
    if((task.Email === emailL.value  && task.Password === passwordL.value)){
        elCondition = true;
        textShow.innerHTML = 'Login Success';
            logout++;
            loginPage.classList.add('d-none');
            loginPage.classList.remove('d-block');
            mainPage.classList.add('d-block');
            let fullname = `${task.Fname} ${task.Lname}`;
             runTextT(task.Fname, fullname);
             logOut(logout);   
             catchpass = task.Password;   
             indexs= index ;
    }
   });
    if(!elCondition){
        textShow.innerHTML = 'Login Filed';
    }


});






let boleanLog = false;
// logout function here
function logOut(num){
    localStorage.setItem('logInfo', JSON.stringify(num));
    
}

function logData(){
    let logFind = JSON.parse(localStorage.getItem('logInfo'));
   if(logFind === 1){
        boleanLog = true;
   }
}
logData();

function logOutShow(){
    if(boleanLog){
        let idco = JSON.parse(localStorage.getItem('id'));
        allData.map((taskss)=>{
            if(taskss.id === idco){
                main.classList.add('d-block');
                main.classList.remove('d-none');
                singupinfo.classList.add('d-none');
                let fullname2 = `${taskss.Fname} ${taskss.Lname}`;
                 runTextT(taskss.Fname, fullname2);
            }
        })
    }
}
logOutShow();


function runTextT(name, fullname){
    let showThat = document.querySelector('.custom');
    let textConten = document.querySelector('.text-content');
    let h1 = document.createElement('h1');
    h1.textContent = `Wellcome ${name}`;
    textConten.insertBefore(h1, showThat);
    logo.textContent = fullname;
    
}

// log out store function 
outStore.addEventListener('click', function(){
    localStorage.removeItem('logInfo');
    document.location.reload();
})


//all link here
function linkShowHide(){
    let loginLink = document.querySelector('#loginLink');
    let signupLink = document.querySelector('#Hsign');
    
    loginLink.addEventListener('click', function(){
        document.location.reload();
    });
    signupLink.addEventListener('click', function(){
        loginPage.classList.add('d-block');
        singupinfo.classList.add('d-none');
    });
}
linkShowHide();







// main page work start


mainPages.addEventListener('click', function(){
    mainPage.classList.remove('d-block');
    main.classList.add('d-block');
});



// profile javascript set local store
let saveChange = document.querySelector('.saveChange');
let imageColl  = document.querySelector('#imageColl');
let imageShow = document.querySelector('#image img');
let profileDis = document.querySelector('.customSize');
let uploadImage = '';


    imageColl.addEventListener('change', function(){
        let reader = new FileReader();
        reader.addEventListener('load', function(){
            uploadImage = reader.result;
            imageShow.src = uploadImage;
            profileDis.src = uploadImage;
            localStorage.setItem('profile-image', uploadImage);
        });
        reader.readAsDataURL(this.files[0]);
    });

    document.addEventListener('DOMContentLoaded', function(){
        let findImage = localStorage.getItem('profile-image');
        imageShow.src = findImage;
            profileDis.src = findImage;
    });


    // delete account 

    let delAccount = document.querySelector('#deleteAccount');
    delAccount.addEventListener('click', function(){
        let delText = prompt('delete account');
        if(delText === 'delete account'){
           if(confirm('Are Your Delete Your Account If You Delete This Account Did Not Recovery you any data')){
            localStorage.clear();
            document.location.reload();
           }
        }
    });

    // password change option

    let passchage = document.querySelector('#passChangButton');
    passchage.addEventListener('click', passcang);
   
    function passcang(){
        let oldPass = document.querySelector('#oldPass').value;
        let newpass = document.querySelector('#newPass').value;
        let retyprpass = document.querySelector('#retypepass').value;
        
        allData.map((data, index)=>{
            if(data.Password === oldPass){
                allData.splice(index, 1);
                if(newpass === retyprpass){
                    console.log(data.Fname)
                   let addpass =  {
                        id : data.id,
                        Fname : data.Fname,
                        Lname : data.Lname ,
                        Email : data.Email ,
                        Password : retyprpass
                   }
                   
                   allData.push(addpass)
                   localStorage.setItem('info', JSON.stringify(allData));
                   if(confirm('stay login or log out')){
                        localStorage.removeItem('logInfo');
                        document.location.reload();
                   }
                }
            }
        })
        

    }

    (()=>{
        allData = JSON.parse(localStorage.getItem('info')) || [];
        logOutShow();
    })();