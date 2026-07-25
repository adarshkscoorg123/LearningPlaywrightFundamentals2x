import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Select!', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator("//select[@id='dropdown']").click();
    await page.selectOption("//select[@id='dropdown']", "Option 2");
    await page.pause();
    await page.selectOption("//select[@id='dropdown']", "1");
    await page.selectOption("//select[@id='dropdown']", "2");

});