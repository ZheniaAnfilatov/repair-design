$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(document).keydown(function(e) {        
    if (e.keyCode == 27) {
      modal.removeClass('modal--visible');
    }
  });
  $(document).click(function (e) {
    if ($(e.target).is (modal)) {
      modal.toggleClass('modal--visible');
    }
  });

  var btn = $('.button-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 900);
  });

});

