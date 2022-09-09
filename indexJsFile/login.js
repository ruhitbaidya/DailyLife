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
let formLog = loginPage.querySelector('#logIn');
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
    localStorage.setItem('info', JSON.stringify(allData))
    localStorage.setItem('id', JSON.stringify(ids));
};


// login page work


formLog.addEventListener('submit', function(e){
    e.preventDefault();
    let elCondition = false;
    logOutShow()
    allData.map((task)=>{
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
        allData.map((tasks)=>{
            if(tasks.id === idco){
                main.classList.add('d-block');
                main.classList.remove('d-none');
                singupinfo.classList.add('d-none');
                let fullname2 = `${tasks.Fname} ${tasks.Lname}`;
                 runTextT(tasks.Fname, fullname2);
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
    })
}
linkShowHide();


(()=>{
    allData = JSON.parse(localStorage.getItem('info')) || [];
    logOutShow();

})();




// main page work start


mainPages.addEventListener('click', function(){
    mainPage.classList.remove('d-block');
    main.classList.add('d-block');
});



// profile image work

let selectImg = document.querySelector('#selectImg');
let showImg = document.querySelector('#showImg');
let profileSortImage = document.querySelector('#profileSortImage img');
selectImg.addEventListener('change', function(){
    let reader = new FileReader();
    reader.addEventListener('load', function(){
        let storeImg = reader.result;
        localStorage.setItem('image_Profile', storeImg)
    });
    reader.readAsDataURL(this.files[0]);

    
});


    document.addEventListener('DOMContentLoaded', function(){
        let image = localStorage.getItem('image_Profile');
        let imgs = document.createElement('img');
        imgs.src = image;
        showImg.appendChild(imgs);
        profileSortImage.src = image;
    });


