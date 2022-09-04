// oclock code 
function oclock(){
    let data = new Date();

    let hours = data.getHours();
    let munits = data.getMinutes();
    let second = data.getSeconds();
    
    
    document.getElementById('timeShow').innerText = `${hours} : ${munits} : ${second}`

   




    setInterval(() => {
        oclock()
    }, 500);
}
oclock()