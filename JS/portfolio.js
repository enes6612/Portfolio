function toggleMenu(){
    const menu = document.querySelector(".menu-links-mobile");
    const icon = document.querySelector(".mobile-nav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}