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

  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
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
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  })

  var stepsNext = $('.steps__swiper-button-next');
  var stepsPrev = $('.steps__swiper-button-prev');
  var stepsBullets = $('.steps__swiper-pagination');

  stepsNext.css('left', stepsPrev.width() + 10 + stepsBullets.width() + 30)
  stepsBullets.css('left', stepsPrev.width() + 20)

  // swiper Steps 2
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    virtualTranslate: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var bullets2 = $('.steps__swiper-pagination2');
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.steps__swiper-pagination2',
      type: 'fraction',

    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
    
  });

  // анимация
  new WOW().init();


  
  // валидацция формы модального окна
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      }
    },
     // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше 2 символов",
        maxlength: "Не больше 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response)
        }
      });
    }
  });

  // валидацция формы economy
  $('.economy__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      }
    },
      // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше 2 символов",
        maxlength: "Не больше 15 символов"
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
    errorClass: "invalid",
    errorElement: "div",
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
    errorClass: "invalid",
    errorElement: "div",
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

  $('[type=tel]').mask('+7(000) 000-00-00');

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
  }); 
});
