// ===============================
// CourseHub - Smart Interactions
// ===============================

// Wait until page loads fully
document.addEventListener("DOMContentLoaded", () => {

    // ================= LOGIN BUTTON =================
    const loginBtn = document.querySelector(".login-btn");

    loginBtn.addEventListener("click", () => {
        alert("🔐 Login page will be added soon!");
    });


    // ================= SIGNUP BUTTON =================
    const signupBtn = document.querySelector(".signup-btn");

    signupBtn.addEventListener("click", () => {
        alert("🎉 Signup feature coming soon!");
    });


    // ================= HERO BUTTON SCROLL =================
    const heroBtn = document.querySelector(".hero button");

    heroBtn.addEventListener("click", () => {
        document.querySelector(".courses").scrollIntoView({
            behavior: "smooth"
        });
    });


    // ================= CATEGORY CLICK =================
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const name = category.innerText;

            // small animation effect
            category.style.transform = "scale(1.1)";

            setTimeout(() => {
                category.style.transform = "scale(1)";
            }, 200);

            alert("📚 You selected: " + name);
        });
    });


    // ================= ADD TO CART =================
    const cartButtons = document.querySelectorAll(".course-card button");

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {

            button.innerText = "Added ✔";
            button.style.background = "#22c55e";

            setTimeout(() => {
                button.innerText = "Add To Cart";
                button.style.background = "";
            }, 2000);
        });
    });


    // ================= SMOOTH CARD EFFECT =================
    const cards = document.querySelectorAll(".course-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0px)";
        });
    });


    // ================= NAVBAR SCROLL EFFECT =================
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(28,29,31,0.98)";
            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        } else {
            navbar.style.background = "rgba(28,29,31,0.9)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
        }
    });

});