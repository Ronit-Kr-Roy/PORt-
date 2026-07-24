# Projects Cheatsheet & Interview Reference Guide
**Candidate**: Ronit Kr. Roy | **Role**: SDET & QA Automation Lead (4+ YOE)

This document provides an interview-ready reference of the 7 enterprise projects featured in your professional experience. Each entry includes domain context, core workflows, technical automation highlights, and 60-second interview pitches.

---

## 🚀 Enterprise Projects Overview Matrix

| # | Project Name | Domain | Key Tech & Playwright Features | Main Automation Focus / Pitch |
| :- | :--- | :--- | :--- | :--- |
| **★** | **Palo Alto Networks Interoperability** *(Flagship)* | Endpoint Security & Interoperability | Python, Playwright, Threat Simulation, Driver Hook | Validates Palo Alto Cortex XDR agent co-existence, kernel driver stability & EDR SLA. |
| **1** | **UKU Expense Portal** | FinTech / Expense Management | Playwright `setInputFiles()`, Dynamic Web Tables, RBAC | Automated file uploads, RBAC security, dynamic tax & total calculations. |
| **2** | **Employee Management Portal** | HR Tech / Operations | Web Table Grid, Modals, Dynamic Dropdowns, REST API | Complex grid sorting, dynamic pagination, user profile CRUD validation. |
| **3** | **HRMS & Payroll Portal** | HR Tech / Tax Compliance | `waitForEvent('download')`, Data-Driven Pytest | Tax slab deduction logic, payslip PDF download verification, batch payroll. |
| **4** | **AI DigitysGPT Portal** | Generative AI / Enterprise Chat | Playwright `page.route()`, Streaming Response UI | Network interception, response mocking, low-latency & rate-limit testing. |
| **5** | **Quintrix US BGV Portal** | US Compliance / Identity | SSN Masking, Multi-step Forms, Mock Payloads | SSN & DL format validation, sensitive data masking, third-party API mocks. |
| **6** | **Digitys Career Website** | Web / Talent Acquisition | Playwright Cross-Browser (Chromium/Firefox/WebKit) | Multi-browser candidate flows, resume upload, responsive viewport testing. |
| **7** | **Raprocure Web Portal** | B2B Supply Chain / Auctions | Playwright `context.newPage()` (Isolated Contexts) | Concurrent Buyer/Seller live bidding simulation, WebSockets UI updates. |
| **8** | **Enterprise CRM & Pipeline Portal** | CRM / Sales Operations | Playwright, REST API, RBAC Pipelines | Lead tracking, deal pipeline stages, automated contact workflows, RBAC validation. |

---

## 💡 Detailed Project Summaries & Interview Pitches

### ★ Flagship: Palo Alto Networks Endpoint Interoperability & Multi-Cloud Console
* **Domain**: Cybersecurity / Endpoint Security & System Interoperability
* **Role**: Team Lead / SDET Lead (Client Management & Team Mentoring)
* **Overview**: Automated testing harness and multi-cloud management platform for Palo Alto Networks Cortex XDR endpoint agents across Windows & macOS environments, validating agent co-existence and system interoperability alongside third-party EDR/AV solutions (CrowdStrike, Trellix, Sophos, Symantec).
* **Key Workflows & Portals**:
  * **Windows & macOS Agent Validation**: Testing security agent behaviors on Windows and Mac OS endpoints, uncovering critical kernel driver and OS-level issues.
  * **Multi-Cloud VM Runner Infrastructure**: Provisioning and managing test runner VMs on AWS and Azure cloud infrastructure.
  * **Single-Console Reporting Dashboard**: Built a centralized management dashboard integrated with AWS & Azure to control, execute, and report test metrics from one single console.
* **Automation & Leadership Highlights**:
  * Mentored and led the SDET team as Team Lead while managing direct client communication and delivery milestones.
  * Python-driven OS telemetry harness combined with Playwright UI automation for cross-platform agent testing.
  * Multi-cloud AWS/Azure test automation and live dashboard stream integration.
* **🎤 60-Second Interview Pitch**:
  > *"As Team Lead on the Palo Alto Networks project, I led our SDET team in testing Cortex XDR endpoint security agents across Windows and macOS, uncovering key OS-level driver and agent issues. I architected our test infrastructure by creating VMs on AWS and Azure, and built a unified single-console dashboard integrated with both cloud platforms to run, manage, and report on multi-cloud interoperability tests from one place while managing direct client delivery."*

---

