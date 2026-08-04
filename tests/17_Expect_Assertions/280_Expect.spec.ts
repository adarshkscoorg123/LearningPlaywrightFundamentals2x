
import { test, expect } from '@playwright/test';

test('2 Locator-based assertions', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');

    const heading_xpath = page.locator("//h1[@id='page-title']");
    console.log(await heading_xpath.textContent());

    const heading = page.getByText('multiple element filters', { exact: true });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('element filters', { timeout: 10000 });

    const email = page.getByRole('textbox', { name: 'email' });
    await expect(email).toHaveAttribute('id', 'email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

    //const footerLinks = page.locator('footer a'); // css selector
    //const footerLinks_xpath1 = page.locator("//footer//a"); // xpath:
    const footerLinks_xpath_2 = await page.locator("//footer[@id='footer-links']//a"); // another Xpath
    //await expect(footerLinks).toHaveCount(16);
    //await expect(footerLinks_xpath1).toHaveCount(16);
    await expect(footerLinks_xpath_2).toHaveCount(16);



    const footerLinks_xpath2 = await page.locator("//footer[@id='footer-links']//a").allInnerTexts();
    console.log(footerLinks_xpath2.length);

    for (const footerlinks of footerLinks_xpath2) {
        console.log(footerlinks);
    }


});