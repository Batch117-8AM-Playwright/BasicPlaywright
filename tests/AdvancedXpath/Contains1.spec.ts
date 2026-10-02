import{test, expect} from '@playwright/test'

test("Test Case on Contains Xpath", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.locator("//input[contains(@name, 'tUs')]").fill("selenium");
    await page.locator("//input[contains(@name, 'ssw')]").fill("cypress");
    await page.locator("//input[contains(@type, 'mi')]").click();



    await page.waitForTimeout(2000);


})