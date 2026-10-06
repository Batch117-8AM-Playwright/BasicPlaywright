import {test, expect} from '@playwright/test'
import myjson from 'fs'


test("Test Case on Reading Json File", async()=>
{
    const myinfo = JSON.parse(myjson.readFileSync('./ReadJson/Empread.json', 'utf-8'))

    console.log(myinfo.who)



})