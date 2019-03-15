       $(document).ready(function(){
				 var x = document.getElementById("myTopnav");
				 var $nav = $('.ul');
		
		$('#menu-icon').click((e)=>{
						
   // if (x.className === "topnav") {
   //     x.className += " responsive";
   // } else {
   //     x.className = "topnav";
   // }
			
			$('.ul').toggleClass('show');
			
			
		})
				 
		$('a', '.ul').click((e)=> {
			$('.ul').toggleClass('show');
		})
				 
            


     $('a').on('click', function(){
        $('a').removeClass('active');
        $(this).addClass('active');
    }); 
				 
				 
				 
				 
				 
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
//        $('nav').addClass('fixed');
        $('.section').each(function(i) {
            if ($(this).position().top <= windscroll + 80) {
                $('.nav-link a.active').removeClass('active');
                $('.nav-link a').eq(i).addClass('active');
            }
        });

    } else {

//        $('nav').removeClass('fixed');
        $('.nav-link a.active').removeClass('active');
        $('.nav-link a:first').addClass('active');
    }

}).scroll();	
				 
				 
				 
				 
				 
				 

$('a').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.section').eq(0).offset().top - 40
    }, 300); 
});

$('a').eq(1).click(() => {
    $('html, body').animate({
        scrollTop: $('.section').eq(1).offset().top - 70
    }, 300);
});

$('a').eq(2).click(() => {
    $('html, body').animate({
        scrollTop: $('.section').eq(2).offset().top - 70
    }, 300);
});



var currentTime = new Date();
var year = currentTime.getFullYear();

document.getElementById('currentYear').innerHTML = year;
                    

    
});