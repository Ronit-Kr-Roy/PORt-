# Projects Cheatsheet & Quick Reference Guide
**Candidate**: Ronit Kr. Roy (SDET & QA Lead)

This cheatsheet provides a rapid-fire breakdown of every project featured on your portfolio website. Use this for quick revision 15 minutes before an interview!

---

## 🚀 Projects Overview Matrix

| # | Project Name | Type | Key Tech | Main Value Proposition / Metric |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Enterprise Security Agent Suite** *(Flagship)* | Endpoint QA | Python, Playwright, Threat Scripts | Validates Trellix, Sophos, CrowdStrike mitigation under 1.2s SLA. |
| **2** | **Cloud Load Testing Engine** *(Flagship)* | Performance | AWS, Azure, Locust, Docker, Grafana | Distributed load testing reaching 100k+ req/sec across multi-cloud. |
| **3** | **Enterprise Playwright Framework** | QA Automation | Playwright, Python, Pytest, GitHub Actions | Parallel execution with POM; reduced regression runtime by 80%. |
| **4** | **Mocking & Test-Data Microservice** | Full-Stack | Spring Boot, React, Redis | Sub-5ms banking API mocks for integration testing environments. |
| **5** | **Real-Time QA Reporting Portal** | Full-Stack | Node.js, Socket.io, MongoDB | Live WebSocket test streaming; instantaneous bug reporting. |
| **6** | **APISentry Schema Validator** | QA Tooling | Python, Pytest, OpenAPI 3.0 | Automated API contract testing in CI pipelines catching schema drifts. |
| **7** | **Test Case Management Board** | Full-Stack | Next.js, PostgreSQL, Prisma | Dynamic drag-and-drop test execution planning tool with OAuth. |
| **8** | **Distributed Performance Engine** | QA Performance | Locust, Python, Grafana | High-scale load simulation & real-time bottleneck dashboard. |

---

## 💡 Quick Interview Q&A for Each Project

### Project 1: Enterprise Security Agent Validation Suite
* **Q: What was your specific contribution?**
  * *A*: "I architected the test harness in Python that invokes simulated threat binaries while using Playwright to monitor endpoint response, capturing process logs and SLA response times."
* **Q: What challenge did you face?**
  * *A*: "Handling OS kernel locks when security agents block process execution. I solved this by implementing asynchronous polling hooks and fallback log assertions."

### Project 2: Cloud-Native Load Testing Engine
* **Q: Why multi-cloud (AWS + Azure)?**
  * *A*: "To simulate true geographically distributed user traffic and eliminate cloud-provider routing bias during load spikes."
* **Q: How were results collected?**
  * *A*: "Each Locust runner container streams stats via StatsD to Prometheus, which feeds Grafana dashboard panels."

### Project 3: Enterprise Playwright Framework
* **Q: How did you structure the framework?**
  * *A*: "I used Page Object Model (POM) with base page utilities for generic waits, web-first assertions, and Pytest fixtures for clean browser context isolation."

### Project 4: Mocking & Test-Data Microservices
* **Q: Why Redis for test data?**
  * *A*: "Relational DB queries introduced latency into high-volume test runs. Storing mock payloads in Redis key-value pairs reduced API latency to under 5ms."

### Project 5: Real-Time QA Reporting Portal
* **Q: Why Socket.io over polling?**
  * *A*: "Polling creates server overhead during multi-worker test runs. WebSockets provide event-driven push updates as soon as a step passes or fails."

### Project 6: APISentry Schema Validator
* **Q: How does contract testing help the QA process?**
  * *A*: "It catches breaking backend changes before UI tests even run, saving CI compute time and giving backend teams instant feedback on API mismatches."

---

## 🛠️ Tech Stack Quick Index

- **Automation Tools**: Playwright, Selenium WebDriver, Pytest, Locust, Requests, Postman.
- **Languages**: Python (Primary), JavaScript (ES6+), HTML5/CSS3, SQL.
- **DevOps & Cloud**: GitHub Actions, Jenkins, Docker, AWS (ECS, S3), Azure (ACI), Grafana, Prometheus.
- **Frameworks & Databases**: Spring Boot, Node.js, Next.js, Redis, MongoDB, PostgreSQL.
