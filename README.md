# Ronit Kr. Roy – Portfolio & Digital Contact Hub

## Project Overview
This repository contains a professional personal portfolio and digital contact hub built to showcase skills, projects, resume details, and contact information. The project provides two main user interfaces:
- **Main Portfolio Website** (`index.html`): A modern dark-themed portfolio featuring a terminal-style preloader, custom glass panel layouts, custom CSS animations, and interactive project filtering.
- **Digital Contact Card** (`contact_card.html`): A mobile-first, standalone business contact card designed for fast, seamless networking on mobile devices, styled with Tailwind CSS.

The project is implemented entirely with clean, client-side technologies (HTML5, CSS3, JavaScript) and includes an integration test suite built using Pytest and Playwright to verify interface layouts and core elements.

---

## Live Demo
* **Portfolio Website**: [ronit-roy-portfolio.vercel.app](https://ronit-roy-portfolio.vercel.app/)
* **Digital Contact Card**: [ronit-roy-portfolio.vercel.app/contact_card.html](https://ronit-roy-portfolio.vercel.app/contact_card.html)

---

## Screenshots
* **Main Portfolio**: `assets/screenshots/portfolio-home.png`
* **Projects Section**: `assets/screenshots/projects.png`
* **Contact Card**: `assets/screenshots/contact-card.png`

*(Note: Place your generated screenshots inside the specified paths above to display them on GitHub.)*

---

## Key Features
* **Responsive Portfolio Website**: A multi-section portfolio optimized across desktops, tablets, and mobile displays.
* **Mobile-Friendly Digital Contact Card**: A dedicated business contact card (`contact_card.html`) with large tap targets designed for mobile interfaces.
* **Terminal-Style Preloader**: Simulates a system diagnostic boot sequence on page load, creating a technical first impression for visitors.
* **Glassmorphic Dark UI**: Modern dark theme utilizing backdrop filters, linear gradients, custom animations, and subtle micro-interactions.
* **Interactive Project Filtering**: Pure vanilla JavaScript project filters allowing users to view projects by category (e.g., Full-Stack, QA Automation, Cloud & Infra) without reloading.
* **Contact Form Integration**: Embedded contact form powered by the FormSubmit service to route inquiries to the author's email address.
* **WhatsApp Contact Redirection**: Integrates direct WhatsApp redirection pre-populating message drafts from the contact form submission, providing an additional contact option for faster communication.
* **vCard Download Support**: A downloadable virtual card file (`ronit_roy.vcf`) allowing clients to save contact details directly to their address book in one click.
* **Resume PDF Download Support**: Access to download the resume file (`resume.pdf`) directly from the homepage and contact card interfaces.
* **Automated UI Testing Setup**: Includes integration tests built using Pytest and Playwright to check page layouts, elements, and content.
* **Vercel Deployment Support**: Ready-to-deploy configuration optimized for serverless platforms like Vercel.

---

## Tech Stack
* **HTML5**: Structured semantic markup for accessibility.
* **CSS3**: Custom layout styles, typography, glassmorphism effects, and transitions.
* **JavaScript**: Client-side logic for the terminal sequence, navigation actions, filtering, and form control.
* **Tailwind CSS**: Used via Play CDN for layout and styling on the digital contact card (`contact_card.html`).
* **Pytest**: Python-based testing framework.
* **Playwright**: End-to-end testing library for browser automation.
* **FormSubmit**: Third-party email form processing.
* **Vercel**: Web hosting and serverless deployment platform.

---

## Repository Structure
```text
PORt/
├── index.html               # Main portfolio page containing profile sections and project filter
├── contact_card.html        # Standalone, mobile-first contact card styled with Tailwind CSS
├── style.css                # Custom stylesheet defining glassmorphism tokens, keyframes, and layout rules
├── main.js                  # Frontend script managing the boot sequence preloader, filtering, and form logic
├── ronit_roy.vcf            # vCard file containing standard contact information for easy imports
├── resume.pdf               # Resume/CV document available for download
├── assets/                  # Directory containing image assets and project logos
│   └── screenshots/         # Placeholders for portfolio and contact card screenshots
└── tests/                   # Directory containing Python-based automated testing scripts
    ├── test_portfolio.py    # Main integration tests verifying elements, titles, and functionality
    └── test_temp.py         # Temporary testing cache helper
```

---

## Personalization Checklist
Before using this template for your own portfolio, complete the following setup steps:
- [ ] **Name and Contact Info**: Update text elements, phone numbers, and email addresses inside `index.html`, `contact_card.html`, `main.js`, and `ronit_roy.vcf`.
- [ ] **Update GitHub Links**: Replace placeholder links in `index.html` (around line 518) and `contact_card.html` (around line 127) with your actual GitHub profile URL.
- [ ] **Update LinkedIn Link**: Replace placeholder LinkedIn links in `index.html` and `contact_card.html` with your professional profile link.
- [ ] **Replace Resume PDF**: Swap out the template `resume.pdf` in the root directory with your actual resume, keeping the file name lowercase as `resume.pdf`.
- [ ] **Activate FormSubmit**: Update the email in `index.html` and `contact_card.html` to your own, then trigger a test form submit to complete FormSubmit's activation.
- [ ] **Add Screenshots**: Generate screenshots of your live page and place them in `assets/screenshots/` matching the paths specified in this README.
- [ ] **Add Live Deployment Link**: Replace the placeholder links under the **Live Demo** section of this README.
- [ ] **Verify WhatsApp Redirect**: Confirm the WhatsApp API link inside `main.js` matches your country code and phone number.
- [ ] **Run Tests**: Execute the automated test suite locally to verify the portfolio structure works perfectly before deploying.

---

## How to Run Locally
To preview changes on your local system, run a local web server (Method A or B is recommended to prevent local browser file-access security restrictions):

### Method A: Python Local Server (Recommended)
This runs a local HTTP server ensuring absolute paths, script redirections, and styling load identically to production:
1. Open a terminal in the project directory.
2. Start the Python web server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   - Main Portfolio: [http://localhost:8000](http://localhost:8000)
   - Contact Card: [http://localhost:8000/contact_card.html](http://localhost:8000/contact_card.html)

### Method B: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click on `index.html` and select **Open with Live Server**.
4. The browser tab will refresh automatically as you save changes.

### Method C: Direct File Opening
* Locate and double-click `index.html` in your file explorer to open it in a browser under the `file://` protocol.
* *Note: Some browser security models restrict local file API requests or redirects. Use Method A or B for full verification.*

---

## Running Automated Tests
The repository features an automated test suite powered by Pytest and Playwright. The tests verify that the HTML elements load correctly, that primary headers match the developer's details, and that critical links/assets are present.

To install dependencies and run the tests:
1. Install testing packages:
   ```bash
   pip install pytest pytest-playwright playwright
   ```
2. Install browser drivers for Playwright:
   ```bash
   playwright install
   ```
3. Run the automated tests against direct local files:
   ```bash
   pytest -v
   ```
4. Run the automated tests against a running localhost server:
   ```bash
   pytest -v --base-url http://localhost:8000
   ```

---

## Contact Form Setup
The contact form uses **FormSubmit**, a free, serverless form processing service. To activate email delivery:
1. Open the live site or your local server (e.g., `http://localhost:8000`).
2. Navigate to the contact form section.
3. Enter test values and submit the form.
4. Check your inbox for an activation email from FormSubmit.
5. Click the validation link in that email. All future form submissions will now be forwarded to your email address automatically.

---

## Deployment
To publish your website to a live public URL:
1. Push your local repository to a new repository on GitHub.
2. Sign in to your [Vercel](https://vercel.com/) dashboard.
3. Select **Add New** > **Project** and select your GitHub repository.
4. Keep the default settings and click **Deploy**. Vercel will build and launch your site, providing a live URL.
5. Replace the placeholder links under the **Live Demo** section of this README with your new Vercel deployment URLs.

---

## Testing Strategy
The automated test suite in `tests/test_portfolio.py` runs regression checks covering critical frontend components:
* **Title Verification**: Validates that the window/tab title matches the developer's name and designation.
* **Hero Section Rendering**: Ensures the main intro headers, subtitle text, and action buttons ("View My Work", "Hire Me") are present and render correctly.
* **Desktop Navigation Links**: Verifies all header links ("About", "Expertise", "Freelance Projects", "Contact") are present and visible on desktop viewports.
* **Featured Projects**: Asserts that the first highlighted project card is visible and displays correct title and category details.
* **Technical Skills Inventory**: Scans the skills section to verify that core technologies (e.g., Python, Playwright, Selenium) are correctly represented.
* **vCard Reference**: Confirms the "Save Contact (vCard)" CTA button points to the correct static `.vcf` file inside the repository.

---

## Known Limitations
* **Static Website Only**: The application runs entirely client-side and does not contain server-side database logging or analytics.
* **FormSubmit Dependency**: Contact form submission depends on the uptime and active configuration of the external FormSubmit service.
* **Manual Data Updates**: Contact information, project items, and social media URLs must be manually edited in HTML/JS source files when updates are needed.
* **WhatsApp Integration**: Redirection to WhatsApp utilizes standard deep links, which require correct phone number configuration and the client device to have browser redirection support or the WhatsApp application installed.
* **No Backend Dashboard**: Admin panel, authenticated logins, and dynamic database backends are not included in this build.

---

## Future Improvements
* Add dedicated project detail subpages or interactive modal overlays for full case studies.
* Implement a client-side dark/light mode toggle switch.
* Build an integrated markdown-powered blog or tech journal section.
* Expand documentation to include downloadable developer case studies (e.g., for QA pipelines and cloud setups).
* Enhance keyboard navigation and overall accessibility (a11y) conformance.
* Set up a custom Lighthouse auditing script to generate performance, accessibility, and SEO metrics.
* Configure a GitHub Actions workflow to run the Pytest-Playwright test suite automatically on every push or Pull Request.
* Embed complete SEO metadata, Open Graph (OG) tags, and standard social share cards.
* Transition contact form submission to a custom serverless function (e.g., Vercel serverless function or AWS Lambda) for enhanced data processing.

---

## What I Learned
* Designing and building responsive modern dark-themed interfaces using semantic HTML5 elements, custom CSS variables, and vanilla JavaScript.
* Designing a fast, mobile-first business contact card utilizing Tailwind CSS.
* Implementing form-to-email handlers without a backend using FormSubmit integration.
* Formatting and deploying pre-populated WhatsApp message links.
* Formatting clear, documentation-standard README files targeted at recruiters and clients.
* Setting up and validating frontend layouts using Pytest and Playwright for regression testing.

---

## Author
**Ronit Kr. Roy**
* **GitHub**: [github.com/Ronit-Kr-Roy](https://github.com/Ronit-Kr-Roy)
* **LinkedIn**: [linkedin.com/in/ronit-kumar-roy-a1b519215](https://www.linkedin.com/in/ronit-kumar-roy-a1b519215/)
* **Portfolio**: [ronit-roy-portfolio.vercel.app](https://ronit-roy-portfolio.vercel.app/)
* **Email**: [ronitofficial99@gmail.com](mailto:ronitofficial99@gmail.com)
