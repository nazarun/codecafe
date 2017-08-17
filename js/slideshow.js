var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = '../img/slider-bg1.jpg';
backgrounds[1] = '../img/slider-bg2.jpg';
backgrounds[2] = '../img/web-computer.jpg';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 2) currentBackground = 0;

    $('.slider-bg').fadeOut(500,function() {
        $('.slider-bg').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('.slider-bg').fadeIn(500);
    });
    setTimeout(changeBackground, 6000);
}

$(document).ready(function() {
    setTimeout(changeBackground, 4000);        
});
  
    
    
    