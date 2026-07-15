import { test, expect } from '@playwright/test';

test("Testing of two links using BCP", async ({ browser }) => {
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("TTA-Cart page is Opened", "URL is:", page1.url());


    let context2 = await browser.newContext();
    let page2 = await context2.newPage();
    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("TTA-Bank page is Opened", "URL is:", page1.url());

    await page1.close();
    await page2.close();
    await context1.close();
    await context2.close();

});