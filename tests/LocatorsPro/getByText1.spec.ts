import {test, expect} from '@playwright/test'

test("Test Case on get by Text", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/ByTextFile.html")

    await page.getByText("MyGoogle").click();

    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);

    await page.getByText("Go to TheMask").click();

     await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);




})