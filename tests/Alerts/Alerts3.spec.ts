import {test, expect} from '@playwright/test'

test("Test Case on Alerts", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Alert Message.html");

    await page.waitForTimeout(2000);

    page.on("dialog", async(k)=>
    {
        await page.waitForTimeout(3000);
        console.log("OK --->" +k.type())   //alert
        console.log(k.message())
        k.accept();  //clicks on OK
    })

    await page.locator("//button").click();

    await page.waitForTimeout(4000);


})