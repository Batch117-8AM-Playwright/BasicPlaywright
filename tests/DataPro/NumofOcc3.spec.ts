import{test} from '@playwright/test'

test("Count Number of Occurence", async()=>
{
    let city : string = "Hyderabad is Captial of Telangana"

    //char --> Count

    let charCount : {[key : string] : number} = {};

    let S : string = "";

    for(let C of city.toLowerCase())
    {
        if(C === " ")
        {
            continue;
        }
        
        charCount[C] = (charCount[C] || 0) +1;    //with H as 1

    }

    console.log(charCount)







})