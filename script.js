$(document).ready(function () {
    let date = new Date().toDateString();
    let time = new Date().getHours();
    let row = document.querySelectorAll('.row');
    //let time = 11;
    function getCurrentdate() {

        document.getElementById('timeStamp').textContent = date;
        document.getElementById('currentTime').textContent = time;

    }
    getCurrentdate();
    
    

    //time management system...
    if (time > 8) {
        $('#8').addClass('past');
    }
    if (time === 8) {
        $('#8').addClass('present');
    }
    if (time < 8) {
        $('#8').addClass('future');
    }

    if (time > 9) {
        $('#9').addClass('past');
    }
    if (time === 9) {
        $('#9').addClass('present');
    }
    if (time < 9) {
        $('#9').addClass('future');
    }

    if (time > 10) {
        $('#10').addClass('past');
    }
    if (time === 10) {
        $('#10').addClass('present');
    }
    if (time < 10) {
        $('#10').addClass('future');
    }

    if (time > 11) {
        $('#11').addClass('past');
    }
    if (time === 11) {
        $('#11').addClass('present');
    }
    if (time < 11) {
        $('#11').addClass('future');
    }

    if (time > 12) {
        $('#12').addClass('past');
    }
    if (time === 12) {
        $('#12').addClass('present');
    }
    if (time < 12) {
        $('#12').addClass('future');
    }

    if (time > 13) {
        $('#1').addClass('past');
    }
    if (time === 13) {
        $('#1').addClass('present');
    }
    if (time < 13) {
        $('#1').addClass('future');
    }
    if (time > 14) {
        $('#2').addClass('past');
    }
    if (time === 14) {
        $('#2').addClass('present');
    }
    if (time < 14) {
        $('#2').addClass('future');
    }
    if (time > 15) {
        $('#3').addClass('past');
    }
    if (time === 15) {
        $('#3').addClass('present');
    }
    if (time < 15) {
        $('#3').addClass('future');
    }
    if (time > 16) {
        $('#4').addClass('past');
    }
    if (time === 16) {
        $('#4').addClass('present');
    }
    if (time < 16) {
        $('#4').addClass('future');
    }

    $()

});