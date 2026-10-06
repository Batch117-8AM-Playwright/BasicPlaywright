import {test, expect} from '@playwright/test'
import myjson from 'fs'


test("Test Case on Reading Json File", async({page})=>
{
    const myinfo = JSON.parse(myjson.readFileSync('./ReadJson/Empread.json', 'utf-8'))

   
     await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(1000)
    //console.log("The Hompage Title is : " +await page.title())

    await expect(page).toHaveTitle("OrangeHRM - New Level of HR Management")

    await page.locator(myinfo.XUN).fill("selenium")
    await page.locator(myinfo.XPWD).fill("cypress")
    await page.locator(myinfo.XSUB).click();

     console.log("The After Title is : " +await page.title())
    await page.waitForTimeout(2000)



})