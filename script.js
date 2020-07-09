$(document).ready(function () {
    let myStorage = window.localStorage;
    y = 0;
    let date = moment().date();
    let time = moment().hour();
    //let row = document.querySelectorAll('.row');
 
   
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
        
    }

    $('.saveBtn').click(function (e) {
        let index = e.target.value;
        console.log(index);
         
        y ++;
        let x = document.getElementById('note' + index).value;
        console.log(x);
        document.getElementById('note' + index).value = "";
        myStorage.setItem(y,index+" "+ x);
        printStorage();
        
    });
    function printStorage(){
        for (var i = 1; i < myStorage.length; i++){
            $('.noteContainer').append(myStorage.getItem(myStorage.key(i)));
        }
         
    }

    hourly();

});