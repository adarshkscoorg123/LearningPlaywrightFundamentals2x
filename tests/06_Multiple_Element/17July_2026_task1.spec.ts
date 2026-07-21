
import { test, expect } from '@playwright/test';

test('Automate the Login for the Student ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //await page.pause();
    await page.locator("//input[@name='email']").fill("adarshkssuresh263@gmail.com");
    await page.locator("//input[@name='password']").fill("madhava");

    await page.getByRole('checkbox', { name: 'remember' }).check();

    //https://app.thetestingacademy.com/playwright/multiple_element_filter?email=adarshkssuresh263%40gmail.com&password=madhava&remember=yes#login-success

    //button[text()="Login to Practice Account"]

    await page.locator("//button[text()='Login to Practice Account']").click();

    //madhava&remember=yes#login-success


    //verify the url after login
    await expect(page).toHaveURL(/madhava&remember=yes#login-success/);
    console.log("Login successfull");

});