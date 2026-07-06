"""
conftest.py — Shared fixtures for the Portfolio Playwright test suite.

Provides:
- `target_url`  : resolves to --base-url (live server) or local file:// path.
- `desktop_page`: a Page object sized for desktop (1280x800).
- `mobile_page` : a Page object sized for mobile (390x844) — iPhone 14 equivalent.
"""

import os
import pytest
from playwright.sync_api import Browser, Page, BrowserContext

# ── Resolve the portfolio root ──────────────────────────────────────────────
TESTS_DIR   = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(TESTS_DIR)
INDEX_FILE  = (
    "file:///"
    + os.path.join(PROJECT_ROOT, "index.html").replace("\\", "/")
)


@pytest.fixture(scope="session")
def target_url(base_url) -> str:
    """
    Returns the URL used for all tests.
    - If --base-url is passed (e.g. http://localhost:8000), use that.
    - Otherwise fall back to the local file:// path.
    """
    if base_url:
        return base_url.rstrip("/") + "/"
    return INDEX_FILE


@pytest.fixture
def desktop_page(page: Page, target_url: str) -> Page:
    """A pre-navigated desktop-sized (1280×800) page."""
    page.set_viewport_size({"width": 1280, "height": 800})
    page.goto(target_url, wait_until="domcontentloaded")
    return page


@pytest.fixture
def mobile_page(browser: Browser, target_url: str) -> Page:
    """A pre-navigated mobile-sized (390×844) page in a fresh context."""
    context: BrowserContext = browser.new_context(
        viewport={"width": 390, "height": 844},
        user_agent=(
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) "
            "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 "
            "Mobile/15E148 Safari/604.1"
        ),
    )
    page = context.new_page()
    page.goto(target_url, wait_until="domcontentloaded")
    yield page
    context.close()
