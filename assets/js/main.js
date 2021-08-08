$(document).ready(function() {
    $('.banner-section').owlCarousel({
        loop:true,
        dots: true,
        nav: false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
          
        }
    });
      $('.testimonial').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            }, 
            900:{
                items:2
            },
             1300:{
                items:3
            },
          
        }
    }); 
    $('.clients').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        autoplay: true,
        margin: 15,
        responsive:{
            0:{
                items:3
            }, 
            700:{
                items:4
            }, 
            1000:{
                items:5
            },
          
        }
    });
    
    $('.image-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });  
    $('.popup-video').magnificPopup({
        type:'iframe',
        
    });
    $('.counter').countUp();
  });
  $(window).on('scroll',function(){
if($(this).scrollTop()>250){
    $('.header-area').addClass("sticky");
}else{
    $('.header-area').removeClass("sticky");
}
  });
//   One page smooth nav menu
$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 150,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',

});