### 1. UKU Expense Portal
* **Domain**: FinTech / Enterprise Expense Management
* **Overview**: Web application handling employee expense claims, manager approvals, and finance reimbursements.
* **Key Workflows & Portals**:
  * **Employee Portal**: Expense creation, receipt attachment uploads (PNG/PDF), mileage tracking, and claim status monitoring.
  * **Manager & Admin Portal**: Multi-tier approval workflows, reimbursement payout status updates, policy violation flags, and audit log tracking.
* **Automation & Testing Highlights**:
  * Automated file upload flows using Playwright's `setInputFiles()`.
  * Verified Role-Based Access Control (RBAC) ensuring employees cannot approve their own claims or view higher-level admin settings.
  * Validated dynamic calculations for totals, taxes, and currency conversions across dynamic web tables.
* **🎤 60-Second Interview Pitch**:
  > *"I tested the UKU Expense Portal, verifying end-to-end reimbursement lifecycles across Employee, Manager, and Finance Admin roles. My focus included automating file upload scenarios, validating multi-level approval logic, and ensuring strict role-based access control."*

---

### 2. Employee Management Portal
* **Domain**: HR Tech / Operations Management
* **Overview**: Centralized workforce administration platform managing employee records, organization structures, and attendance tracking.
* **Key Workflows & Portals**:
  * **Employee Portal**: Profile management, leave applications, daily attendance logs, and internal directory search.
  * **Admin Portal**: Employee onboarding/offboarding workflows, role allocations, department updates, and bulk data exports/imports.
* **Automation & Testing Highlights**:
  * Automated complex Web Table interactions (filtering, multi-column sorting, and dynamic pagination).
  * Tested form validations, modal popups, and dynamic dropdown options.
  * Conducted API schema validation for user profile CRUD operations.
* **🎤 60-Second Interview Pitch**:
  > *"I worked on the Employee Management Portal, covering employee lifecycle workflows from onboarding to offboarding. I built automated test scripts to validate dynamic grid controls, search filters, and profile data synchronization across different access levels."*

---

### 3. HRMS & Payroll Portal
* **Domain**: HR Tech / Enterprise Payroll & Tax Compliance
* **Overview**: Comprehensive Human Resource Management System handling time tracking, leave management, and tax-compliant payroll processing.
* **Key Workflows & Portals**:
  * **Employee Portal**: Payslip view/download, tax declaration forms (investment proofs), and leave balance tracking.
  * **HR / Admin Portal**: Monthly payroll execution engine, automated tax slab deductions (TDS, PF, Gratuity, regional taxes), salary structure revisions, and payout report generation.
* **Automation & Testing Highlights**:
  * Data-driven automation testing for complex tax and salary calculation logic using Pytest parameterization.
  * Verified PDF report downloads using Playwright’s `waitForEvent('download')`.
  * Executed regression suites covering monthly payroll run triggers and batch processing.
* **🎤 60-Second Interview Pitch**:
  > *"I was responsible for testing the HRMS and Payroll platform, specifically validating payroll calculations, tax deductions, and payslip generation. I implemented data-driven test suites to ensure precision across diverse tax slabs and employee categories."*

---

### 4. AI DigitysGPT Portal
* **Domain**: AI / Generative AI Application
* **Overview**: Enterprise AI platform integrating conversational LLM capabilities for automated query resolution, content generation, and smart search.
* **Key Workflows & Portals**:
  * **User Interface**: Interactive chat window, prompt templates, real-time streaming text responses, chat history, and response feedback rating.
  * **Admin / Ops Portal**: Model performance metrics, token consumption analytics, prompt library management, and API rate-limiting configuration.
* **Automation & Testing Highlights**:
  * Performed end-to-end API testing (REST/JSON payloads) and UI validation for streaming responses.
  * Used Playwright’s network interception (`page.route()`) to mock backend LLM responses, testing system behavior under low latency, high traffic, and API error codes.
  * Validated UI fallback handling for incomplete or malformed AI responses.
* **🎤 60-Second Interview Pitch**:
  > *"I led the testing for AI DigitysGPT, an enterprise generative AI chat portal. My responsibilities included validating real-time streaming UI responses, testing token/latency APIs, and using Playwright network mocking to simulate backend edge cases and service timeouts."*

---

### 5. Quintrix US Background Verification (BGV) Portal
* **Domain**: US Compliance / Identity Verification & Staffing
* **Overview**: US-focused candidate verification system automating background checks, identity confirmation, and legal compliance.
* **Key Workflows & Portals**:
  * **Candidate / Employee Portal**: Consent forms, US Social Security Number (SSN) input, state Driving License document upload, and employment history details.
  * **Admin / Screener Portal**: Automated SSN format validation, US state driver’s license verifications, criminal background check report aggregation, and status tagging (Clear vs. Flagged).
