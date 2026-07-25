
import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country

    //tbody[@id="employees-tbody"]/tr

    let priyaRow = page.locator("//tbody[@id='employees-tbody']/tr").filter({ hasText: "Priya Kapoor" });
    const email = await priyaRow.locator("//td[@data-col='email']").innerText();
    const country = await priyaRow.locator("//td[@data-col='country']").innerText();

    console.log(email, country);
    await page.waitForTimeout(5000);
});