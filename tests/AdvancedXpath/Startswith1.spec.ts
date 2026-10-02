import{test, expect} from '@playwright/test'

test("Test Case on Startswith Xpath", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.locator("//input[starts-with(@name, 'txtU')]").fill("selenium");
    await page.locator("//input[starts-with(@name, 'txtP')]").fill("cypress");
    await page.locator("//input[starts-with(@type, 'Su')]").click();



    await page.waitForTimeout(2000);


})