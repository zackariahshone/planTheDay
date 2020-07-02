$(document).ready(function () {
    
function getCurrentdate(){
    let date = new Date().toDateString();

    document.getElementById('timeStamp').textContent = date;
}

getCurrentdate();

});