
//input[@name="firstname"]

import { test, expect } from '@playwright/test';

test("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://awesomeqa.com/practice.html");
    //input[@name="firstname"]
    await page.locator("//input[@name='firstname']").pressSequentially("the testing academy", { delay: 200 });

    await page.waitForTimeout(5000);
    await page.goto("https://app.vwo.com");
    await page.waitForTimeout(5000);
    await page.goto("https://awesomeqa.com/practice.html");
    //await page.goBack(); It will go back to the previous page,if it doesnt work, 
    // please use the above code
    //await page.waitForTimeout(5000);
});