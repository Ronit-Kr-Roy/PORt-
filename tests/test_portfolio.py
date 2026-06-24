import pytest
from playwright.sync_api import Page, expect
import os

# We will load the local HTML file for testing
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(CURRENT_DIR)
INDEX_FILE = f"file:///{os.path.join(PROJECT_ROOT, 'index.html').replace(chr(92), '/')}"

def test_portfolio_title(page: Page):
    """Test that the portfolio page has the correct title."""
    page.goto(INDEX_FILE)
    expect(page).to_have_title("Ronit Kr Roy | Freelance SDET & Automation Expert")

def test_hero_section_visibility(page: Page):
    """Verify that the hero section loads correctly with expected text."""
    page.goto(INDEX_FILE)
    # Check Name
    expect(page.locator(".name")).to_have_text("Ronit Kr Roy")
    # Check Role
    expect(page.locator(".role")).to_contain_text("Freelance Full-Stack, QA Automation & Cloud Expert")
    # Check Call to Action buttons
    expect(page.locator("text=View My Work")).to_be_visible()
    expect(page.locator("text=Hire Me")).to_be_visible()

def test_navigation_links(page: Page):
    """Verify navigation links exist."""
    page.goto(INDEX_FILE)
    nav_links = ["About", "Expertise", "Freelance Projects", "Contact"]
    for link in nav_links:
        expect(page.locator(f".nav-links >> text={link}")).to_be_visible()

def test_projects_highlight(page: Page):
    """Verify the freelance project is highlighted."""
    page.goto(INDEX_FILE)
    highlighted_project = page.locator(".highlight-project").first
    expect(highlighted_project).to_be_visible()
    expect(highlighted_project.locator(".highlight-badge")).to_have_text("Endpoint Security & Networking")
    expect(highlighted_project).to_contain_text("AI-Driven Endpoint Security Platform")

def test_skills_section(page: Page):
    """Verify skills section contains Playwright and other key tech stack."""
    page.goto(INDEX_FILE)
    expect(page.locator("#skills")).to_be_visible()
    expect(page.locator("#skills")).to_contain_text("Playwright")
    expect(page.locator("#skills")).to_contain_text("Python")
    expect(page.locator("#skills")).to_contain_text("Selenium")

