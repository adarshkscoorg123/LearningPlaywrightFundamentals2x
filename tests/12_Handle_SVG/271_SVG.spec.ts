import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('Flipkart Search via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    });

    test('TC#1 @smoke @regression', async ({ page }) => {

        //input[@name="q"]
        await page.locator("//input[@name='q']").fill("macmini");
        //await page.getByTitle('Search for products, brands and more').fill('macmini');

        await page.pause();

        // const svgElements: Locator = page.locator('svg'); // This can also be used-
        // await svgElements.first().click();               //- (or the below code with xpath can be used)

        //button[@class="bJtikv"]//*[name()="svg"]
        const svgElements_xpath: Locator = page.locator("//button[@class='bJtikv']//*[name()='svg']");
        await svgElements_xpath.click();

        // const svgElementsAll: Locator[] = await page.locator('svg').all();
        // for(let svgElement in svgElementsAll){
        //   // find and click()
        // }


        // 1. First Way to print all the inner texts of Macmini
        //div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]
        const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

        const count: number = await titleResults.count();
        console.log(count);

        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }


        // 2. Second Way to print all the inner texts of Macmini(Either of the code's will work:note:JUst comment while using)
        /* const titleResults: Locator[] = await page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]").all();

        for (let allmenu of titleResults) {
            console.log(await allmenu.innerText());
        } */

    });

});
