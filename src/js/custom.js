const body = document.querySelector("body");
const navbarToggle = document.querySelector(".navbar-toggle");
const navigation = document.querySelector(".navigation");
const subnavTriggers = document.querySelectorAll(".subnav-trigger");

navbarToggle.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    if (navbarToggle.classList.contains("open")) {
        navbarToggle.classList.remove("open");
        navbarToggle.classList.add("closed");
        navigation.classList.remove("open");
        navigation.classList.add("closed");
    } else {
        navbarToggle.classList.remove("closed");
        navbarToggle.classList.add("open");
        navigation.classList.remove("closed");
        navigation.classList.add("open");
    }
});

subnavTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function(clickEvent) {
        const subnavParent = trigger.parentElement;
        clickEvent.preventDefault();
        if (subnavParent.classList.contains("open")) {
            subnavParent.classList.remove("open");
        } else {
            closeAllNavItems();
            subnavParent.classList.add("open");
        }
    });
})

function closeAllNavItems() {
    subnavTriggers.forEach(function(trigger) {
        const subnavParent = trigger.parentElement;
        subnavParent.classList.remove("open")
    });
}