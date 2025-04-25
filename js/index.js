function burg() {
    document.querySelector('.lang').classList.toggle('lang_active');
}

function calc(n, summ) {
    document.querySelector('.buttons_active').classList.remove('buttons_active');
    document.querySelector(`.b-${n}`).classList.add('buttons_active');
    document.querySelector('#summ_h').textContent = summ;
}