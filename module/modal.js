const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_modal = document.querySelector('.btn-modal');
const btn_close = document.querySelector('.btn-close');
const close = [btn_close, overlay]

btn_modal.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

close.forEach(value => {
  value.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  })
})