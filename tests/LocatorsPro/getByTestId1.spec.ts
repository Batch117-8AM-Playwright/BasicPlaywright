import {test, expect} from '@playwright/test'

test("Test Case on Get By Test ID", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/ByTestID.html")

    await page.getByTestId("login-button").click();

    await page.waitForTimeout(2000)

    await page.goBack();

    await page.waitForTimeout(2000)   

    await page.getByTestId("username-input").fill("data entered")

    await page.waitForTimeout(2000) 

    let h = await page.getByTestId("profile-card").textContent()
    console.log(h);




})