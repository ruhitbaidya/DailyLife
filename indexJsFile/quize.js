let jsonData = [
    {
        "q" : "The common element which describe the web page, is ?",
        "a" : "heading",
        "b" : "paragraph",
        "c" : "All of these",
        "answer" : "c"
    },
    {
        "q" : "HTML stands for?",
        "a" : "Hyper Text Markup Language",
        "b" : "High Text Markup Language",
        "c" : "Hyper Tabular Markup Language",
        "answer" : "a"
    },
    {
        "q" : "which of the following tag is used to mark a begining of paragraph ?",
        "a" : "TD",
        "b" : "br",
        "c" : "P",
        "answer" : "c"
    },
    {
        "q" : "From which tag descriptive list starts ?",
        "a" : "LL",
        "b" : "DL",
        "c" : "DD",
        "answer" : "b"
    },
    {
        "q" : "Correct HTML tag for the largest heading is _____",
        "a" : "h1",
        "b" : "h6",
        "c" : "heading",
        "answer" : "a"
    }
];
let totle = jsonData.length;
let indexss = 0;
let right = 0 , wrong = 0;
let quizes = document.querySelector('.quizes');
let quectionShow = quizes.querySelector('h4');
let radioCheck = quizes.querySelectorAll('.form-check-input');
let labelCheck = quizes.querySelectorAll('.form-check-label');

function loadQuection(){
    let quizess = document.querySelector('.quizes');
    let timePart = document.querySelector('.time-left');
    if(totle === indexss){
        timePart.classList.remove('d-block')
        return quizes.innerHTML = `
            <h3>Thanks For Playing This Game </h3>
            <h5>You Win ${right} Out Of ${totle} </h5>
        `
    };
    document.querySelector('.startButton').addEventListener('click', function(){
        quizess.classList.add('d-block')
        this.classList.add('d-none')
        timePart.classList.add('d-block')
        timersShow()
        answarFindButton.setAttribute('disabled', true);
    });
    resetRadio();
    let data = jsonData[indexss];
    quectionShow.innerText = `${indexss + 1} ) ${data.q}`;
    labelCheck[0].innerText = data.a;
    labelCheck[1].innerText = data.b;
    labelCheck[2].innerText = data.c;
};

// answar match

function findAnwar(){
    let data = jsonData[indexss];
    const findans = answar();
    if(findans === data.answer){
        right++;
    };
    indexss++;
    timersShow();
    loadQuection();
    answarFindButton.setAttribute('disabled', true);
}

// check valid or invalid
function answar(){
    let ans;
    radioCheck.forEach((input)=>{
        if(input.checked){
            ans = input.value;
            console.log('ruhit')
        }
    })
    return ans;
}

// radio reset
function resetRadio(){
    radioCheck.forEach((input)=>{
        input.checked = false;
    })
}

// timer setting
let answarFindButton = document.querySelector('#answarFindButton');

function timersShow(){
    let timeLeftShow = document.querySelector('.countscha');
    let clearInter = setInterval(timerWork, 1000);
    let counts = 16;
    function timerWork(){
        counts--;
        if(counts <= 9){
            timeLeftShow.innerText = '0' + counts;
        }else{
            timeLeftShow.innerText = counts;
        }
        radioCheck.forEach((input)=>{
            if(input.checked){
                clearInterval(clearInter);
                answarFindButton.removeAttribute('disabled');
            }
        });
        if(counts == 0){
            clearInterval(clearInter);
            findAnwar();
            counts = 15;
        };
    };
};

loadQuection();