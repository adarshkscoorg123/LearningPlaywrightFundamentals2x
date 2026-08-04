
import { test, expect } from '@playwright/test';

test.describe('Scroll to Element - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    });

    test('scroll to view', async ({ page }) => {

        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you
        // await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        // await page.getByTestId('deep-anchor').click();
        // await page.pause();
        // await page.getByTestId('lazy-item-2').scrollIntoViewIfNeeded();

        // 2) 2x scrollBy 1000 px
        //  page.evaluate - this can execute a JS code
        // await page.evaluate(() => window.scrollBy(0, 1000)); // example 1
        // await page.evaluate(() => window.scrollBy(0, 3000)); // example 2
        // await page.pause();

        // 3) jump to bottom
        // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // await expect(page.getByTestId('cta-button')).toBeEnabled();


        // // 4) jump back to top of the window or scroll
        // await page.evaluate(() => window.scrollTo(0, 0));

        // 5) lazy list grows past 10 once visible

        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();
        await page.pause();

        const list = page.getByTestId('lazy-list').locator('li');
        const initialCount = await list.count();
        console.log(initialCount);
        // scroll the LAST existing item into view — item 11 does not exist yet,
        // so nth(10) would just wait until the test times out.
        await list.last().scrollIntoViewIfNeeded();

        // poll untill the new items appened.

        await expect.poll(async () => list.count(), {
            message: 'expected items > 10',
            timeout: 10_000
        }).toBeGreaterThan(initialCount);

        const finalCount = await list.count();
        console.log(finalCount);

    });

});