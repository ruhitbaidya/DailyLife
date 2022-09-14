// all code here

let buttonclick = document.querySelector('.notificationBar');
let messageContent = document.querySelector('#messageId');

buttonclick.addEventListener('click', function(){
    messageContent.classList.toggle('d-block');
});


// remainder message work 
let msgForm = document.querySelector('#msgForm');
let mesgDate = document.querySelector('#remainderDate');
let msgText = document.querySelector('#inputMessage');
let remainderToDate = document.querySelector('#remainderToDate');
let remainderDisplay = document.querySelector('#remainderDisplay');

console.log('di')
msgForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(mesgDate.value === '' || msgText.value === ''){
        alert('Filup All Gap')
    }else{
        dataStore();
    }
    
});
let messgeData = [];
function dataStore(){
    let data = {
        date : mesgDate.value,
        message : msgText.value
    }

    messgeData.push(data);
    localStorage.setItem('remainderMsg', JSON.stringify(messgeData));

    remainderDisplayFun()
}


function remainderDisplayFun(){
    remainderDisplay.textContent = '';
    messgeData.map((data, index)=>{
        let div = document.createElement('tr');
        div.setAttribute('id', index)
        div.innerHTML = `
                <td>${data.date}</td>
                <td>${data.message}</td>
                <td><button class="btn btn-danger" onclick="removeRemainder(this)">Remove Remainder</button></td>
        `
        remainderDisplay.appendChild(div);
    });
    messageContent.textContent = `${msgText.value}`
    clearField()
}


function clearField(){
        mesgDate.value = '',
        msgText.value = ''
}
function removeRemainder(e){
    let idFind = e.parentElement.parentElement.id;
    e.parentElement.parentElement.remove();
    messgeData.splice(idFind, 1);
    localStorage.setItem('remainderMsg', JSON.stringify(messgeData));
}

function callRemainder(){
    messgeData.map((dateFind, index)=>{
        if(dateFind.date === remainderToDate.value){
            messageContent.innerHTML += `<p> ${messgeData[index].message} </p>`;
            messageContent.previousElementSibling.classList.add('notificationShow');
            setInterval(()=>{
                alert('To Day You Have A New Meassage Please Check Your Notification ')
            }, 15000)
        }
    });
}



(()=>{
    messgeData = JSON.parse(localStorage.getItem('remainderMsg')) || [];
    console.log(messgeData)
    remainderDisplayFun();
})()

callRemainder();