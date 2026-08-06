import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    // run once per worker — e.g. seed test data, spin a docker container
    console.log('beforeAll — server is up');
});

test.beforeEach(async ({ page }) => {
    // run before every test case— e.g. log in, seed cookies
    await page.goto('https://app.thetestingacademy.com/playwright/');
});

test('practice index has 25 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(29);
});

test('sidebar collapse button works', async ({ page }) => {
    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});

test.afterAll(async () => {
    console.log('afterAll — tear down');
});

// 1.First beforeAll will run
// 2.secondly beforeEach will run
// 3.first test case will run
// 4.AfterEach will run
// 5.beforeEach will run
// 6.Second test case will run
// 7.AfterEach will run
// 8.lastly afterAll will run


