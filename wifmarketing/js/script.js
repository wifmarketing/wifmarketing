
// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
});
// Sticky Header and Logo Change
window.onscroll = function() {stickyHeader()};

const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

function stickyHeader() {
    if (window.pageYOffset > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


const testimonials = [
    {
        text: "WIF Marketing helped us increase our sales significantly! Their strategic digital marketing campaigns brought more leads and engagement to our business.",
        author: "Revolt Bike Surat",
        role: "Marketing Head",
        img: "https://storage.googleapis.com/a1aa/image/9qG_Vc3UyB5wR1FA4GySNA1p2Nz6SmQTFDVX2mktjew.jpg"
    },
    {
        text: "Thanks to WIF Marketing, our brand now has strong positioning in the industry. Their expertise in paid ads and social media management made a real impact!",
        author: "Evanta Automotive",
        role: "CEO",
        img: "https://storage.googleapis.com/a1aa/image/z7nceM5mpEwCIZyaM42UmBBLblNbRSK9YmO1P5LblY0.jpg"
    },
    {
        text: "Our brand awareness has skyrocketed! WIF Marketing helped us connect with our audience and increase customer trust. Highly recommended!",
        author: "Jivan Amrut Shing Tel",
        role: "Founder",
        img: "https://storage.googleapis.com/a1aa/image/9qG_Vc3UyB5wR1FA4GySNA1p2Nz6SmQTFDVX2mktjew.jpg"
    }
];

let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonial = testimonials[index];

    document.getElementById("testimonial-text").innerText = testimonial.text;
    document.getElementById("testimonial-author").innerText = testimonial.author;
    document.getElementById("testimonial-role").innerText = testimonial.role;
    document.getElementById("testimonial-img").src = testimonial.img;

    // Update active border effect
    document.querySelectorAll(".nav-img").forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });

    currentTestimonial = index;
}

// Auto-change testimonial every 5 seconds
setInterval(() => {
    let nextTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextTestimonial);
}, 5000);

// Load initial testimonial
window.onload = () => {
    document.querySelectorAll(".nav-img")[0].src = testimonials[0].img;
    document.querySelectorAll(".nav-img")[1].src = testimonials[1].img;
    document.querySelectorAll(".nav-img")[2].src = testimonials[2].img;
    showTestimonial(0);
};


document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;

        // Close all other open FAQs
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== faqItem) {
                item.classList.remove("active");
            }
        });

        // Toggle the clicked FAQ
        faqItem.classList.toggle("active");
    });
});