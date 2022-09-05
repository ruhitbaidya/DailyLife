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


function sectionMatch(texts){
    let all = document.querySelector('#allContent');
    let allDiv = all.querySelectorAll('div');
    allDiv.forEach(divs => { 
            
            if(texts === divs.id){
               divs.classList.add('d-block')
               divs.classList.remove('d-none')
            }else{
                divs.classList.add('d-none')
                divs.classList.remove('d-block')
            }
    })
    
}
sectionMatch()
// all content show and hide here

