import * as readline from "readline";
import {test , expect} from '@playwright/test'


test("Testing Data", async()=>
{
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {

    rl.question("Enter your age: ", (age) => {

        console.log("Name:", name);
        console.log("Age:", Number(age));

        rl.close();
    });
});
})

