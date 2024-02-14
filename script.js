let currentPage = 0;
const pages = document.querySelectorAll('.page');

function flipPage() {
    pages[currentPage].classList.toggle('flip-forward');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.toggle('flip-backward');
}