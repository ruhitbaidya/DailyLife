// oclock code 
function oclock(){
    let data = new Date();
    let crudCurrentDate = content.querySelector('#crudCurrentDate');
    
    let hours = data.getHours();
    let munits = data.getMinutes();
    let second = data.getSeconds();
    let zoon = '';
    let day = data.getDay();
    let month = data.getMonth();
    let year = data.getFullYear();
    let dates = data.getDate();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat']
    let monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let showdate = `${dates} / ${month +1} / ${year} - ${days[day]} - ${monthsName[month]}`
    crudCurrentDate.value = showdate;
    month = month +1
    if(month < 10){
        month = '0' + month;
    }
    
    if(second <= 9){
        second = '0' + second;
    }
    if(hours > 12 ){
        hours =  hours - 12;
        zoon = 'PM'
    }else if(hours == 0){
        hours = '12';
        zoon = 'AM';
    }else{
        hours = hours;
        zoon = 'AM';
    }
    if(hours <= 9){
        hours = '0' + hours;
    }
    
    if(munits <= 9){
        munits = '0' + munits;
    }



   document.getElementById('timeShow').innerText = `${hours} : ${munits} : ${second}  ${zoon}`


   
}

setInterval(oclock, 500);

