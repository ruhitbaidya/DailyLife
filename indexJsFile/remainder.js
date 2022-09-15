// all code here
let remainderToDate = document.querySelector('#remainderToDate');
// create date
let dates = new Date();
let month = dates.getMonth();
let days = dates.getDate();
let years = dates.getFullYear();


month = month + 1;
if(month < 10){
    month = '0' + month
}
remainderToDate.value = `${years}-${month}-${days}`
let buttonclick = document.querySelector('.notificationBar');
let messageContent = document.querySelector('#messageId');


buttonclick.addEventListener('click', function(){
    messageContent.classList.toggle('d-block');
});

messageContent.textContent = 'hello'

// remainder message work 
let msgForm = document.querySelector('#msgForm');
let mesgDate = document.querySelector('#remainderDate');
let msgText = document.querySelector('#inputMessage');
let remainderDisplay = document.querySelector('#remainderDisplay');


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
let booleShow = false;
function callingNotification(){
    messgeData.map((dataNoti)=>{
        if(dataNoti.date === remainderToDate.value){
            messageContent.innerHTML += `<p>${dataNoti.message}</p>`;
            messageContent.previousElementSibling.classList.add('notificationShow');
            booleShow  = true;
            setInterval(()=>{
                alert('You have A new message Please Check Your Notification')
            }, 15000)
        }
    });
    if(!booleShow){
        messageContent.innerHTML = `You have not received any messages yet`;
    }
};

(()=>{
    messgeData = JSON.parse(localStorage.getItem('remainderMsg')) || [];
    remainderDisplayFun();
})();



callingNotification()
