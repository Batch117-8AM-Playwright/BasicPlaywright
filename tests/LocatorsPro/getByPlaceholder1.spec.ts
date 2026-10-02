import {test, expect} from '@playwright/test'

test("Test Case on Get By Place Holder", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/PlaceHolderPro.html")

    await page.waitForTimeout(500);

    await page.getByPlaceholder("Username").fill("Movie going")
    await page.getByPlaceholder("Password").fill("no tickets")
    await page.getByPlaceholder("Email address").fill("gotohome@sleep.com")
    await page.getByPlaceholder("Enter your comments").fill("Yes we missed the movide tickets")

    await page.waitForTimeout(2000);

})