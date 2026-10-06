import {test , expect} from '@playwright/test'

test("Test Case on Taking Screenshots", async({page})=>
{

    await page.goto("https://www.amazon.in/")

    await page.waitForTimeout(6000);

    await page.screenshot({path : './TestProofs/FullAmazon.jpg', fullPage : true});
     
    await page.waitForTimeout(3000);


})