# Ronit Kr Roy – Premium Portfolio & Digital Contact Hub

Welcome to my premium, high-performance portfolio showcasing my expertise as a Freelance Software Engineer in Test (SDET), Full-Stack Developer, and Cloud Infrastructure Engineer.

This repository contains both a main glassmorphic portfolio site and a lightweight, mobile-optimized digital contact card.

---

## ✨ Features & Highlights

### 🖥️ Main Portfolio (`index.html`)
- **Developer Boot Sequence Preloader**: A simulated terminal initialization sequence demonstrating systems check before loading the website.
- **Glassmorphic Dark UI**: Premium typography (Sora, Space Grotesk, Fira Code), vibrant linear gradients, backdrop blurs, and hover micro-animations.
- **Dynamic Projects Filter**: Categorized client project views (Full-Stack, QA Automation, Cloud & Infra) powered by modern vanilla JavaScript.
- **Automated Double-Action Contact Form**: 
  - **Email Delivery**: Form submissions are sent directly to your email (`ronitofficial99@gmail.com`) using FormSubmit.co via AJAX Fetch API.
  - **WhatsApp Redirection**: Upon successful email submission, the user is automatically redirected to a WhatsApp chat (`8580302377`) preloaded with their project details.
  - **Error Resilient Fallback**: If email dispatch fails or is offline, the form falls back to opening WhatsApp directly so you never lose a client request.
- **Scroll Progress & Scroll Reveal**: Smooth indicators and fade-in triggers on scroll to provide a premium interactive experience.
- **Premium Tech Icons Integration**: Seamlessly displays high-quality logo assets for Playwright, React, Spring Boot, Selenium, and CI/CD inside the expertise grid and project cards.
- **Fully Responsive & Fluid Layouts**: Optimized for mobile phones, tablets, and desktops.

### 📱 Digital Contact Card (`contact_card.html`)
- Standalone, mobile-first business card styled using Tailwind CSS and Font Awesome.
- Direct click-to-call integration (`+91 85803 02377`) for instant phone communication.
- Clean digital links to professional networks (WhatsApp, LinkedIn, GitHub, Gmail).

---

## 📂 Repository Structure

```
PORt/
├── assets/                 # Brand assets and images (React, Spring, Selenium, Playwright, CI/CD)
├── tests/                  # Playwright automation verification suite
│   └── test_portfolio.py   # Python/Pytest regression tests for the portfolio UI
├── index.html              # Main glassmorphic portfolio website
├── style.css               # Core design system, styles, and custom keyframe animations
├── main.js                 # Preloader, navigation, filtering, contact form validation & AJAX delivery
├── contact_card.html       # Standalone digital contact card (Tailwind CSS)
├── copy_assets.py          # Script to copy newly generated PNG logos to the assets directory
├── resume.pdf              # Professional CV / Resume
├── .gitignore              # Git ignore file for test caches and temporary files
└── README.md               # Project documentation (this file)
```

---

## 🚀 Running Locally

Choose any of the following options to run the portfolio website locally on your computer:

### Option 1: Using Python HTTP Server (Recommended)
Since Python is typically pre-installed or easily available on Windows, macOS, and Linux:
1. Open your terminal or PowerShell and navigate to the project directory:
   ```bash
   cd C:\Users\HP\Downloads\PORt
   ```
2. Start the built-in HTTP server:
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   - **Main Portfolio**: [http://localhost:8000](http://localhost:8000)
   - **Contact Card**: [http://localhost:8000/contact_card.html](http://localhost:8000/contact_card.html)

### Option 2: VS Code Live Server (Easiest for UI/UX Development)
If you are editing the code using VS Code:
1. Install the **Live Server** extension by Ritwick Dey (if you haven't already).
2. Right-click on `index.html` in the file explorer sidebar.
3. Select **Open with Live Server** (or click **Go Live** in the status bar at the bottom right).
4. The site will automatically open and auto-reload whenever you save changes.

### Option 3: Using Node.js (`npx`)
If you have Node.js installed, you can launch a server instantly without installing global packages:
1. In the project directory, run:
   ```bash
   npx serve .
   ```
2. Open the URL shown in your terminal (typically `http://localhost:3000` or `http://localhost:5000`).

### Option 4: Direct Browser Execution (Zero-Setup)
If you just want a quick look without starting a server:
1. Simply navigate to the folder in your file explorer.
2. Double-click **`index.html`** to open it directly in your web browser.
   > [!NOTE]
   > Some advanced browser features or external API fetches might behave differently under the `file://` protocol due to browser security restrictions. For full functionality, using an HTTP server (Option 1, 2, or 3) is highly recommended.

---

## 📦 Copying New Logo Assets

To copy the newly generated modern PNG logos (Playwright, React, Spring Boot, Selenium, CI/CD) into your local `assets` directory:
```powershell
python copy_assets.py
```

---

## 🧪 Automated Testing & Verification

The repository includes a comprehensive automated test suite to ensure portfolio elements load correctly and maintain high QA standards.

### Prerequisites
Make sure you have python and the testing dependencies installed:
```bash
pip install pytest pytest-playwright playwright
playwright install
```

### Run Tests
To run the automated tests against your local project files (automatically falls back to testing local static file):
```bash
pytest -v
```

To run the automated tests against your live running localhost server:
```bash
pytest -v --base-url http://localhost:8000
```

---

## 📬 FormSubmit Activation (One-Time Setup)
To activate email delivery for the contact form:
1. Open [http://localhost:8000](http://localhost:8000) and fill out the contact form.
2. Click **Send Project Request**.
3. Open your inbox at **`ronitofficial99@gmail.com`** and find the activation email from FormSubmit.
4. Click **Activate**. From this point onwards, all entries will land directly in your email inbox!

---

## 📦 Deploying to Vercel (Free Static Hosting)

- Push this folder to a GitHub repository.
- Sign in to Vercel, click **Add New** > **Project**, and import the repository.
- Vercel automatically detects the static nature of the project and deploys it immediately.
- Go to the project settings in Vercel to customize your domain or configure environment paths.
