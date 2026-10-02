import {test, expect} from '@playwright/test'

test("Test Case on Alerts", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Alert Message.html");

    await page.waitForTimeout(2000);

    await page.locator("//button").click();

    await page.waitForTimeout(4000);


})