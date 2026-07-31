import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        //1. First way(without using xpath, directly through "id")
        // const circleShape: Locator = page.locator('#circle-blue');
        // await circleShape.click();

        //2. Second way(with using xpath)
        //div[@class="svg-frame"]//*[name()="svg"]//*[name()="circle" and contains(@id,"circle-blue")]
        const circleShape_xpath: Locator = page.locator("//div[@class='svg-frame']//*[name()='svg']//*[name()='rect' and contains(@id,'rect-amber')]");
        await circleShape_xpath.click();

        const output_shapes = await page.locator('#shapes-output').innerText();
        console.log(output_shapes);
        expect(output_shapes).toContain('Amber rectangle');


        // 1. First way to find and click through 'getbyRole' 
        await page.getByRole('button', { name: /Q4 bar/ }).click();


        // 2. Second way to find and click through xpath
        //div[@class="svg-frame"]//*[name()="svg"]//*[name()="rect" and contains(@data-testid,"bar-q4")]
        //await page.locator("//div[@class='svg-frame']//*[name()='svg']//*[name()='rect' and contains(@data-testid,'bar-q4')]").click();

        const output_bars = await page.locator("//div[@id='bars-output']").innerText();
        console.log(output_bars);
        expect(output_bars).toContain('Q4');

        // 1. First way to find and click through 'getbyRole' 
        //await page.getByRole('radio', { name: '3 stars' }).click();

        // 2. Second way to find and click through xpath
        //div[@class="star-row"]//*[name()="svg"]//*[name()="polygon" and contains(@data-testid,"star-3")]
        await page.locator("//div[@class='star-row']//*[name()='svg']//*[name()='polygon' and contains(@data-testid,'star-3')]").click();


        //1. First way
        //let allBars = await page.locator(".bar").all();


        //2. Second way through xpath
        //div[@class='svg-frame']//*[name()='svg']//*[name()='rect' and contains(@class,"bar")]
        let allBars_xpath = await page.locator("//div[@class='svg-frame']//*[name()='svg']//*[name()='rect' and contains(@class,'bar')]").all();

        for (const bar of allBars_xpath) {

            // logic which is the height, low ......click on that.

            const q = await bar.getAttribute('data-quarter');
            const h = await bar.getAttribute('height');
            const data_testid = await bar.getAttribute('data-testid');
            console.log(q);
            console.log(h);
            console.log(data_testid);
            console.log("--------");
        }

        await page.pause();

    });

});

