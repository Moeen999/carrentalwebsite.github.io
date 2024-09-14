const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
    navbar.classList.toggle("sticky", window.scrollY > 0)
);
const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");
document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);
document.querySelectorAll(".menu a").forEach((link) => link.addEventListener('click', toggleMenu));


// Scroll Reveal //
    const sr = ScrollReveal({
        origin: "bottom",
        distance: "40px",
        duration: 1000,
        delay: 400,
        easing: "ease-in-out",
    });

    sr.reveal(".hero-headlines",{origin:"left"});
sr.reveal(".hero-page img",{origin:"right"});
sr.reveal(".about");
sr.reveal(".about h1",{delay:500});
sr.reveal(".about p",{delay:700});
sr.reveal(".about-info",{delay:1000});
sr.reveal(".collection h1");
sr.reveal(".collection-container", {delay:900});
sr.reveal(".review h1");
sr.reveal(".review-container",{delay:800});
sr.reveal(".callout");
sr.reveal(".contact");

// commented because it is not working yet
