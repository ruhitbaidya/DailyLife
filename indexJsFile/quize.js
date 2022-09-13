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
            <h5>${right} Out Of ${totle} </h5>
        `
    };
    document.querySelector('.startButton').addEventListener('click', function(){
        quizess.classList.add('d-block')
        this.classList.add('d-none')
        timePart.classList.add('d-block')

        // timercontrol()
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
    }
    indexss++;
    loadQuection();
    
}

// check valid or invalid
function answar(){
    let ans;
    radioCheck.forEach((input)=>{
        if(input.checked){
            ans = input.value;
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
// let counts = 5;
// let countscha = document.querySelector('.countscha');

// function counttimer(){
//     counts--;
//     if(counts <= 9){
//         countscha.innerText = '0' + counts;
//     }else{
//         countscha.innerText = counts;
//     }   
//     if(counts == 0){
//         console.log('hello')
//         stopInter();
//     }
// }

// function timercontrol(){
//    setInterval(counttimer, 1000);  
// }
// function stopInter(){
//     console.log('hello2')
// }
loadQuection();