$(document).ready(function () {
    myStorage = window.localStorage;

    let date = new Date().toDateString();
    let time = new Date().getHours();
    let row = document.querySelectorAll('.row');
   
   // let time = 8;
    function getCurrentdate() {

        document.getElementById('timeStamp').textContent = date;
        document.getElementById('currentTime').textContent = time;

    }
    getCurrentdate();

   

    //time management system...
    
    
    function setColor() {

        for(let i = 8; i <= 16; i++ ){
            if (time > i) {
                $('#'+i).addClass('past');
            }
            if (time === i){
                $('#'+i).addClass('present');
            }
            if (time < i) {
                $('#'+i).addClass('future');
            }
        }
    }

    function hourly() {
        setInterval(setColor, 1000 * 3);
        //setInterval(incrementTime, 1000*10);
    }
    $('.saveBtn').click(function (e) {
        let index = e.target.value;
        console.log(index);
     
        let x = document.getElementById('note' + index).value;
        console.log(x);
        document.getElementById('note' + index).value = "";
    });
     function incrementTime() {
         time = time+1;
         console.log(time); 
     }
    hourly();
});