import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let vehicleFrame: FrameLocator = await page.frameLocator("//iframe[@id='frame-one']");
    await vehicleFrame.locator("//input[@id='RESULT_TextField-1']").fill("Mercedes Benz");
    await vehicleFrame.locator("//input[@id='RESULT_TextField-2']").fill('Adarsh KS');
    await vehicleFrame.locator("//input[@id='RESULT_TextField-3']").fill('KA03ND3376');
    await vehicleFrame.locator("//select[@id='RESULT_RadioButton-1']").selectOption('Electric');
    await vehicleFrame.locator("//input[@id='RESULT_TextField-4']").fill('2016');
    await vehicleFrame.locator("//textarea[@id='RESULT_TextArea-1']").fill('Amazing car with amazing family car in a budget');
    await vehicleFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vehicleFrame.locator("//div[@id='vehicle-output']").innerText();
    console.log(output);

    await page.pause();
});