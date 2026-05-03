function showMessage() {
    alert("Thank you! I will contact you soon.");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}