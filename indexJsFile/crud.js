// =============================== CRUD Start =======================================//

// CRUD app all code here

// all variable
let content = document.querySelector('.contentCrud');
let crudForm = content.querySelector('#crudForm');
let alertText = content.querySelector('.alertText');
let crudId = content.querySelector('#crudId');
let crudfname = content.querySelector('#crudfname');
let crudLname = content.querySelector('#crudLname');
let crudAge = content.querySelector('#crudAge');
let crudSelDate = content.querySelector('#crudSelDate');
let crudSubmit = content.querySelector('#crudSubmit');
let tableContent = content.querySelector('#content-show');


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
    alertText.innerText = 'Add Data';
}

function createPost(){
    tableContent.innerHTML = '';
    dataArr.map((task, index)=>{
        tableContent.innerHTML += `
            <tr id=${index}>
                <td>${task.Name}</td>
                <td>${task.LName}</td>
                <td>${task.age}</td>
                <td>${task.date}</td>
                <td>
                    <a class="btn btn-warning" onclick="editData(this)">Edit</a>
                    <a class="btn btn-danger" onclick="deleteData(this)">Delete</a>
                </td>
            </tr>
        `
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
    alertText.innerText = 'Edit Data';

}

function deleteData(e){
    e.parentElement.parentElement.remove();
    dataArr.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem('crudData', JSON.stringify(dataArr));
    alertText.innerText = 'Delete Data';

}

(()=>{
    dataArr = JSON.parse(localStorage.getItem('crudData')) || [];
    createPost();
})();


