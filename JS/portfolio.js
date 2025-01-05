function toggleMenu(){
    const menu = document.querySelector(".menu-links-mobile");
    const icon = document.querySelector(".mobile-nav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
scrollToTopButton.addEventListener('click', () => {
    // Scroll langzaam terug naar boven
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});