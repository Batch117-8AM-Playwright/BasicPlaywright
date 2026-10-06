import {test , expect} from '@playwright/test'

test("Test Case on Taking Screenshots", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.screenshot({path : './TestProofs/Homepage.jpg'});

    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")
    await page.locator("//input[@type='Submit']").click()

    await page.waitForTimeout(2000);
    await page.screenshot({path : './TestProofs/After_Login.jpg'});
    await page.locator("li#pim").hover();
    await page.waitForTimeout(1000);
    await page.locator("//span[text()='Add Employee']").click()

    const F = page.frameLocator("iframe#rightMenu")

    await F.locator("input#txtEmployeeId").fill("337711")
    await F.locator("input#txtEmpLastName").fill("Raghu")
    await F.locator("input#txtEmpFirstName").fill("Kiran")
    await F.locator("input#txtEmpMiddleName").fill("Friends")
    await F.locator("input#txtEmpNickName").fill("Hello")

    await page.waitForTimeout(2000);

    await F.locator("input#photofile").setInputFiles("./EmpPhotos/Emp1.png")

    await page.waitForTimeout(2000);
    await page.screenshot({path : './TestProofs/Before_Save.jpg'});

    await F.locator("input#btnEdit").click()

     await page.waitForTimeout(3000);

     await page.screenshot({path : './TestProofs/After_Save.jpg'});

    await page.waitForTimeout(7000);


})