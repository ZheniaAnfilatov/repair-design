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
  // swiper Projects
  var mySwiper = new Swiper ('.projects-swiper', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.projects__swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 35)
  bullets.css('left', prev.width() + 25)

  // swiper Steps
  var mySwiperSteps = new Swiper ('.steps-swiper', {
    loop: true,
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.steps__swiper-pagination');

  // next.css('left', prev.width() + 10 + bullets.width() + 18)
  bullets.css('left', prev.width() + 10)


  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    virtualTranslate: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });



});