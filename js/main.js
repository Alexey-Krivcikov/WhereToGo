new WOW().init();

let footer = document.querySelector('.footer');

function addAuthors () {
    footer.insertAdjacentHTML('beforeend', `
<p class="footer__authors show">Бухбиндер Никита <b>х</b> Алексей Кривчиков</в>
`);
}

footer.addEventListener('mouseover', addAuthors, {once: true});
