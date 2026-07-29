import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Menu practice hovering!', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu/');
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("test-id-Wifi").click();

    const items_menu: Locator[] = await page.locator("//div[@data-testid='nav-add-ons']/div/a").all();
    for (let allmenu of items_menu) {
        console.log(await allmenu.innerText());
    }

    //div[@data-testid="hover-output"]
    const text = await page.getByTestId("hover-output").innerText();
    console.log(text);
    await page.pause();

});