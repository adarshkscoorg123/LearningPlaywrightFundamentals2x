
import { test, expect } from '@playwright/test';

test('Visible · enabled · disabled · checked', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');

    const automationCheckBox = page.getByRole('checkbox', { name: /UFT/ });
    //await automationCheckBox.check();
    await expect(automationCheckBox).not.toBeChecked();
    await page.pause();

    const submitBtn = page.getByTestId('profile-submit');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    const fileOperations = page.getByText('No file chosen');
    await expect(fileOperations).toBeEnabled();
    // it should fail, but there is problem in the application for this button

    await expect(page).toHaveTitle(/QA Profile/);

    const appUrl = page.url();
    expect(appUrl).toContain('thetestingacademy');

    await page.pause();

});
