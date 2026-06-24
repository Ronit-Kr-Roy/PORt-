# Ronit Kr Roy – Portfolio

Welcome to the **premium portfolio** showcasing my full‑stack development, QA automation, and cloud expertise.

## ✨ Highlights
- **6 flagship projects** (HRMS, VMS, CRM, Networking, Cloud, E‑Commerce) with detailed descriptions.
- **Tech‑stack carousel** (React, Spring Boot, Selenium, CI/CD) that slides left‑to‑right.
- **Project filter tabs** – quickly view Front‑end, Back‑end, QA, or Cloud projects.
- **Testimonials carousel** for social proof.
- **Contact form** that opens a pre‑filled email.
- **Download CV** button.
- **Glass‑morphism UI** with modern micro‑animations.

## 📂 Repository Structure
```
PORt/
├─ index.html          # Main page (includes hero, projects, carousels, contact form)
├─ style.css           # Styling + carousel animation + responsive tweaks
├─ main.js             # Mobile nav toggle & scroll reveal
├─ js/portfolio.js     # Filter tabs, scroll‑to‑top logic
├─ assets/             # Icon PNGs (React, Spring, Selenium, CI/CD)
├─ Summary.md          # High‑level portfolio summary (auto‑generated artifact)
└─ README.md          # This file
```

## 🚀 Running Locally
1. Open a terminal and `cd` into the folder:
   ```powershell
   cd C:\Users\HP\Downloads\PORt
   ```
2. Start a simple HTTP server (Python is bundled with Windows):
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`. You should see the full portfolio with all interactive features.

## 📦 Deploying to Vercel (Free)
- Push this folder to a GitHub repository.
- Sign‑in to Vercel, import the repo, and Vercel will automatically detect a **static site** and deploy it.
- After the first deploy, you can set a custom domain or use the provided Vercel URL.

## 🙋‍♂️ Need More?
- Update the **schedule link** in the hero CTA (`<a href="..." class="btn btn-primary">Schedule a Call</a>`).
- Replace placeholder testimonials with your own quotes.
- Add more project cards by copying the existing HTML block and adjusting the `data-tags` attribute for filtering.

---

*Happy hunting!*
