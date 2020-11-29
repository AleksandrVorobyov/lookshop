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

var time = 30; // time in seconds
 
var $progressBar,
    $bar, 
    $elem, 
    isPause, 
    tick,
    percentTime;

// Init progressBar where elem is $("#owl-demo")
function progressBar(){    
    // build progress bar elements
    buildProgressBar();
    // start counting
    start();
}

// create div#progressBar and div#bar then prepend to $("#owl-demo")
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
    // reset timer
    percentTime = 0;
    isPause = false;
    
    // run interval every 0.01 second
    tick = setInterval(interval, 10);
};

function interval() {
    if(isPause === false){
        percentTime += 1 / time;
        
        $bar.css({
            width: percentTime+"%"
        });
        
        // if percentTime is equal or greater than 100
        if(percentTime >= 100){
            // slide to next item 
            $("#header-carousel").trigger("next.owl.carousel");
            percentTime = 0; // give the carousel at least the animation time ;)
        }
    }
}

// pause while dragging 
function pauseOnDragging(){
    isPause = true;
}

// moved callback
function moved(){
    // clear interval
    clearTimeout(tick);
    
    // start again
    start();
}

var owl = $('.shop__carousel-wrap');
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

$(document).ready(function(){
    $(".shop__carousel-wrap").owlCarousel({
      nav:false,
    //   navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
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

