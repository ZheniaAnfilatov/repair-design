document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const removeModal = () => {
    modal.classList.remove('modal--visible')
  }
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape");
    removeModal();
  });

  document.addEventListener("click", (event) => {
    if (event.target == modal) {
    switchModal();
    }
  });

});