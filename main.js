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
    const preloader = document.getElementById("preloader");
    const terminal = document.getElementById("preloader-terminal");
    const progressBar = document.querySelector(".preloader-progress");
    const skipBtn = document.getElementById("skip-preloader-btn");

    // Session-based preloader skip (stops annoying loading sequences on re-visits)
    if (sessionStorage.getItem("hasSeenPreloader")) {
        if (preloader) preloader.style.display = "none";
        document.body.style.overflow = "auto";
        return;
    }

    // Lock scrolling while preloader runs
    document.body.style.overflow = "hidden";

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
    let isSkipped = false;
    let timeoutId = null;

    // Skip helper function
    function skipIntro() {
        if (isSkipped) return;
        isSkipped = true;
        clearTimeout(timeoutId);
        
        // Mark session so they don't have to wait on page reload / navigation
        sessionStorage.setItem("hasSeenPreloader", "true");
        
        // Hide preloader smoothly
        if (preloader) {
            preloader.classList.add("fade-out");
            setTimeout(() => {
                preloader.style.display = "none";
            }, 800);
        }
        document.body.style.overflow = "auto";
    }

    // Add Skip Event Listeners
    if (skipBtn) {
        skipBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            skipIntro();
        });
    }
    if (preloader) {
        preloader.addEventListener("click", skipIntro);
    }
    
    // Keypress triggers (Space, Enter, Escape to instantly bypass the sequence)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
            if (preloader && !preloader.classList.contains("fade-out")) {
                skipIntro();
            }
        }
    });

    function addTerminalLine() {
        if (isSkipped) return;
        if (currentLine < bootMessages.length) {
            const msg = bootMessages[currentLine];
            const p = document.createElement("p");
            p.className = `terminal-line ${msg.type}`;
            p.textContent = `$ ${msg.text}`;
            
            if (terminal) {
                terminal.appendChild(p);
                // Auto-scroll terminal to bottom
                terminal.scrollTop = terminal.scrollHeight;
            }

            currentLine++;
            
            // Update progress bar
            if (progressBar) {
                const percent = (currentLine / bootMessages.length) * 100;
                progressBar.style.width = `${percent}%`;
            }

            timeoutId = setTimeout(addTerminalLine, stepInterval);
        } else {
            // End of loading sequence, auto-close after 300ms
            timeoutId = setTimeout(() => {
                skipIntro();
            }, 300);
        }
    }

    // Start boot sequence
    timeoutId = setTimeout(addTerminalLine, 150);
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
    const WHATSAPP_NUMBER = "918580302377"; 

    if (form) {
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

        // Real-time validation listeners to clear errors on user input/change
        if (nameInput) {
            nameInput.addEventListener("input", () => {
                nameInput.style.borderColor = "";
                if (errorFields.name) errorFields.name.textContent = "";
            });
        }
        if (emailInput) {
            emailInput.addEventListener("input", () => {
                emailInput.style.borderColor = "";
                if (errorFields.email) errorFields.email.textContent = "";
            });
        }
        if (serviceSelect) {
            serviceSelect.addEventListener("change", () => {
                serviceSelect.style.borderColor = "";
                if (errorFields.service) errorFields.service.textContent = "";
            });
        }
        if (messageTextarea) {
            messageTextarea.addEventListener("input", () => {
                messageTextarea.style.borderColor = "";
                if (errorFields.message) errorFields.message.textContent = "";
            });
        }

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

            // Disable button and show submission state
            submitBtn.textContent = "Submitting Request...";
            submitBtn.disabled = true;

            // Format a highly structured message for WhatsApp
            const formattedMessage = 
`*New Project Request* 🚀
----------------------------------------
*Name/Company:* ${nameVal}
*Email:* ${emailVal}
*Service Requested:* ${serviceVal}

*Project Details:*
${messageVal}
----------------------------------------`;

            // Show intermediate state in the banner
            statusBanner.style.display = "block";
            statusBanner.style.backgroundColor = "rgba(56, 189, 248, 0.15)";
            statusBanner.style.color = "#38bdf8";
            statusBanner.style.border = "1px solid #38bdf8";
            statusBanner.textContent = "Sending project request to email...";

            // Use FormData to ensure FormSubmit.co parses all fields (Name, Email, Service, Message) correctly
            const formData = new FormData(form);
            formData.append("_subject", `New Project Request from ${nameVal}`);
            formData.append("_captcha", "false");

            // Submit to FormSubmit.co via AJAX (Fetch API)
            fetch("https://formsubmit.co/ajax/ronitofficial99@gmail.com", {
                method: "POST",
                headers: { 
                    "Accept": "application/json"
                },
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Email submission failed");
                }
            })
            .then(data => {
                // Email sent successfully! Update status banner to show redirection to WhatsApp
                statusBanner.style.backgroundColor = "rgba(40, 167, 69, 0.15)";
                statusBanner.style.color = "#28a745";
                statusBanner.style.border = "1px solid #28a745";
                statusBanner.textContent = "Success! Email sent. Redirecting to WhatsApp...";
                
                submitBtn.textContent = "Opening WhatsApp...";
                
                // Encode message for URL query param
                const encodedMessage = encodeURIComponent(formattedMessage);
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

                // Redirect user to WhatsApp after a short delay
                setTimeout(() => {
                    window.open(whatsappUrl, "_blank");
                    submitBtn.textContent = "Send Project Request";
                    submitBtn.disabled = false;
                    form.reset();
                }, 1000);
            })
            .catch(error => {
                console.error("FormSubmit Error:", error);
                // Fallback: If email delivery fails or is offline, still redirect to WhatsApp
                statusBanner.style.backgroundColor = "rgba(220, 53, 69, 0.15)";
                statusBanner.style.color = "#dc3545";
                statusBanner.style.border = "1px solid #dc3545";
                statusBanner.textContent = "Email service offline. Redirecting to WhatsApp direct chat...";

                submitBtn.textContent = "Opening WhatsApp...";

                const encodedMessage = encodeURIComponent(formattedMessage);
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

                setTimeout(() => {
                    window.open(whatsappUrl, "_blank");
                    submitBtn.textContent = "Send Project Request";
                    submitBtn.disabled = false;
                    form.reset();
                }, 1500);
            });
        });
    }
});
