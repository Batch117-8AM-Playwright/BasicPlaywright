import{test, expect} from '@playwright/test'

test("Test Case on Checking the Login Functionality", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(1000)
    //console.log("The Hompage Title is : " +await page.title())

    await expect(page).toHaveTitle("Orange HRM - New Level of HR Management")

    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")
    await page.locator("//input[@type='Submit']").click();

     console.log("The After Title is : " +await page.title())
    await page.waitForTimeout(2000)


})