
import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {


        //const card = page.getByTestId('card-account-card'); // below shadow root
        // this works(Below Shadow root- but we should compulsary use css selector or getbyrole
        // getbytext,getBytestId etc, it doesnt work with xpath)

        const card = page.getByTestId('card-account'); // this also works(above shadow root)-preferable
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name="password"]').fill('pwd');
        await card.getByTestId('card-account-submit').click();

        await expect(page.getByTestId('card-account-status'))
            .toContainText('student@thetestingacademy.com');



        const cart = page.getByTestId('counter-cart');// first way
        //const cart_id = page.locator('tta-counter[id="counter-1"]'); // second way
        await cart.getByRole('button', { name: 'Increment' }).click();
        await cart.getByRole('button', { name: 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('5');
        await cart.getByRole('button', { name: 'Decrement' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('4');

        //const quantity = page.getByTestId('counter-quantity'); first way
        //tta-counter[@id="counter-2"]- convert to css selector
        const quantity_id = page.locator('tta-counter[id="counter-2"]');// second way
        await quantity_id.getByRole('button', { name: 'Increment' }).click();
        await quantity_id.getByRole('button', { name: 'Increment' }).click();
        await expect(quantity_id.getByTestId('counter-value')).toHaveText('2');

        await page.pause();


        const outer_shadow = page.getByTestId('nested-host');
        await outer_shadow.locator('input[name="email"]').fill("adarshkssuresh263@gmail.com");// first way
        //await outer_shadow.getByTestId('card-inside-email').fill("adarshkssuresh263@gmail.com"); second way

        await outer_shadow.locator('input[name="password"]').fill("onol");
        await outer_shadow.locator('button', { hasText: 'Submit' }).click();
        await expect(outer_shadow.getByTestId('card-inside-status'))
            .toContainText("adarshkssuresh263@gmail.com");

    });

});