
import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgottenPasswordLink = page.locator('a.list-group-item')
        .filter({ hasText: 'Forgotten Password' });

    // const text = await forgottenPasswordLink.textContent();
    // console.log(text); // Outputs: "Forgotten Password"

    await forgottenPasswordLink.click();
    //await page.pause();


    // Order" vs "Order History
    //  /^Order/

    const accountLinks = page.locator('a.list-group-item');
    // const count = await accountLinks.count();
    // console.log(`Total links found: ${count}`); to find the counts
    await expect(accountLinks).toHaveCount(13);


    const privacyLink = page.locator("//footer[@id='footer-links']/div/a").filter({ hasText: 'Delivery Information' });
    const privacy_text = await privacyLink.textContent();
    console.log(privacy_text); // Outputs: "Delivery Information"
    //const privacyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' }); using CSS selector
    await expect(privacyLink).toHaveAttribute('href', '#delivery-information');

});