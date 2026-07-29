
import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const columnA = page.locator("//div[@id='column-a']");
    const columnB = page.locator("//div[@id='column-b']");

    await columnA.dragTo(columnB);
    await page.pause();

});