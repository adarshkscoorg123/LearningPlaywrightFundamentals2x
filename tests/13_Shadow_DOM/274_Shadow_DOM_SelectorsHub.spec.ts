
import { test, expect, Locator } from '@playwright/test';

const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

test.describe('Shadow handling for selectors hub', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {
        //div[@id="userName"]- convert to css selector
        //const card = page.locator('#userName'); // this also works
        const card = page.locator('div[id="userName"]'); //this also works(css), but as we have
        // seen in the below code, we need to strictly use css selector

        // this works(Below Shadow root- but we should compulsary use css selector, 
        // it doesnt work with xpath)
        await card.locator('input[id="kils"]').fill('Adarsh');
        await card.locator('input[id="pizza"]').fill('Pizza Hut Panner');

        await page.pause();

    });

});