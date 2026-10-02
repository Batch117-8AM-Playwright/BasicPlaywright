import {test, expect} from '@playwright/test'

test("Test case on Check List", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Name.Htm")

    console.log("The Number of Country in the Check list : " +(await page.locator("//option").count()));
    
})