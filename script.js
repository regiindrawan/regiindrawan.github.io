const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});
// ===== Skill Bar Animation =====

const skillBars = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.width = entry.target.dataset.width;

        }

    });

}, {
    threshold:0.4
});

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
const navbar = document.querySelector("nav");

if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
} else {
    navbar.classList.remove("scrolled");
}
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// ===== Back To Top =====

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// ==========================
// SOAP POPUP
// ==========================

const openSoapPopup = document.getElementById("openSoapPopup");
const soapPopup = document.getElementById("soapPopup");
const closePopup = document.querySelector(".close-popup");

openSoapPopup.addEventListener("click", function(e){

    e.preventDefault();

    soapPopup.classList.add("show");

});

closePopup.addEventListener("click", function(){

    soapPopup.classList.remove("show");

});

soapPopup.addEventListener("click", function(e){

    if(e.target === soapPopup){

        soapPopup.classList.remove("show");

    }

});
// ==========================
// SOAP GALLERY
// ==========================

const popupMainImage = document.getElementById("popupMainImage");

const popupThumbs = document.querySelectorAll(".popup-thumb");

function changeProductImage(image){

    popupMainImage.src = image.src;

    popupThumbs.forEach(function(item){

        item.classList.remove("active");

    });

    image.classList.add("active");

}
// ==========================
// PREMIUM SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        const targetPosition = target.offsetTop - 80;
        const startPosition = window.pageYOffset;

        const distance = targetPosition - startPosition;

        const duration = 1000;

        let start = null;

        function animation(currentTime){

            if(start === null) start = currentTime;

            const timeElapsed = currentTime - start;

            const progress = Math.min(timeElapsed / duration, 1);

            const ease =
                progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if(timeElapsed < duration){

                requestAnimationFrame(animation);

            }

        }

        requestAnimationFrame(animation);

    });

});
