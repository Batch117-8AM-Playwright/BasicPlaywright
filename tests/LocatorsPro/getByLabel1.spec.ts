import {test , expect} from '@playwright/test'


test("Test Case on Get By Label", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/ByLabel.html")

    await page.waitForTimeout(2000);

    await page.getByLabel("Username").fill("hello huru how are you")

    await page.waitForTimeout(2000);


})