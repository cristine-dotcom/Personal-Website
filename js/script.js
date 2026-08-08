// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("formMessage");

        message.innerHTML =
            `<div class="alert alert-success">
                Thank you, ${name}! Your message has been received.
            </div>`;

        contactForm.reset();

    });

}


// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.2)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
