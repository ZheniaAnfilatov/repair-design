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
  var modalThanks = $('.modal__thanks');
      closeThanks = $('.modal__thanks--close');

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
        data: $('.modal__form').serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.addClass('modal__thanks--visible');
        }
      });
    }
  });

  // закрывание на крестик
  closeThanks.on('click', function () {
    modalThanks.toggleClass('modal__thanks--visible');
  });

  // закрывание на esc
  $(document).keydown(function(e) {        
    if (e.keyCode == 27) {
      modalThanks.removeClass('modal__thanks--visible');
    }
  });
  // закрывание на клик
  $(document).click(function (e) {
    if ($(e.target).is (modalThanks)) {
      modalThanks.toggleClass('modal__thanks--visible');
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $().serialize('.economy__form'),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.addClass('modal__thanks--visible');
        }
      });
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $().serialize('.footer__form'),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.addClass('modal__thanks--visible');
        }
      });
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $().serialize('.control__form'),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.addClass('modal__thanks--visible');
        }
      });
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00');



  var spinner = $('.ymap-container').children('.loader');

  var check_if_load = false;

  var myMapTemp, myPlacemarkTemp;
  
 
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.244729, 39.723187], 
      zoom: 14, 
      controls: ['zoomControl', 'fullscreenControl']
    });
    var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {

        iconLayout: 'default#imageWithContent',

        iconImageHref: 'img/map-marker.png',

        iconImageSize: [50, 50],

        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); 
  

    var layer = myMapTemp.layers.get(0).get(0);
  

    waitForTilesLoad(layer).then(function() {

      spinner.removeClass('is-active');
    });
  }
  
 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  function loadScript(url, callback){
    var script = document.createElement("script");
  
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { 
  
          check_if_load = true; 
  
          spinner.addClass('is-active');
  
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){

            ymaps.load(init);
          });                
        }
      }
    );  
  }
  
  $(function() {
 
  ymap();

  });

});
