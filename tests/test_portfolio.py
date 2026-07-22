"""
=============================================================================
 Advanced Portfolio Test Suite — Playwright + pytest
 File   : tests/test_portfolio.py
 Author : QA Automation — Ronit Kr. Roy Portfolio
=============================================================================

Test Categories
---------------
[SMOKE]       : Title, meta, hero visibility             (~5 tests)
[UI]          : Sections, badges, skill cards, footer    (~7 tests)
[FUNCTIONAL]  : Nav clicks, theme toggle, project filter,
                contact form validation, vCard button     (~8 tests)
[RESPONSIVE]  : Mobile burger menu, stacked CTA          (~3 tests)
[ACCESSIBILITY]: Heading hierarchy, landmark roles        (~2 tests)

How to Run
----------
  # All tests (headless, Chromium):
      pytest -v

  # Against a live server:
      python -m http.server 8000   # terminal 1
      pytest -v --base-url http://localhost:8000   # terminal 2

  # Single marker group:
      pytest -v -m smoke
      pytest -v -m functional
      pytest -v -m responsive

  # Headed mode (see the browser):
      pytest -v --headed

  # Slow-motion (300 ms per action):
      pytest -v --headed --slowmo 300
"""

import pytest
from playwright.sync_api import Page, expect


# =============================================================================
# SMOKE TESTS — page load, title, hero copy
# =============================================================================

@pytest.mark.smoke
def test_page_title(desktop_page: Page):
    """
    TC-S01 | Page Title
    Verify the browser tab shows the updated professional title
    (no longer "Freelance SDET").
    """
    expect(desktop_page).to_have_title(
        "Ronit Kr. Roy | SDET & QA Automation Lead | 4+ YOE"
    )


@pytest.mark.smoke
def test_hero_name(desktop_page: Page):
    """
    TC-S02 | Hero Name
    Verify the hero section renders the full name correctly.
    """
    expect(desktop_page.locator(".name")).to_have_text("Ronit Kr. Roy")


@pytest.mark.smoke
def test_hero_role_no_freelance(desktop_page: Page):
    """
    TC-S03 | Hero Role — 'Freelance' removed
    Verify the role subtitle does NOT contain the word 'Freelance'
    and DOES contain the correct updated title.
    """
    role = desktop_page.locator(".role")
    expect(role).to_contain_text("SDET & QA Automation Lead")
    # Negative assertion: 'Freelance' must NOT appear in the role
    assert "Freelance" not in role.inner_text(), (
        "Role subtitle should no longer contain 'Freelance'"
    )


@pytest.mark.smoke
def test_hero_cta_buttons_visible(desktop_page: Page):
    """
    TC-S04 | Hero CTA Buttons
    Verify all three call-to-action buttons are visible in the hero.
    """
    expect(desktop_page.locator("text=View My Work")).to_be_visible()
    expect(desktop_page.locator("text=Get In Touch")).to_be_visible()
    expect(desktop_page.locator("text=Download CV")).to_be_visible()


@pytest.mark.smoke
def test_greeting_text(desktop_page: Page):
    """
    TC-S05 | Greeting Text
    Verify the greeting paragraph says 'Hi, I am'.
    """
    expect(desktop_page.locator(".greeting")).to_have_text("Hi, I am")


# =============================================================================
# UI TESTS — sections, content, badges, footer
# =============================================================================

@pytest.mark.ui
def test_about_section_heading(desktop_page: Page):
    """
    TC-U01 | About Section Heading
    Verify the about section uses 'About Me' (professional) heading.
    """
    about = desktop_page.locator("#about")
    expect(about).to_be_visible()
    expect(about.locator("h2")).to_have_text("About Me")


@pytest.mark.ui
def test_about_section_content_neutral(desktop_page: Page):
    """
    TC-U02 | About Section — Dual-Purpose Content
    Verify the about copy mentions both team collaboration and client delivery.
    """
    about_text = desktop_page.locator("#about .about-content").inner_text()
    assert "collaborating within a team" in about_text, (
        "About copy should mention team collaboration (for employers)"
    )
    assert "clients" in about_text, (
        "About copy should still mention clients (for freelance)"
    )


@pytest.mark.ui
def test_projects_section_heading(desktop_page: Page):
    """
    TC-U03 | Projects Section Heading
    Verify the projects section uses 'Featured Projects' (no 'Client').
    """
    projects = desktop_page.locator("#projects")
    expect(projects).to_be_visible()
    expect(projects.locator("h2")).to_have_text("Featured Projects")


@pytest.mark.ui
def test_highlighted_project_cards(desktop_page: Page):
    """
    TC-U04 | Highlighted Project Cards
    Verify there are exactly 2 highlighted project cards with correct badges.
    """
    cards = desktop_page.locator(".highlight-project")
    assert cards.count() == 2, f"Expected 2 highlight cards, got {cards.count()}"

    expect(cards.first.locator(".highlight-badge")).to_have_text(
        "Endpoint Security Testing"
    )
    expect(cards.nth(1).locator(".highlight-badge")).to_have_text(
        "Cloud-Native Load Testing"
    )


