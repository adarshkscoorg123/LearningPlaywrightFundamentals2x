
import { test, expect } from '@playwright/test';

test('3 soft assertions & Negation', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    let firstName = await page.getByTestId('first-name');

    // Soft : Each line records its own failure. test continue either way.
    await expect.soft(firstName).toHaveAttribute('id', 'first-name1');
    // Even though this step fails, the below codes will execute in soft assertions
    await expect.soft(firstName).toBeVisible();
    await expect.soft(firstName).toHaveValue('');
    await firstName.fill("Adarsh");
    await page.pause();

    // Hard
    // Final hard assertion still runs after the soft block.
    //await expect(firstName).toBeEnabled();
    // If the step pass, the below codes will continue to execute in hard assertions just like soft assertions

    await expect(firstName).toBeDisabled();
    //If the above step fails, the below codes will not execute in hard assertions
    await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
    await expect(page.locator('#error')).not.toBeVisible();

    let title = await page.title();
    console.log(title);
    expect(title).not.toContain('error');

});
