// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.glass-panel, .badge');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealObserver.observe(el);
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollBar = document.getElementById('scroll-bar');
    if (scrollBar) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollBar.style.width = `${progress}%`;
    }
});

// Developer Boot Preloader Sequence
document.addEventListener("DOMContentLoaded", () => {
    // Lock scrolling while preloader runs
    document.body.style.overflow = "hidden";

    const terminal = document.getElementById("preloader-terminal");
    const progressBar = document.querySelector(".preloader-progress");
    const preloader = document.getElementById("preloader");

    const bootMessages = [
        { text: "initializing RKR core system modules...", type: "info" },
        { text: "checking client requirements database... SUCCESS", type: "success" },
        { text: "loading full-stack components (React, Spring Boot)...", type: "info" },
        { text: "spinning up automation test engines... ACTIVE", type: "success" },
        { text: "running Selenium web driver validation checks... OK", type: "success" },
        { text: "initiating endpoint integration tests... OK", type: "success" },
        { text: "connecting secure cloud architecture (AWS/Azure)... CONNECTED", type: "success" },
        { text: "deploying optimized static client bundles...", type: "accent" },
        { text: "boot sequence complete. system ready.", type: "success" }
    ];

    let currentLine = 0;
    const totalDuration = 2200; // Total loading time in ms
    const stepInterval = totalDuration / bootMessages.length;

    function addTerminalLine() {
        if (currentLine < bootMessages.length) {
            const msg = bootMessages[currentLine];
            const p = document.createElement("p");
            p.className = `terminal-line ${msg.type}`;
            p.textContent = `$ ${msg.text}`;
            terminal.appendChild(p);
            
            // Auto-scroll terminal to bottom
            terminal.scrollTop = terminal.scrollHeight;

            currentLine++;
            
            // Update progress bar
            const percent = (currentLine / bootMessages.length) * 100;
            progressBar.style.width = `${percent}%`;

            setTimeout(addTerminalLine, stepInterval);
        } else {
            // End of loading sequence
            setTimeout(() => {
                preloader.classList.add("fade-out");
                // Restore scroll
                document.body.style.overflow = "auto";
            }, 300);
        }
    }

    // Start boot sequence
    setTimeout(addTerminalLine, 150);
});

// Project Filter Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-detailed-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category') ? card.getAttribute('data-category').split(' ') : [];
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.classList.remove('hidden');
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});


