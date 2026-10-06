import {test, expect} from '@playwright/test'
import myExcel from 'xlsx'

test("Test Case on Handling Excel", async()=>
{
    function readExcel(fpath : string, sname : string)
    {
        const wb = myExcel.readFile(fpath);
        const ws : any = wb.Sheets[sname];
        const edata = myExcel.utils.sheet_to_json(ws , {header : 1})
        return edata;
    }

    const empinfo : any = readExcel("./ReadMyExcel/EmployeeData.xlsx", "Summer")

    console.log("The Number of Employees in the given sheet : " +empinfo.length)

    for(let h = 1 ; h < empinfo.length ; h++)
    {
        console.log(empinfo[h][0])
    }
    


})