$(document).ready(function () {
   let myStorage = window.localStorage; 

   const btn = $('<button>');
    const clr = $('<button>');
    const ul = $('<ul>')
   $('.noteContainer').append(btn);
   $('.noteContainer').append(clr);
   clr.text('clear data');
   btn.text('push for current notes');


   btn.click(function(){
    console.log(myStorage);
    for (var i = 0; i < myStorage.length; i++){
       const br = $('<br>');  
          
        $('.notes').append(myStorage.getItem(myStorage.key(i)));
        $('.notes').append(br); 
    }
   });

   clr.click(function(){
    myStorage.clear();
    $('.notes').empty();
    $('.notes').append('memory cleared');
   });
   

});