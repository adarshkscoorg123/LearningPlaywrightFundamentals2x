import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    // open the dropdown
    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: 'JavaScript' }).click();
    //await page.locator("//div[text()='TypeScript']").click(); Alternatively we can use this also


    //button[@id="framework-trigger"]
    await page.locator("//button[@id='framework-trigger']").click();
    await page.getByRole('option', { name: 'Svelte' }).click();


    //data-testid="experience-trigger"
    await page.getByTestId("experience-trigger").click();
    await page.getByText("Principal (10+ years)").click();
    await page.pause();

});