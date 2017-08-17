/*Main menu JS*/

$("#main-menu li:has(ul)").hover(function(){
  $(this).find("ul").slideDown("fast");
  },function(){
    $(this).find("ul").slideUp("fast");
  }
);

/*Animate.css*/
$(document).ready(function(){
  $('.images-container img').hover(function(){
  $(this).addClass('animated pulse');},function(){
    $(this).removeClass('pulse');
  }
);
});


/*Smooth scrolling*/
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    return false; 
});


/*Scroll to top*/
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});





new WOW().init();