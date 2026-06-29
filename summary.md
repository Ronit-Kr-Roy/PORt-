# 📋 Project Architecture & Implementation Summary

This document provides a comprehensive summary of the **Ronit Kr Roy Premium Portfolio & Digital Contact Hub**, detailing the architecture, file structure, key features, and development workflows.

---

## 🏗️ Folder & File Structure

Here is the structural architecture of the repository:

```text
PORt/
├── .gitignore               # Configured to ignore virtual environments, pytest caches, and logs
├── README.md                # General introduction, setup guide, and deployment instructions
├── summary.md               # Detailed architectural layout and implementation summary (this file)
│
├── index.html               # Main Glassmorphic Portfolio (HTML structure & semantic layout)
├── style.css                # Custom CSS (Glassmorphism design tokens, keyframes, transitions, and hover styles)
├── main.js                  # Frontend client logic (Preloader sequence, navigation, projects filter, contact form)
│
├── contact_card.html        # Mobile-first standalone digital business card styled with Tailwind CSS
├── ronit_roy.vcf            # Standard vCard contact file containing full contact details for one-click saving
├── resume.pdf               # Professional CV/Resume for potential recruiters/clients
├── copy_assets.py           # Asset synchronizer script to copy project logos from backup storage
│
├── assets/                  # Public asset store for visual icons and graphics
│   ├── ci_cd_icon.png       # CI/CD pipelines & GitHub Actions icon
│   ├── react_icon.png       # React full-stack icon
│   ├── selenium_icon.png    # Selenium automation framework icon
│   ├── spring_icon.png      # Spring Boot backend icon
│   └── playwright_icon.png  # Playwright testing framework icon (copied via copy_assets.py)
│
└── tests/                   # QA Automation & Test Suite
    ├── test_portfolio.py    # Main integration/regression tests using Pytest & Playwright
    └── test_temp.py         # Temporary testing cache wrapper
```

---

## 🛠️ Key Architectural Components

### 1. Main Portfolio Hub (`index.html`, `style.css`, `main.js`)
* **Terminal-Style Preloader**: Simulates a system diagnostic boot sequence (`system_boot.sh`) to show SDET skills (e.g. checking driver connections, loading modules) before revealing the portfolio.
* **Glassmorphic UI Design System**: Custom glass panels using `backdrop-filter: blur(12px)` and thin semi-transparent white borders. Features responsive grids, hover micro-animations, linear gradient accents, and a custom scroll-progress indicator.
* **Dynamic Projects Filtering**: Clients can filter featured works (All, Full-Stack, QA Automation, Cloud & Infra) via tag filters handled programmatically by standard JavaScript selectors in `main.js`.
* **Validated Contact Form**: Form inputs are validated on the client side (verifying name length, valid email pattern, and message content). Once validated, it redirects the client to WhatsApp via `api.whatsapp.com` with a pre-formatted message summarizing their request.

### 2. Standalone Digital Contact Card (`contact_card.html`, `ronit_roy.vcf`)
* **Tailwind CSS Mobile Design**: A clean, modern, single-page card optimized for viewing on phones.
* **vCard Integration**: Direct **"Save Contact"** buttons on both the homepage and contact card that link to `ronit_roy.vcf` to download contact card details automatically into the viewer's phone directory.

### 3. Testing Architecture (`tests/test_portfolio.py`)
* Fully scalable integration test suite utilizing `pytest-playwright` to run tests headlessly.
* Built-in flexibility:
  * **Default mode**: Operates on direct local HTML file path parsing (`file:///...`).
  * **Live base URL mode**: Leverages the `--base-url` argument (e.g., `http://localhost:8000`) for end-to-end server verification.

---

## 🚀 Commands Reference

* **Start the Local Server**:
  ```powershell
  python -m http.server 8000
  ```
* **Verify & Run Tests**:
  ```powershell
  # Test direct local file
  pytest -v
  
  # Test live localhost server
  pytest -v --base-url http://localhost:8000
  ```
* **Sync Asset Logos**:
  ```powershell
  python copy_assets.py
  ```
