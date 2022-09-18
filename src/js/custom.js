const navbarToggle = document.querySelector(".navbar-toggle");
const navigation = document.querySelector(".navigation");

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