@pytest.mark.ui
def test_skills_section_all_categories(desktop_page: Page):
    """
    TC-U05 | Skills Section — All 6 Categories Present
    Verify all six skill category headings are rendered.
    """
    skills = desktop_page.locator("#skills")
    expect(skills).to_be_visible()

    expected_categories = [
        "Framework Design & Architecture",
        "CI/CD Pipeline Integration",
        "Security Agent Testing",
        "Cloud-Native Testing",
        "Team Leadership & Mentoring",
        "Performance & Load Testing",
    ]
    for category in expected_categories:
        expect(skills.locator(f"h3:has-text('{category}')")).to_be_visible(), (
            f"Skill category '{category}' not found"
        )


@pytest.mark.ui
def test_certifications_section(desktop_page: Page):
    """
    TC-U06 | Certifications Section
    Verify the certifications section renders expected badges.
    """
    certs = desktop_page.locator("#certifications")
    expect(certs).to_be_visible()
    expected_badges = [
        "Microsoft Certified: Azure Administrator (AZ-104)",
        "Certified Scrum Master",
        "AWS Fundamentals",
        "Python & Selenium Test Automation",
    ]
    for badge in expected_badges:
        expect(certs.locator(f".badge:has-text('{badge}')")).to_be_visible()


@pytest.mark.ui
def test_footer_content(desktop_page: Page):
    """
    TC-U07 | Footer
    Verify the footer contains Ronit's name and the professional tagline.
    """
    footer_text = desktop_page.locator("footer.footer").inner_text()
    assert "Ronit Kr. Roy" in footer_text
    assert "SDET" in footer_text or "QA Automation" in footer_text


# =============================================================================
# FUNCTIONAL TESTS — interactivity & behavior
# =============================================================================

@pytest.mark.functional
def test_navigation_links_present(desktop_page: Page):
    """
    TC-F01 | Navigation Links
    Verify all 4 nav links appear with updated labels (no 'Freelance Projects').
    """
    expected_links = ["About", "Expertise", "Projects", "Contact"]
    nav = desktop_page.locator(".nav-links")
    for link_text in expected_links:
        expect(nav.locator(f">> text={link_text}")).to_be_visible()

    # Negative: 'Freelance Projects' must NOT appear in nav
    freelance_link = nav.locator("text=Freelance Projects")
    assert freelance_link.count() == 0, (
        "Nav should not have 'Freelance Projects' label anymore"
    )


@pytest.mark.functional
def test_nav_about_scroll(desktop_page: Page):
    """
    TC-F02 | Nav Click → About Section Scroll
    Click 'About' nav link and verify the about section becomes visible.
    """
    desktop_page.locator(".nav-links >> text=About").click()
    desktop_page.wait_for_timeout(600)  # allow scroll animation
    expect(desktop_page.locator("#about")).to_be_in_viewport()


@pytest.mark.functional
def test_nav_contact_scroll(desktop_page: Page):
    """
    TC-F03 | Nav Click → Contact Section Scroll
    Click 'Contact' nav link and verify the contact section becomes visible.
    """
    desktop_page.locator(".nav-links >> text=Contact").click()
    desktop_page.wait_for_timeout(600)
    expect(desktop_page.locator("#contact")).to_be_in_viewport()


@pytest.mark.functional
def test_theme_toggle_switches_class(desktop_page: Page):
    """
    TC-F04 | Theme Toggle Button
    Click the theme toggle and verify body switches between dark and light themes.
    """
    body = desktop_page.locator("body")
    toggle = desktop_page.locator("#theme-toggle")
    expect(toggle).to_be_visible()

    # Record initial state
    initial_has_light = body.evaluate("el => el.classList.contains('light-theme')")

    # Click toggle
    toggle.click()
    desktop_page.wait_for_timeout(400)

    # Theme class must have flipped
    after_click = body.evaluate("el => el.classList.contains('light-theme')")
    assert initial_has_light != after_click, (
        "Clicking theme toggle must switch between dark and light modes"
    )


@pytest.mark.functional
def test_project_filter_qa_only(desktop_page: Page):
    """
    TC-F05 | Project Filter — QA Automation Tab
    Click the 'QA Automation' filter and verify only QA cards are shown.
    """
    desktop_page.locator(".filter-btn[data-filter='qa']").click()
    desktop_page.wait_for_timeout(400)

    all_cards = desktop_page.locator(".project-detailed-card")
    for i in range(all_cards.count()):
        card = all_cards.nth(i)
        category = card.get_attribute("data-category") or ""
        is_hidden = card.evaluate("el => el.classList.contains('hidden')")
        if "qa" in category:
            assert not is_hidden, f"Card with category '{category}' should be visible"
        else:
            assert is_hidden, f"Card with category '{category}' should be hidden"


