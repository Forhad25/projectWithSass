$(document).ready(function(){

  $(window).on('scroll', function(){

    if($(this).scrollTop() > 20){
      $('.header-area').addClass('sticky'); }
    
      else{
        $('.header-area').removeClass('sticky');
      }
    
    });

    $(".nav").onePageNav({
    currentClass: 'active'
    });
 
});

// jquery scroll top 

$(window).scroll(function(){
  if($(this).scrollTop() > 300){
    $("#return").addClass('scroll-top')
  }
  else{
    $("#return").removeClass('scroll-top')
  }
  
  $('#return').click(function(){
    $('html, body').animate({
      scrollTop: 0,
    }, 500,);
  })
})