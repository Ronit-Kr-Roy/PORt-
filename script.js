document.addEventListener('DOMContentLoaded', () => {
    // ─── Theme Toggle ─────────────────────────────────────────────────────────
    const themeToggle = document.getElementById('theme-toggle');
    // Load persisted theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });
    }

    // ─── Mobile Menu Drawer ───────────────────────────────────────────────────
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link-item');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Close mobile menu when a nav link is clicked
        navLinkItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });
    }

    // ─── Project Filter ───────────────────────────────────────────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-detailed-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state on buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category') || '';
                    if (filterValue === 'all' || category.includes(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ─── Contact Form Validation & Submission ──────────────────────────────
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const statusBanner = document.getElementById('form-status-banner');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Always prevent actual page reload

            let isFormValid = true;

            // 1. Validate Name
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your name');
                isFormValid = false;
            } else {
                clearError(nameInput);
            }

            // 2. Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Please enter your email');
                isFormValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address');
                isFormValid = false;
            } else {
                clearError(emailInput);
            }

            // 3. Validate Message
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Please write a message');
                isFormValid = false;
            } else {
                clearError(messageInput);
            }

            // 4. Submit Output
            if (isFormValid) {
                // Show success banner
                if (statusBanner) {
                    statusBanner.style.display = 'flex';
                    // Hide success banner after 5 seconds
                    setTimeout(() => {
                        statusBanner.style.display = 'none';
                    }, 5000);
                }
                
                // Reset Form
                contactForm.reset();
            } else {
                // Ensure banner is hidden on failed validation
                if (statusBanner) {
                    statusBanner.style.display = 'none';
                }
            }
        });

        // Add real-time input listeners to clear errors on typing
        const inputs = [nameInput, emailInput, messageInput];
        inputs.forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    if (input.value.trim()) {
                        clearError(input);
                    }
                });
            }
        });
    }

    function showError(inputElement, message) {
        const formGroup = inputElement.closest('.form-group');
        if (formGroup) {
            formGroup.classList.add('invalid');
            const errorSpan = formGroup.querySelector('.error-msg');
            if (errorSpan) {
                errorSpan.textContent = message;
            }
        }
    }

    function clearError(inputElement) {
        const formGroup = inputElement.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('invalid');
        }
    }

    // ─── Scroll Reveal Animation ──────────────────────────────────────────────
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
});
