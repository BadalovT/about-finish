$(document).ready(function(){
     var wow = new WOW( {
        offset: 0
    });
    wow.init();

    $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    center: true,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
            0 : {
                items: 2
            },
            480 : {
                items: 3
            },
            768 : {
                items: 6
            }
        }
});

 $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


    });
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

