import { test, expect } from '@playwright/test';

test('homepage has correct title and loads brand section', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Check title
    await expect(page).toHaveTitle(/Oficina Aromar/);

    // Check Hero Section
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toContainText('Oficina Aromar');

    // Check WhatsApp Link (should find at least one)
    const whatsappLink = page.locator('a[href*="wa.me/5524988154470"]');
    await expect(whatsappLink.first()).toBeVisible();
});

test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/');

    // Click menu button
    const menuBtn = page.locator('#mobile-menu-button');
    await menuBtn.click();

    // Check if mobile menu is visible
    const mobileNav = page.locator('nav').first().locator('..').locator('div.md\\:hidden');
    await expect(mobileNav).toBeVisible();
});