@pytest.mark.functional
def test_project_filter_all_restores(desktop_page: Page):
    """
    TC-F06 | Project Filter — 'All Projects' Restores All Cards
    After filtering, clicking 'All Projects' shows all 6 cards again.
    """
    # Filter to fullstack first
    desktop_page.locator(".filter-btn[data-filter='fullstack']").click()
    desktop_page.wait_for_timeout(300)

    # Then reset to all
    desktop_page.locator(".filter-btn[data-filter='all']").click()
    desktop_page.wait_for_timeout(400)

    all_cards = desktop_page.locator(".project-detailed-card")
    visible_count = 0
    for i in range(all_cards.count()):
        is_hidden = all_cards.nth(i).evaluate(
            "el => el.classList.contains('hidden')"
        )
        if not is_hidden:
            visible_count += 1

    assert visible_count == 6, (
        f"'All Projects' filter should show 6 cards, got {visible_count}"
    )


@pytest.mark.functional
def test_contact_form_validation_empty_submit(desktop_page: Page):
    """
    TC-F07 | Contact Form — Empty Submit Blocked
    Submitting the form without filling required fields must NOT
    trigger a success banner (HTML5 / JS validation should block it).
    """
    desktop_page.locator(".nav-links >> text=Contact").click()
    desktop_page.wait_for_timeout(500)

    desktop_page.locator("#submit-btn").click()
    desktop_page.wait_for_timeout(300)

    # Success banner must remain hidden
    banner = desktop_page.locator("#form-status-banner")
    style = banner.get_attribute("style") or ""
    assert "none" in style or not banner.is_visible(), (
        "Form success banner should NOT appear when fields are empty"
    )


@pytest.mark.functional
def test_vcard_download_button(desktop_page: Page):
    """
    TC-F08 | vCard Download Button
    Verify the 'Save Contact (vCard)' button is visible and
    has the correct href pointing to ronit_roy.vcf.
    """
    desktop_page.locator(".nav-links >> text=Contact").click()
    desktop_page.wait_for_timeout(500)

    vcard = desktop_page.locator("text=Save Contact (vCard)")
    expect(vcard).to_be_visible()
    expect(vcard).to_have_attribute("href", "ronit_roy.vcf")
    expect(vcard).to_have_attribute("download")


# =============================================================================
# RESPONSIVE TESTS — mobile viewport
# =============================================================================

@pytest.mark.responsive
def test_mobile_burger_menu_visible(mobile_page: Page):
    """
    TC-R01 | Mobile — Burger Menu Button Visible
    On mobile viewport the hamburger menu icon must be visible.
    """
    expect(mobile_page.locator(".burger")).to_be_visible()


@pytest.mark.responsive
def test_mobile_burger_opens_nav(mobile_page: Page):
    """
    TC-R02 | Mobile — Burger Opens Navigation Drawer
    Clicking the burger must open the slide-in nav drawer.
    """
    burger = mobile_page.locator(".burger")
    expect(burger).to_be_visible()
    burger.click()
    mobile_page.wait_for_timeout(500)

    nav = mobile_page.locator(".nav-links")
    # After clicking, nav-links must have 'nav-active' class
    has_active = nav.evaluate("el => el.classList.contains('nav-active')")
    assert has_active, "Clicking burger must add 'nav-active' class to nav-links"


@pytest.mark.responsive
def test_mobile_hero_cta_stacked(mobile_page: Page):
    """
    TC-R03 | Mobile — CTA Buttons Are Visible
    On mobile, all CTA buttons must still be present and accessible.
    """
    expect(mobile_page.locator("text=View My Work")).to_be_visible()
    expect(mobile_page.locator("text=Get In Touch")).to_be_visible()
    expect(mobile_page.locator("text=Download CV")).to_be_visible()


# =============================================================================
# ACCESSIBILITY TESTS — semantic structure
# =============================================================================

@pytest.mark.accessibility
def test_single_h1_on_page(desktop_page: Page):
    """
    TC-A01 | Accessibility — Single H1
    A well-structured page must have exactly one <h1> element.
    """
    h1_count = desktop_page.locator("h1").count()
    assert h1_count == 1, (
        f"Page must have exactly 1 <h1>, found {h1_count}"
    )


@pytest.mark.accessibility
def test_nav_landmark_present(desktop_page: Page):
    """
    TC-A02 | Accessibility — Nav Landmark
    The page must have a <nav> landmark for screen-reader navigation.
    """
    expect(desktop_page.locator("nav")).to_be_visible()
    expect(desktop_page.locator("main")).to_be_attached()
    expect(desktop_page.locator("footer")).to_be_attached()
