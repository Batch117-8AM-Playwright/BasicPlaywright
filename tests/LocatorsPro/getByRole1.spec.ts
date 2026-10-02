import{test, expect} from '@playwright/test'

test("Test Case on get By Role", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.locator("//input[@type='text']").fill("srgwef")
    await page.locator("//input[@type='password']").fill("srgwef")
    await page.waitForTimeout(2000)
    await page.getByRole("button" , {name : "Login"}).click();

    await page.waitForTimeout(5000)


})