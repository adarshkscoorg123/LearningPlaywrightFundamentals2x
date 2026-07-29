
import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

    // const columnA = page.locator("//article[@id='card-write-spec']");
    // const columnB = page.locator("//div[@data-status='in-progress']");

    // await columnA.dragTo(columnB);

    await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="in-progress"]'));
    await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="review"]'));
    await page.pause();

    // Manual mouse path — for finicky DnD libraries

    // let source: Locator = page.locator('#card-write-spec');
    // const sBox = (await source.boundingBox())!;
    // //console.log(sBox);

    // let target: Locator = page.locator('[data-status="review"]');
    // const tBox = (await target.boundingBox())!;
    // //console.log(tBox);

    // await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    // await page.mouse.down();

    // await page.waitForTimeout(10000); // Small pause for framework to react
    // // Allow the UI to register the hold

    // await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    // await page.mouse.up();
    // await page.pause();

});