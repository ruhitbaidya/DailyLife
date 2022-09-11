// oclock code 
function oclock(){
    let data = new Date();

    let hours = data.getHours();
    let munits = data.getMinutes();
    let second = data.getSeconds();
    let zoon = '';
    
    

    if(second <= 9){
        second = '0' + second;
    }
    if(hours >= 12){
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
    
    if(munits < 9){
        munits = '0' + munits;
    }



   document.getElementById('timeShow').innerText = `${hours} : ${munits} : ${second}  ${zoon}`


   
}

setInterval(oclock, 500);