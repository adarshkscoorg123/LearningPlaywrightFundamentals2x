import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('Flipkart Search via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    });

    test('TC#1 @smoke @regression', async ({ page }) => {
        console.log("TC#1")
    });

    test('TC#2', async ({ page }) => {
        console.log("TC#2")
    });

});
