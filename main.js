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


// Contact Form QA Validation and WhatsApp Redirection
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const statusBanner = document.getElementById("form-status-banner");

    // CONFIGURATION: Replace this with your actual WhatsApp phone number (with country code, no + or spaces)
    const WHATSAPP_NUMBER = "91XXXXXXXXXX"; 

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Reset banner and previous states
            statusBanner.style.display = "none";
            statusBanner.textContent = "";
            statusBanner.style.backgroundColor = "";
            statusBanner.style.color = "";
            statusBanner.style.border = "";

            let isValid = true;
            let firstInvalidElement = null;

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const serviceSelect = document.getElementById("service");
            const messageTextarea = document.getElementById("message");

            const errorFields = {
                name: document.getElementById("name-error"),
                email: document.getElementById("email-error"),
                service: document.getElementById("service-error"),
                message: document.getElementById("message-error")
            };

            // Clear previous errors
            Object.values(errorFields).forEach(errSpan => {
                if (errSpan) errSpan.textContent = "";
            });
            [nameInput, emailInput, serviceSelect, messageTextarea].forEach(input => {
                if (input) input.style.borderColor = "";
            });

            // 1. QA VALIDATION CHECKS

            // Name Validation (Required, min 3 chars, no purely numeric names)
            const nameVal = nameInput.value.trim();
            if (!nameVal) {
                isValid = false;
                nameInput.style.borderColor = "#ff4d4d";
                errorFields.name.textContent = "Name or Company is required.";
                if (!firstInvalidElement) firstInvalidElement = nameInput;
            } else if (nameVal.length < 3) {
                isValid = false;
                nameInput.style.borderColor = "#ff4d4d";
                errorFields.name.textContent = "Name must be at least 3 characters long.";
                if (!firstInvalidElement) firstInvalidElement = nameInput;
            } else if (/^\d+$/.test(nameVal)) {
                isValid = false;
                nameInput.style.borderColor = "#ff4d4d";
                errorFields.name.textContent = "Name cannot consist of numbers only.";
                if (!firstInvalidElement) firstInvalidElement = nameInput;
            }

            // Email Validation (Required, must match standard email pattern)
            const emailVal = emailInput.value.trim();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailVal) {
                isValid = false;
                emailInput.style.borderColor = "#ff4d4d";
                errorFields.email.textContent = "Email address is required.";
                if (!firstInvalidElement) firstInvalidElement = emailInput;
            } else if (!emailRegex.test(emailVal)) {
                isValid = false;
                emailInput.style.borderColor = "#ff4d4d";
                errorFields.email.textContent = "Please enter a valid email address (e.g. name@domain.com).";
                if (!firstInvalidElement) firstInvalidElement = emailInput;
            }

            // Service Selection Validation (Required selection)
            const serviceVal = serviceSelect.value;
            if (!serviceVal) {
                isValid = false;
                serviceSelect.style.borderColor = "#ff4d4d";
                errorFields.service.textContent = "Please select a service option.";
                if (!firstInvalidElement) firstInvalidElement = serviceSelect;
            }

            // Message Validation (Required, min 15 chars for high-quality project details)
            const messageVal = messageTextarea.value.trim();
            if (!messageVal) {
                isValid = false;
                messageTextarea.style.borderColor = "#ff4d4d";
                errorFields.message.textContent = "Project requirements are required.";
                if (!firstInvalidElement) firstInvalidElement = messageTextarea;
            } else if (messageVal.length < 15) {
                isValid = false;
                messageTextarea.style.borderColor = "#ff4d4d";
                errorFields.message.textContent = "Please provide more details (minimum 15 characters).";
                if (!firstInvalidElement) firstInvalidElement = messageTextarea;
            }

            // If QA validation failed, focus first invalid element and exit
            if (!isValid) {
                if (firstInvalidElement) {
                    firstInvalidElement.focus();
                }
                return;
            }

            // 2. WHATSAPP REDIRECTION LOGIC
            if (WHATSAPP_NUMBER === "91XXXXXXXXXX") {
                statusBanner.style.display = "block";
                statusBanner.style.backgroundColor = "rgba(220, 53, 69, 0.15)";
                statusBanner.style.color = "#dc3545";
                statusBanner.style.border = "1px solid #dc3545";
                statusBanner.textContent = "Developer Warning: Please configure your active WhatsApp number in main.js.";
                return;
            }

            // Disable button and show redirection state
            submitBtn.textContent = "Opening WhatsApp...";
            submitBtn.disabled = true;

            // Format a highly structured message
            const formattedMessage = 
`*New Project Request* 🚀
----------------------------------------
*Name/Company:* ${nameVal}
*Email:* ${emailVal}
*Service Requested:* ${serviceVal}

*Project Details:*
${messageVal}
----------------------------------------`;

            // Encode message for URL query param
            const encodedMessage = encodeURIComponent(formattedMessage);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Show success banner
            statusBanner.style.display = "block";
            statusBanner.style.backgroundColor = "rgba(40, 167, 69, 0.15)";
            statusBanner.style.color = "#28a745";
            statusBanner.style.border = "1px solid #28a745";
            statusBanner.textContent = "Form validated! Redirecting you to WhatsApp...";

            // Redirect user to WhatsApp after a short delay
            setTimeout(() => {
                window.open(whatsappUrl, "_blank");
                submitBtn.textContent = "Send Project Request";
                submitBtn.disabled = false;
                form.reset();
            }, 1000);
        });
    }
});
