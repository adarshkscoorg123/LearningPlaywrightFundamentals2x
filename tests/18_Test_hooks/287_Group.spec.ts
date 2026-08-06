
import { test, expect } from '@playwright/test';

test('login form is reachable via steps', async ({ page }) => {

    await test.step('open practice page', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');
    });

    await test.step('fields are visible', async () => {
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
    });

    await test.step('submit + assert validation', async () => {
        await page.getByRole('button', { name: /Login/i }).click();
        await expect(page.getByText(/required|invalid/i)).toBeVisible();
        // failing deliberately to see the output

    });
});