let mybutton = document.getElementById("button-to-top");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollToSection()
{const profileSection = document.getElementById("profile");
    profileSection.scrollIntoView({ behavior: "smooth", block: "start" });}
