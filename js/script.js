
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
        text: "Assertively negotiate functionalized relationships before web information. Competently administrate cross-functional result sources maximizing web-readiness.",
        author: "Emma Watson",
        role: "CEO & Founder",
        img: "https://storage.googleapis.com/a1aa/image/9qG_Vc3UyB5wR1FA4GySNA1p2Nz6SmQTFDVX2mktjew.jpg"
    },
    {
        text: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
        author: "John Doe",
        role: "CTO",
        img: "https://storage.googleapis.com/a1aa/image/z7nceM5mpEwCIZyaM42UmBBLblNbRSK9YmO1P5LblY0.jpg"
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
    showTestimonial(0);
};