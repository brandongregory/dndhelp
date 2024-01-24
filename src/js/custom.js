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

function initMonkCalculators() {
    const dmMonkLevelField = document.querySelector("#deflect-missiles--monk-level");
    const dmDexterityModifierField = document.querySelector("#deflect-missiles--dexterity-modifier");
    const sfMonkLevelField = document.querySelector("#slow-fall--monk-level");

    dmMonkLevelField.addEventListener("input", calculateDeflectMissiles);
    dmDexterityModifierField.addEventListener("input", calculateDeflectMissiles);

    sfMonkLevelField.addEventListener("input", calculateSlowFall);
}

function calculateDeflectMissiles() {
    const form = document.querySelector("#deflect-missiles--form");
    const monkLevelField = document.querySelector("#deflect-missiles--monk-level");
    const dexterityModifierField = document.querySelector("#deflect-missiles--dexterity-modifier");
    let monkLevel = monkLevelField.value;
    let dexterityModifier = dexterityModifierField.value;
    const averageDamageField = document.querySelector("#deflect-missiles--average-damage");
    const minimumDamageField = document.querySelector("#deflect-missiles--minimum-damage");
    const averageRoll = 5.5;
    const minimumRoll = 1;

    monkLevelField.setCustomValidity("");
    dexterityModifierField.setCustomValidity("");

    if (monkLevelField.validity.rangeOverflow || monkLevelField.validity.rangeUnderflow)
        monkLevelField.setCustomValidity("Level should be 3 to 20");
    if (dexterityModifierField.validity.rangeOverflow || dexterityModifierField.validity.rangeUnderflow)
        dexterityModifierField.setCustomValidity("Modifier should be -5 to 7");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    monkLevel = (isNaN(monkLevel)) ? 0 : Number(monkLevel);
    dexterityModifier = (isNaN(dexterityModifier)) ? 0 : Number(dexterityModifier);

    averageDamageField.innerHTML = averageRoll + monkLevel + dexterityModifier;
    minimumDamageField.innerHTML = minimumRoll + monkLevel + dexterityModifier;
}

function calculateSlowFall() {
    const form = document.querySelector("#slow-fall--form");
    const monkLevelField = document.querySelector("#slow-fall--monk-level");
    let monkLevel = monkLevelField.value;
    let damageReduction;
    const damageField = document.querySelector("#slow-fall--damage");
    const averageField = document.querySelector("#slow-fall--average");
    const maxField = document.querySelector("#slow-fall--max");
    const averageRoll = 3.5;
    const maxRoll = 6;

    monkLevelField.setCustomValidity("");

    if (monkLevelField.validity.rangeOverflow || monkLevelField.validity.rangeUnderflow)
        monkLevelField.setCustomValidity("Level should be 4 to 20");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    monkLevel = (isNaN(monkLevel)) ? 0 : Number(monkLevel);
    damageReduction = monkLevel * 5;

    const roundToNearest = function(damage) {
        return (Math.ceil(damage / 10) * 10) - 1;
    };

    damageField.innerHTML = damageReduction;
    averageField.innerHTML = roundToNearest(Math.floor(damageReduction / averageRoll * 10));
    maxField.innerHTML = roundToNearest(Math.floor(damageReduction / maxRoll * 10));
}

function initPageScripts() {
    const body = document.querySelector("body");
    if (body.classList.contains("monk-calculators")) initMonkCalculators();
}

initPageScripts();