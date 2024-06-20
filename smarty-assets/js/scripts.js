AOS.init();

setTimeout(function(){
  $('.loader').remove();
}, 3000);

$('.bx-slider1').bxSlider({
  auto: true,
  controls: false,
  pager: false
});

$('.bx-slider2').bxSlider({
  auto: true,
  controls: false,
  pager: false
});