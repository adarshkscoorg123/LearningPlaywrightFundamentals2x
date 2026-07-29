import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
    let mainFrame: FrameLocator = await page.frameLocator("//frame[@name='main']");
    const headerText = await mainFrame.locator("//h2[@id='main-heading']").innerText();
    console.log(headerText);

    const allFrames: Locator[] = await page.locator("//frame").all();
    console.log('total number of frames: ' + allFrames.length);


    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    let sideFrame: FrameLocator = await page.frameLocator("//frame[@name='side']");
    //await sideFrame.getByTestId('side-link-registration').click(); This can also be used
    await sideFrame.getByText("Vehicle registration").click();
    await mainFrame.locator("//input[@id='RESULT_TextField-1']").fill("Renault Kwid");
    await page.pause();

    let footerFrame: FrameLocator = await page.frameLocator("//frame[@name='footer']");
    //span[@class="dot"]
    const footerText = await footerFrame.getByText("The Testing Academy").innerText();
    console.log(footerText);

});