import{test, expect} from '@playwright/test'

test("Test Case on Absolute Xpath", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td[2]/input").fill("selenium");
    await page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/input").fill("cypress");
    await page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td[1]/input").click();



    await page.waitForTimeout(2000);


})