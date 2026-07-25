import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {


    // ① Single — searchable
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    //data-testid="rs-single-input"

    // 1st Way to select Playwright from the dropdown by typing the word
    const inputField = page.getByTestId("rs-single-input");
    await inputField.click();
    // Type out the target keyword
    await inputField.fill("Playwright");
    await page.getByRole('option', { name: 'Playwright', exact: true }).click();


    // 2nd Way to select Playwright option from dropdown by not typing the word
    // await page.getByTestId("rs-single-input").click();
    // await page.getByRole('option', { name: 'Playwright', exact: true }).click();
    // //await page.getByText("Selenium").click() // This one can also be used instead of above one
    //await page.pause();

    // ②  Multi — chips with remove
    await page.locator("//input[@data-testid='rs-multi-input']").click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByRole('option', { name: 'JUnit' }).click();
    await page.locator("//div[text()='Mocha']").click();
    await page.keyboard.press("Escape");

    // ③ Creatable multi — type and Enter

    await page.locator("//input[@data-testid='rs-creatable-input']").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByRole('option', { name: 'performance' }).click();
    await page.locator("//div[text()='accessibility']").click();
    await page.keyboard.press("Escape");
    await page.pause();

    //⑤ Async — fetched on type
    //div[@id="rs-async"]
    await page.locator("//div[@id='rs-async']").click();
    //rs-async-input
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();

});
