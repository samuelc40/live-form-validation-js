const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    btnPopup.style.display = 'none';
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    btnPopup.style.display = 'block';
});

