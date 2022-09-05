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


// main page variable

let logo = document.querySelector('#pageLogo');
// main page show

let mainPage = document.querySelector('#main-page');

let allData = [];

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
        Fname : fname.value ,
        Lname : lname.value ,
        Email : email.value ,
        Password : password.value
    }
    clearFields();
    alertShow.textContent = 'SuccessFully Register';
    allData.push(data);
    dataStorage()
};

// data storage function
function dataStorage(data){
    localStorage.setItem('info', JSON.stringify(allData))
};


// login page work

formLog.addEventListener('submit', function(e){
    e.preventDefault();
    let elCondition = false;
    allData.map((task)=>{
        if(task.Email === emailL.value  && task.Password === passwordL.value){
            elCondition = true;
            textShow.innerHTML = 'Login Success';
            
                loginPage.classList.add('d-none');
                loginPage.classList.remove('d-block');
                mainPage.classList.add('d-block');
                let fullname = `${task.Fname} ${task.Lname}`
                
                runTextT(task.Fname, fullname);
            
        }
        
    });
    if(!elCondition){
        textShow.innerHTML = 'Login Filed';
    }
});


function runTextT(name, fullname){
    let showThat = document.querySelector('.custom');
    let textConten = document.querySelector('.text-content');
    let h1 = document.createElement('h1');
    h1.textContent = `Wellcome ${name}`;
    textConten.insertBefore(h1, showThat);
    logo.textContent = fullname;
    
}


//all link here
function linkShowHide(){
    let loginLink = document.querySelector('#loginLink');
    let signupLink = document.querySelector('#Hsign');
    
    loginLink.addEventListener('click', function(){
        loginPage.classList.add('d-none');
        singupinfo.classList.add('d-block');
    });
    signupLink.addEventListener('click', function(){
        loginPage.classList.add('d-block');
        singupinfo.classList.add('d-none');
    })
}
linkShowHide();


(()=>{
    allData = JSON.parse(localStorage.getItem('info')) || [];
})();




// main page work start


let mainPages = document.querySelector('#main-content');
let main = document.querySelector('#page-all');
mainPages.addEventListener('click', function(){
    mainPage.classList.remove('d-block');
    main.classList.add('d-block');
});
