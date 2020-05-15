

//   const removeModal = () => {
//     modal.classList.remove('modal--visible')
//   }
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }


//   document.addEventListener('keypress', (event) => {
//     if (event.key === 27);
//     console.log('Esc')
//     // removeModal();
//   });

//   document.addEventListener("click", (event) => {
//     if (event.target == modal) {
//     switchModal();
//     }
//   });


// });



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
});