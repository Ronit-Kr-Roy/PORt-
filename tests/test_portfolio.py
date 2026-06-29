"""
Automated Regression Test Suite for the Portfolio Project

This test suite utilizes Pytest and Playwright (via pytest-playwright) to verify 
the functionality, layout, and copy of the glassmorphic portfolio site (index.html).

Key Testing Features:
- Seamless switching between local file testing and localhost server testing.
- Checks document metadata (Title).
- Checks structural section visibility (Hero, Skills, Projects, Navigation).

How to Run Tests:
1. Default Local File Verification:
   Simply run:
     pytest -v

2. Live Localhost Server Verification:
   Start your server in one terminal:
     python -m http.server 8000
   Run tests against the server in another terminal:
     pytest -v --base-url http://localhost:8000
"""

import pytest
from playwright.sync_api import Page, expect
import os

# Define the local file path as a fallback target URL when no localhost server is active
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(CURRENT_DIR)
INDEX_FILE = f"file:///{os.path.join(PROJECT_ROOT, 'index.html').replace(chr(92), '/')}"

@pytest.fixture
def target_url(base_url: str) -> str:
    """
    Fixture that determines the URL to navigate to for the tests.
    If the --base-url parameter is supplied (e.g. via command line), it will be used.
    Otherwise, the test suite falls back to loading the static index.html file directly.
    """
    if base_url:
        # If running on a live local server, target the server root or the index.html page
        return base_url if base_url.endswith('/') else f"{base_url}/"
    return INDEX_FILE

def test_portfolio_title(page: Page, target_url: str):
    """
    Test Case: Portfolio Title Check
    Objective: Verify the browser window/tab displays the correct professional title.
    """
    # Navigate to the target page (local file or localhost server)
    page.goto(target_url)
    
    # Assert that the page title matches the expected name and designation exactly
    expect(page).to_have_title("Ronit Kr Roy | Freelance SDET & Automation Expert")

def test_hero_section_visibility(page: Page, target_url: str):
    """
    Test Case: Hero Section Content Verification
    Objective: Verify that the hero section loads properly and presents key introductory information.
    """
    # Navigate to the target page
    page.goto(target_url)
    
    # Verify that the primary name header displays "Ronit Kr Roy"
    expect(page.locator(".name")).to_have_text("Ronit Kr Roy")
    
    # Verify that the role subtitle mentions full-stack, QA automation, and cloud expertise
    expect(page.locator(".role")).to_contain_text("Freelance Full-Stack, QA Automation & Cloud Expert")
    
    # Verify that the key call-to-action (CTA) buttons are visible to visitors
    expect(page.locator("text=View My Work")).to_be_visible()
    expect(page.locator("text=Hire Me")).to_be_visible()

def test_navigation_links(page: Page, target_url: str):
    """
    Test Case: Navigation Link Check
    Objective: Ensure the main navigation headers contain the correct links.
    """
    # Navigate to the target page
    page.goto(target_url)
    
    # Define expected links corresponding to sections of the portfolio
    nav_links = ["About", "Expertise", "Freelance Projects", "Contact"]
    for link in nav_links:
        # Verify that each navigation link is visible in the desktop navbar
        expect(page.locator(f".nav-links >> text={link}")).to_be_visible()

def test_projects_highlight(page: Page, target_url: str):
    """
    Test Case: Highlighted Project Verification
    Objective: Verify that the top-featured client project is prominently highlighted and contains correct details.
    """
    # Navigate to the target page
    page.goto(target_url)
    
    # Retrieve the first highlighted project card
    highlighted_project = page.locator(".highlight-project").first
    
    # Assert that it is visible on the screen
    expect(highlighted_project).to_be_visible()
    
    # Verify the category badge text matches expectation
    expect(highlighted_project.locator(".highlight-badge")).to_have_text("Endpoint Security & Networking")
    
    # Assert the title card text mentions the security platform
    expect(highlighted_project).to_contain_text("AI-Driven Endpoint Security Platform")

def test_skills_section(page: Page, target_url: str):
    """
    Test Case: Skills & Expertise Check
    Objective: Ensure the skills inventory lists critical modern technologies like Playwright, Python, and Selenium.
    """
    # Navigate to the target page
    page.goto(target_url)
    
    # Assert that the skills container is visible to the user
    expect(page.locator("#skills")).to_be_visible()
    
    # Verify presence of core automation and language keywords in the expertise list
    expect(page.locator("#skills")).to_contain_text("Playwright")
    expect(page.locator("#skills")).to_contain_text("Python")
    expect(page.locator("#skills")).to_contain_text("Selenium")

def test_contact_vcard_button(page: Page, target_url: str):
    """
    Test Case: vCard Contact Button Verification
    Objective: Verify that the visitor has a prominent option to save Ronit's contact information.
    """
    # Navigate to the target page
    page.goto(target_url)
    
    # Assert that the "Save Contact (vCard)" button is visible and links to the correct .vcf file
    vcard_btn = page.locator("text=Save Contact (vCard)")
    expect(vcard_btn).to_be_visible()
    expect(vcard_btn).to_have_attribute("href", "ronit_roy.vcf")