* **Automation & Testing Highlights**:
  * Validated sensitive data masking (e.g., hidden SSN patterns) and strict security compliance.
  * Automated complex multi-step forms with dynamic field dependency logic.
  * Verified third-party background check API integration responses via mock payloads.
* **🎤 60-Second Interview Pitch**:
  > *"I tested the Quintrix BGV Portal, which handles US candidate verification including SSN, Driving License, and criminal history checks. I focused on dynamic multi-step form automation, sensitive data masking compliance, and third-party API integration validation."*

---

### 6. Digitys Career Website
* **Domain**: Web / Talent Acquisition
* **Overview**: Public-facing corporate job platform enabling candidates to explore career opportunities and submit applications.
* **Key Workflows & Portals**:
  * **Applicant Experience**: Job filter search (by location, department, skill), job requirement pages, resume upload, and application confirmation.
  * **Recruiter Portal**: Job requisition creation, applicant tracking, and candidate resume parsing.
* **Automation & Testing Highlights**:
  * Conducted cross-browser functional testing (Chromium, Firefox, WebKit) using Playwright.
  * Automated file upload flows for candidate resume submissions (`.pdf`, `.docx`).
  * Performed responsive web design testing across mobile viewport sizes.
* **🎤 60-Second Interview Pitch**:
  > *"I tested the Digitys Career Website, focusing on candidate application flows, resume parsing triggers, and cross-browser responsiveness to ensure a smooth, error-free user experience across mobile and desktop browsers."*

---

### 7. Raprocure Web Portal (B2B E-Procurement & Bidding)
* **Domain**: B2B Supply Chain / E-Commerce & Auctions
* **Overview**: Enterprise e-procurement platform supporting inventory tracking, live reverse auctions, and real-time online bidding.
* **Key Workflows & Portals**:
  * **Buyer Portal**: Requisition drafting, purchase order (PO) generation, live auction setup, and real-time bid monitoring.
  * **Seller / Supplier Portal**: Product catalog/inventory management, participating in live online auctions, and submitting price bids.
  * **Super Admin Portal**: Platform configuration, commission rule management, dispute handling, dynamic user onboarding, and global audit logs.
* **Automation & Testing Highlights**:
  * Leveraged Playwright Browser Contexts (`context.newPage()`) to run multi-user scenarios simultaneously (simulating Buyer and Seller interacting concurrently in a live bidding session).
  * Validated real-time UI data updates without page refresh (WebSockets / real-time polling).
  * Verified granular permission matrices across Buyer, Seller, and Super Admin roles.
* **🎤 60-Second Interview Pitch**:
  > *"I worked on Raprocure, a B2B procurement platform with live bidding and inventory management. I automated complex concurrent scenarios—such as a Buyer creating a live auction while a Seller places bids in real-time—by utilizing isolated Playwright Browser Contexts."*

---

### 8. Enterprise CRM & Pipeline Portal
* **Domain**: CRM / Sales Operations & Customer Management
* **Overview**: Centralized Customer Relationship Management system handling lead generation, contact management, sales deal pipelines, and automated customer communication.
* **Key Workflows & Portals**:
  * **Sales Representative Portal**: Lead tracking, deal stage transitions, contact activity logs, and email template dispatch.
  * **Sales Admin / Manager Portal**: Team performance dashboards, deal forecast reporting, RBAC sales tier permissions, and workflow rule triggers.
* **Automation & Testing Highlights**:
  * Automated E2E deal stage transition workflows and dynamic contact form validations.
  * Verified Role-Based Access Control (RBAC) preventing unauthorized lead access across regional sales teams.
  * Executed API integration tests for CRM contact synchronization with external marketing tools.
* **🎤 60-Second Interview Pitch**:
  > *"I tested the Enterprise CRM Portal, focusing on sales pipeline workflows, lead tracking, and deal stage transitions. I automated E2E user journeys using Playwright, verified REST API integrations for contact synchronization, and ensured strict role-based permission boundaries across sales teams."*

---

## 🛠️ Automation Techniques Quick Reference

- **File Upload Automation**: `page.setInputFiles('#file-upload', 'path/to/doc.pdf')`
- **File Download Interception**: `with page.expect_download() as download_info: ...`
- **Network Interception & Mocking**: `page.route("**/api/v1/llm", lambda route: route.fulfill(status=200, json={...}))`
- **Multi-User Concurrent Testing**: `buyer_context = browser.new_context(); seller_context = browser.new_context()`
- **Web Table & Dynamic Grid Handling**: Locating dynamic rows via `page.locator("tr", has_text="Target Data")`
