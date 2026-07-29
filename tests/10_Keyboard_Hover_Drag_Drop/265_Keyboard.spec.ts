
import { test, expect, Locator } from '@playwright/test';

test('Keybaord', async ({ page }) => {

    await page.goto('https://keycode.info');
    await page.keyboard.press('O');
    await page.screenshot({ path: 'A.png' });

    await page.keyboard.press('ArrowRight');
    await page.screenshot({ path: 'ArrowRight.png' });

    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'O.png' });

    await page.keyboard.up("Shift");
    await page.screenshot({ path: 'up.png' });
    await page.keyboard.down("Shift");
    await page.screenshot({ path: 'down.png' });


});