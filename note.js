$(document).ready(function () {
   let myStorage = window.localStorage; 

   const noteBtn = $('<button>');
   const clr = $('<button>');
   const ul = $('<ul>');
   $('.noteContainer').append(noteBtn);
   $('.noteContainer').append(clr);
   clr.text('clear data');
   noteBtn.text('push for current notes');

   //show note
   noteBtn.click(function(){
    console.log(myStorage);
    if (myStorage.length === 0){
       $('.notes').append('No notes available')
    }
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