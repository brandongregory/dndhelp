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

function initDeflectMissiles() {
    const monkLevelField = document.querySelector("#deflect-missiles--monk-level");
    const dexterityModifierField = document.querySelector("#deflect-missiles--dexterity-modifier");

    monkLevelField.addEventListener("input", function() {
        calculateDeflectMissiles();
    });
    dexterityModifierField.addEventListener("input", function() {
        calculateDeflectMissiles();
    });
}

function calculateDeflectMissiles() {
    let monkLevel = document.querySelector("#deflect-missiles--monk-level").value;
    let dexterityModifier = document.querySelector("#deflect-missiles--dexterity-modifier").value;
    const averageDamageField = document.querySelector("#deflect-missiles--average-damage");
    const minimumDamageField = document.querySelector("#deflect-missiles--average-damage");
    const averageRoll = 5.5;
    const minimumRoll = 1;

    monkLevel = (isNaN(monkLevel)) ? 0 : Number(monkLevel);
    dexterityModifier = (isNaN(dexterityModifier)) ? 0 : Number(dexterityModifier);

    averageDamageField.innerHTML = averageRoll + monkLevel + dexterityModifier;
    minimumDamageField.innerHTML = minimumRoll + monkLevel + dexterityModifier;
}

function initPageScripts() {
    const body = document.querySelector("body");
    if (body.classList.contains("monk-deflect-missiles")) {
        initDeflectMissiles();
    }
}

initPageScripts();