$(document).ready(function () {
  // модальное окно
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  // модальное окно

  // появление окна
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })

  // закрывание на крестик
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  // закрывание на esc
  $(document).keydown(function(e) {        
    if (e.keyCode == 27) {
      modal.removeClass('modal--visible');
    }
  });
  // закрывание на клик
  $(document).click(function (e) {
    if ($(e.target).is (modal)) {
      modal.toggleClass('modal--visible');
    }
  });
  // кнопка наверх
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

  // swiper Steps 1
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

  // swiper Steps 2
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


  // анимация
  new WOW().init();


  
  // валидацция формы модального окна
  $('.modal__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
     // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов и не больше 15",
        maxlength: "Имя не короче 2 символов и не больше 15"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });

    // валидацция формы footer
  $('.footer__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required"

    }, 
    // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов и не больше 15",
        maxlength: "Имя не короче 2 символов и не больше 15"
      },
      userPhone: "Заполните поле",
      userQuestion: "Заполните поле"
    }
  });

  // валидацция формы control
  $('.control__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required"
    }, 
    // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов и не больше 15",
        maxlength: "Имя не короче 2 символов и не больше 15"
      },
      userPhone: "Заполните поле"
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (000) 000-00-00"});


});