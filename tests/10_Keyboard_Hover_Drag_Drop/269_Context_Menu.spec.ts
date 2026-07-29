
import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator("//span[@data-testid='ctx-target']").first().click({ button: 'right' });


    const allOptions: Locator[] = await page
        .locator("//ul[@id='ctx-menu']/li")
        // .locator('ul.context-menu-list span')
        .all();

    for (let allmenu of allOptions) {
        console.log(await allmenu.innerText());
    }


    await page.locator("//button[@data-action='edit']").first().click();
    const text: String = await page.getByTestId("ctx-output").innerText();
    console.log(text);
    await page.pause();

});