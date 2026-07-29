
import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Spice jet hovering!', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');
    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByText('FlyEarly', { exact: true }).click();
    await page.pause();
    await page.getByText("SpiceClub", { exact: true }).first().hover();

});