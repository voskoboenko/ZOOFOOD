//= ../../bower_components/jquery/dist/jquery.js
//= ../../node_modules/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/jquery-mask-plugin/dist/jquery.mask.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js
//= ../../bower_components/wow/dist/wow.min.js

new WOW().init();


$('#sliderAction').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});

$('#instagramSlider').owlCarousel({
  loop:true,
  margin:15,
  nav:true,
  navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  dots: false,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
});


$('#extraSlider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
});

var owl = $('#extraSlider');
owl.owlCarousel();
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
  owl.trigger('prev.owl.carousel');
});


$('#brandsSlider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
    0:{
      items:2
    },
    700:{
      items:5
    },
    1000:{
      items:7
    }
  }
});

var owl2 = $('#brandsSlider');
owl2.owlCarousel();
$('.customNextBtn2').click(function() {
  owl2.trigger('next.owl.carousel');
});
$('.customPrevBtn2').click(function() {
  owl2.trigger('prev.owl.carousel');
});


$('.allCategories').click(function(){
  $('.categories-container').removeClass('collapse-categories');
});
$('.closeButton').click(function(){
  $('.categories-container').addClass('collapse-categories');
});






jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});