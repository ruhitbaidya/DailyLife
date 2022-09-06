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
            console.log(text)
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
    }else{
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





