$(document).ready(function(){
    $(document).on("keydown",function(e){
        e.preventDefault(); 
        if (e.keyCode == 16) {
              if (e.originalEvent.location == 1)
                  $('.left-shift').css('opacity','0.0');
              else
                  $('.right-shift').css('opacity','0.0');
              return;
          } else if (e.keyCode == 17) {
              if (e.originalEvent.location == 1)
                  $('.leftCtrl').css('opacity','0.0');
              else
                  $('.rightCtrl').css('opacity','0.0');
              return;
          } else if (e.keyCode == 18) {
              if (e.originalEvent.location == 1)
                  $('.leftAlt').css('opacity','0.0');
              else
                  $('.rightAlt').css('opacity','0.0');
              return;
          }
          
          $('#'+e.keyCode).css('opacity','0.0');
    });
    $(document).on("keyup press",function (e) {
        e.preventDefault(); 
    });
    
});
