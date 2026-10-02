import{test, expect} from '@playwright/test'

test("Test Case on OR Xpath", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.locator("//input[@class='good' or @tabindex='1']").fill("selenium");
    await page.locator("//input[@class='morning' or @tabindex='2']").fill("cypress");
    await page.locator("//input[contains(@type, 'mi')]").click();
    await page.waitForTimeout(3000);

    console.log(await page.locator("//li[text()='Welcome selenium']").textContent())


})