import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://in.puma.com/in/en');
    await page.locator('[data-test-id="search-button-nav"]').click();
    await page.locator('[data-test-id="search-flyout-form-input"]').fill('mens shoes');
    await page.locator('[data-test-id="search-flyout-form-submit"]').click();
    await page.goto('https://in.puma.com/in/en/search?q=mens%20shoes&offset=72');
    await page.getByRole('listitem').filter({ hasText: 'ColorsSoftride Pro Dynamic Flex Men\'s Sports ShoesPUMA White-Vapor Gray-PUMA' }).getByLabel('3 Colors, Softride Pro').click();
    await page.getByText('UK 7').click();
    await page.locator('[data-test-id="add-to-cart-button"]').click();
    await page.locator('[data-test-id="minicart-cart-link"]').click();
});