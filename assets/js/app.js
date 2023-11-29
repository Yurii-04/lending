// swiper
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// hamburger
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
});
