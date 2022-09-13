let allButtonNav = document.querySelector('#allBtn');
let findButton = allButtonNav.querySelectorAll('a')

findButton.forEach(button => {
    button.addEventListener('click', function(){
        findButton.forEach(btn =>{
            btn.classList.remove('active');
            this.classList.add('active');
        });
        let text = this.id;
            sectionMatch(text)
    });
   
});

let clickCode = '';

function sectionMatch(texts){
    let all = document.querySelector('#allContent');
    let allDiv = all.querySelectorAll('.contentShowHide');
    allDiv.forEach((divs, index) => { 
            divs.classList.add('d-none')
            if(texts === divs.id){
                codeSend(divs.id);
                divs.classList.add('d-block');
               divs.classList.remove('d-none');
                if(divs.querySelector('main') === null){
                    let div = document.createElement('div');
                    div.innerHTML = showModal(index, clickCode);
                    divs.appendChild(div);
                }
            }else{
                divs.classList.add('d-none');
                divs.classList.remove('d-block');
            }  
    });
}

sectionMatch()
// modal show and hide 
 
function showModal(index, code){
   return `
   <main id="modal-container">
    <button type="button" class="btn btn-primary bt-cross" data-toggle="modal" data-target="#exampleModalCenter${index}">
        Show Code
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Vanila javascript Code</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
               <code class="exampleModalCenter${index}">${code}</code>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="copyCode(${index})">Copy Code</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    </main>
`
}


// copy code in site
function copyCode(index){
    let field = document.querySelector(`.exampleModalCenter${index}`);
    navigator.clipboard.writeText(field.innerHTML);
    alert('text Copied');
}


// modal codesend variable
function codeSend(text){
    if(text === 'click-counter'){
        clickCode = `let incre = document.querySelector('#increment');
            let degre = document.querySelector('#degrement');
            let showCount = document.querySelector('#countShow');
            let count = 0;
            
            incre.addEventListener('click', function(){
                count++;
                showCount.innerText = count;
            });
            degre.addEventListener('click', function(){
                count--;
                showCount.innerText = count;
            
            });`;
    }else if(text === 'password-generator'){
        clickCode = `
        passGenerator.addEventListener('click', function(){
            let passLen = setIndex.value || 7;
            let storePass = '';
            let letterNumber = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','<','>','/','^','#','@','%','&','|']
            for(let i=0; i<=passLen; i++){
                let ranNumber = Math.floor(Math.random() * letterNumber.length);
                storePass += letterNumber[ranNumber]
            }
            showPass.value = storePass;
            
        });
        
        copyPass.addEventListener('click', function(){
            navigator.clipboard.writeText(showPass.value);
            alert('Password Copid')
        });
        `
    }else if(text === 'to-do'){
        clickCode = `
        // submit form

        crudForm.addEventListener('submit', function(){
            formValidation();
        });
        
        // form validation
        function formValidation(){
            if(crudfname.value === '' || crudLname.value === '' || crudAge.value === '' || crudSelDate.value === ''){
                alertText.innerText = 'Please Fill Up all Gap';
            }else{
                acceptData();
            }
        }
        
        
        let alldata = {};
        let dataArr = []
        function acceptData(){
            alldata = {
                Name : crudfname.value,
                LName : crudLname.value,
                age : crudAge.value,
                date : crudSelDate.value
            }
            dataArr.push(alldata);
            localStorage.setItem('crudData', JSON.stringify(dataArr));
            createPost()
        }
        
        function createPost(){
            tableContent.innerHTML = '';
            dataArr.map((task, index)=>{
                tableContent.innerHTML += 
                  
                            <a class="btn btn-warning" onclick="editData(this)">Edit</a>
                            <a class="btn btn-danger" onclick="deleteData(this)">Delete</a>
                        </td>
                    </tr>
                
            });
            crudId.value = dataArr.length + 1;
            clearField();
        };
        
        function clearField(){
            crudfname.value = '',
            crudLname.value = '',
            crudAge.value = '',
            crudSelDate.value = ''
        }
        
        function editData(e){
            let elements = e.parentElement.parentElement.children;
            crudfname.value = elements[0].innerText;
            crudLname.value = elements[1].innerText;
            crudAge.value = elements[2].innerText;
            crudSelDate.value = elements[3].innerText;
            dataArr.splice(e.parentElement.parentElement.id, 1);
        }
        
        function deleteData(e){
            e.parentElement.parentElement.remove();
            dataArr.splice(e.parentElement.parentElement.id, 1);
            localStorage.setItem('crudData', JSON.stringify(dataArr));
        }
        
        (()=>{
            dataArr = JSON.parse(localStorage.getItem('crudData')) || [];
            createPost();
        })();
                
        `
    }else if(text === 'quize-app'){
        clickCode = `
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
                return quizes.innerHTML = 
                    
                
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
            quectionShow.innerText = ;
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
        `
    }
    else{
        clickCode = '';
    }
}




// counter js all code here

let incre = document.querySelector('#increment');
let degre = document.querySelector('#degrement');
let showCount = document.querySelector('#countShow');
let count = 0;

incre.addEventListener('click', function(){
    count++;
    showCount.innerText = count;
});
degre.addEventListener('click', function(){
    count--;
    showCount.innerText = count;
});



// password Generator all code here

let showPass = document.querySelector('#showPass');
let setIndex = document.querySelector('#setIndex');
let passGenerator = document.querySelector('#passGenerator');
let copyPass = document.querySelector('#copyPass');


passGenerator.addEventListener('click', function(){
    let passLen = setIndex.value || 7;
    let storePass = '';
    let letterNumber = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','<','>','/','^','#','@','%','&','|']
    for(let i=0; i<=passLen; i++){
        let ranNumber = Math.floor(Math.random() * letterNumber.length);
        storePass += letterNumber[ranNumber]
    }
    showPass.value = storePass;
    
});

copyPass.addEventListener('click', function(){
    navigator.clipboard.writeText(showPass.value);
    alert('Password Copid')
});


// drop down js here
let contents = document.querySelector('.dropdown-menus');
let dropMenu = document.querySelector('#dropdownButton');
dropMenu.addEventListener('click', function(){
    contents.classList.toggle('d-none')
});



