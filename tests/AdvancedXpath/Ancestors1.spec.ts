import{test, expect} from '@playwright/test'

test("Test Case on Backwaard-Ancestor Xpath", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.locator("//input[@type='password']//preceding::input[1]").fill("selenium");
    await page.locator("//input[@type='text']//following::input[1]").fill("cypress");
    await page.locator("//input[@type='text']//following::input[2]").click();


    await page.waitForTimeout(2000);


})