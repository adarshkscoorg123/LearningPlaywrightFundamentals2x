
import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    await page.locator(
        "//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']"
    ).check();
    await page.pause();
    await page.locator(
        "//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']"
    ).uncheck();

    // await page
    //     .locator("tr:has(td:text('Rohan.Mehta'))")
    //     .locator("td")
    //     .first()
    //     .click(); // This one we are rarely using : Note: we are uing upper code

    await page.waitForTimeout(5000);

});