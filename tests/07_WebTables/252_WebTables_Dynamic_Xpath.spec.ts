import { test, expect } from '@playwright/test';


test('Basic verify how to handle multiple elements ', async ({ page }) => {

    // First of all, go to the link of the web table, 
    // find the correct Helen banquet, 
    // and then use a for loop to find the following simple 

    await page.goto("https://awesomeqa.com/webtable.html");
    //table[@id="customers"]/tbody/tr[5]/td[2]	

    // 5 - i , 1 to 7 ( 1 is a header, so ignore the header) 2 to 7 are actual values
    // ]/td[
    // 2 - j , j -> 1,2,3
    // ]

    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator("//table[@id='customers']/tbody/tr[3]/td").count();

    console.log(rows);
    console.log(columns);
    console.log("--------");

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            console.log(dynamicPath);

            const data = await page.locator(dynamicPath).innerText();
            console.log(data);

            if (data.includes('Roland Mendel')) {
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const companyPath = `${dynamicPath}/preceding-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                const companyText = await page.locator(companyPath).innerText();
                console.log('------');
                console.log(`Roland Mendel is In - ${countryText}`);
                console.log(`Roland Mendel company is - ${companyText}`);
            }
        }
    }
    //await page.pause();
});