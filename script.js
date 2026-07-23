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
