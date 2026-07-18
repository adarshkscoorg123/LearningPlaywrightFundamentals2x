import { test, expect } from '@playwright/test';

test('Verify the signup page has an error with the incorrect email ID. ', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");

    let inputBox = page.locator("//input[@id='page-v1-step1-email']"); // using xpath
    //let inputBox = page.locator("#page-v1-step1-email"); // using css selectors

    await inputBox.fill("abccd");

    //input[@id="page-free-trial-step1-cu-gdpr-consent-checkbox"]

    let checkBox = page.locator("//input[@id='page-free-trial-step1-cu-gdpr-consent-checkbox']");
    await checkBox.click();

    await page.locator("//button[@data-qa='page-su-submit']").first().click();

    //div[contains(@class,"invalid-reason")]

    let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");

});
