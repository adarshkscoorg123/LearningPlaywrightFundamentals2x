
import { test, expect } from '@playwright/test';


test('Basic verify how to handle multiple elements ', async ({ page }) => {

    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const rightPanelLinksTexts: string[] = await page.locator("//a[contains(@class,'list-group-item')]").allInnerTexts();

    // First Way
    console.log(rightPanelLinksTexts.length);

    for (const link of rightPanelLinksTexts) {
        console.log(link);
    }

    console.log("-----------");

    // Second way
    for (let i = 0; i < rightPanelLinksTexts.length; i++) {
        console.log(rightPanelLinksTexts[i]);
    }


    for (const linkText of rightPanelLinksTexts) {
        // .trim() removes hidden spaces, .includes() handles partial text matches
        if (linkText.trim().includes("Forgotten Password")) {
            // Scope the click directly to the side items to ensure Playwright clicks it
            await page.locator('a.list-group-item')
                .filter({ hasText: linkText })
                .first()
                .click();
            break; // Stops the loop instantly
        }
    }

    // To get the attribute values
    const rightPanelLinks = await page.locator("//a[contains(@class,'list-group-item')]").all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }

});