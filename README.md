# 🚀 Ronit Kr. Roy – Premium Portfolio & Digital Contact Hub

Welcome to your premium, high-performance freelance portfolio! This repository is designed to showcase your expertise as a **Freelance Software Engineer in Test (SDET)**, **Full-Stack Developer**, and **Cloud Infrastructure Engineer** to prospective clients.

It contains two primary interfaces:
1. **Main Glassmorphic Portfolio** (`index.html`): A stunning dark-themed website featuring a simulated diagnostic boot terminal and interactive project filtering.
2. **Digital Contact Card** (`contact_card.html`): A mobile-optimized, single-page digital business card for fast networking.

---

## 🛠️ Personalization Checklist
Before sending this portfolio to potential clients, ensure you complete these quick setup items:

* [x] **Name and WhatsApp Number**: Done! (Configured to *Ronit Kr. Roy* and *+91 88251 77143*).
* [ ] **Update GitHub Links**: Open [index.html](file:///c:/Users/HP/Downloads/PORt/index.html#L518) and [contact_card.html](file:///c:/Users/HP/Downloads/PORt/contact_card.html#L127) and replace the placeholder `https://github.com/` with your personal GitHub URL.
* [ ] **Replace Resume PDF**: Place your actual resume in the root folder, saving it exactly as **`resume.pdf`**.
* [ ] **Activate Email Contact Form**: Follow the **FormSubmit Activation** steps below to link the form to your inbox.

---

## ✨ Key Features

* **Terminal-Style Preloader**: Simulates a system diagnostic boot sequence (`system_boot.sh`) checking driver connections and module loads. This immediately signals strong technical credentials to clients.
* **Glassmorphic Dark UI**: Modern typography, smooth gradients, dynamic backdrop blurs, and hover micro-animations.
* **Interactive Projects Filter**: Lets clients instantly filter your work (Full-Stack, QA Automation, Cloud & Infra) using high-speed vanilla JavaScript.
* **Automated Double-Action Contact Form**:
  * **Email Dispatch**: Securely sends submissions directly to your email (`ronitofficial99@gmail.com`) using FormSubmit.
  * **WhatsApp Fallback & Auto-Redirection**: Automatically redirects the client to a pre-filled WhatsApp chat with their project details, guaranteeing you never lose a lead.
* **Save Contact (vCard)**: One-click download button that saves your full phone and email information directly to their phone contacts.

---

## 📂 Repository Structure

```text
PORt/
├── index.html               # Main Glassmorphic Portfolio (HTML structure & content)
├── contact_card.html        # Tailwind CSS Mobile-First Contact Card
├── style.css                # Glass Panel designs, custom animations, and theme styles
├── main.js                  # Preloader sequence, filtering, and form validation logic
├── ronit_roy.vcf            # vCard file containing your saved contact details
├── resume.pdf               # Your CV/Resume PDF file
│
├── assets/                  # Public icons for React, Selenium, Playwright, CI/CD, etc.
└── tests/                   # Pytest & Playwright automated test suite
```

---

## 💻 1. Running and Viewing Your Site Locally

To preview your changes on your local machine before pushing them to GitHub, use one of these easy methods:

### Method A: Python Local Server (Recommended)
This runs a real local web server, ensuring all script redirects and API links function perfectly.
1. Open **PowerShell** or your terminal.
2. Start the local server:
   ```bash
   python -m http.server 8000
   ```
3. Open your web browser and go to:
   - **Main Portfolio**: [http://localhost:8000](http://localhost:8000)
   - **Contact Card**: [http://localhost:8000/contact_card.html](http://localhost:8000/contact_card.html)

### Method B: VS Code Live Server (Zero Command Line)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and select **Open with Live Server**.
4. The page will reload automatically whenever you save code changes.

### Method C: Direct File Execution (Quickest Preview)
* Double-click on **`index.html`** in your file explorer.
* *Note: Certain advanced API redirects and browser features may be restricted by the browser's local security rules under `file://`. Use Method A or B for full testing.*

---

## 🧪 2. Running Automated Tests

A built-in test suite verifies that your portfolio is fully functional and the headers load correctly:
1. Install testing packages:
   ```bash
   pip install pytest pytest-playwright playwright
   playwright install
   ```
2. Run regression tests on local static files:
   ```bash
   pytest -v
   ```
3. Run tests against your running localhost server:
   ```bash
   pytest -v --base-url http://localhost:8000
   ```

---

## 📬 3. FormSubmit Activation (One-Time Setup)

To activate email delivery for the contact form:
1. Open your locally running site (e.g. [http://localhost:8000](http://localhost:8000)).
2. Fill out the contact form with test details and click **Send Project Request**.
3. Open your inbox at **`ronitofficial99@gmail.com`** and find the activation email sent by FormSubmit.
4. Click **Activate Form** in that email. From this point onwards, all user inquiries will land directly in your email inbox!

---

## 🚀 4. Deploying to Vercel (Free Hosting)

When you are ready to publish your website live:
1. Push your folder to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your GitHub repository and click **Deploy**. Vercel will launch your site live for free in under a minute!
