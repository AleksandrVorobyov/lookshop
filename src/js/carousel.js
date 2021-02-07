$(document).ready(function(){
    $(".header-carousel__wrapper").owlCarousel({
      items: 1,
      nav:true,
      navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      dots: true,
      autoplay: true,
      autoplayTimeout: 30000,
      smartSpeed:1800,
      loop: true,
      margin: 10,
      onInitialized: progressBar,
      onTranslated: moved,
      onDrag: pauseOnDragging
    });
  });

var time = 30; 
 
var $progressBar,
    $bar, 
    $elem, 
    isPause, 
    tick,
    percentTime;

function progressBar(){    
    buildProgressBar();
    start();
}

function buildProgressBar(){
    $progressBar = $("<div>",{
        id:"progress-bar"
    });
    
    $bar = $("<div>",{
        id:"header__progress-bar"
    });
    
    $progressBar.append($bar).prependTo($("#header-carousel"));
}

function start() {
    percentTime = 0;
    isPause = false;
    
    tick = setInterval(interval, 10);
};

function interval() {
    if(isPause === false){
        percentTime += 1 / time;
        
        $bar.css({
            width: percentTime+"%"
        });
        
        if(percentTime >= 100){
            $("#header-carousel").trigger("next.owl.carousel");
            percentTime = 0; // give the carousel at least the animation time ;)
        }
    }
}

function pauseOnDragging(){
    isPause = true;
}

function moved(){
    clearTimeout(tick);
    
    start();
}

var owl = $('.shop__carousel-wrap');

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
})

$(document).ready(function(){
    $(".shop__carousel-wrap").owlCarousel({
      nav:false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 30000,
      autoplayHoverPause: true,
      smartSpeed:2000,
      loop: true,
      autoWidth: true,
      center: true,
      responsive: {
          0: {
            margin: 35,
          },
          1000: {
            margin: 30,
          }
      }
    });
});
