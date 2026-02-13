document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");
    const contactForm = document.querySelector("#contact-form");
    const buttons = document.querySelectorAll(".js_show_btn");
    const timelineItems = document.querySelectorAll(".timeline-item");
    const qualifCards = document.querySelectorAll(".qualif-card");
    const competencesBtns = document.querySelectorAll(".competences-btn");

    // ✅ Menu hamburger
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }

    // ✅ Gestion des boutons "À propos"
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".selected_btn")?.classList.remove("selected_btn");
            this.classList.add("selected_btn");

            const targetId = this.getAttribute("data-nw-id-target");
            document.querySelectorAll(".about_p").forEach(section => section.classList.add("hidden"));
            document.getElementById(targetId)?.classList.remove("hidden");
        });
    });

    // ✅ Smooth scroll pour les liens de navigation
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // ✅ Observer pour les animations au scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.3 });

    [...timelineItems, ...qualifCards].forEach(item => observer.observe(item));

    // ✅ Navigation active au scroll
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").slice(1) === current) {
                item.classList.add("active");
            }
        });
    });

    // ✅ Gestion du formulaire de contact
    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();
            alert("Formulaire soumis avec succès !");
        });
    }

    // ✅ Gestion des boutons "Compétences"
    competencesBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelector(".competences-btn.active")?.classList.remove("active");
            this.classList.add("active");

            document.querySelector(".competences-category.active")?.classList.remove("active");
            document.getElementById(this.dataset.category)?.classList.add("active");
        });
    });

    // ✅ Révélation des sections au scroll
    const revealOnScroll = () => {
        document.querySelectorAll(".box_style").forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 50) {
                section.classList.add("show");
            }
        });
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Exécuter une première fois
});
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".box_style");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    items.forEach(item => observer.observe(item));
});
