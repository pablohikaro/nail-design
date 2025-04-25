
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

const btnMenu = document.getElementById("hamburger-button");
const menu = document.getElementById("menu");

btnMenu.classList.add("hamburger-button-js-enabled");

function closeMenu() {
    btnMenu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.add("menu-closed");
}

function openMenu() {
    btnMenu.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    menu.classList.remove("menu-closed");
}

function toggleMenu() {
    const expanded = btnMenu.getAttribute("aria-expanded") === "true";

    if (expanded) {
        closeMenu();
        document.removeEventListener("click", outsideClick);
    } else {
        openMenu();
        setTimeout(() => {
            document.addEventListener("click", outsideClick);
        }, 1);
    }
}

function outsideClick(event) {
    if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
        closeMenu();
        document.removeEventListener("click", outsideClick);
    }
}

btnMenu.addEventListener("click", toggleMenu);


const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        openMenu();
    } else {
        closeMenu();
    }
}

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);