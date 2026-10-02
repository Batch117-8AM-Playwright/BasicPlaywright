import{test} from '@playwright/test'

test("Count Number of Occurence", async()=>
{
    let city : string = "Hyderabad is Captial of Telangana"

    //char --> Count

    

    let A : string[] = city.split(" ")
   // console.log(A[4])


    //console.log(A[4].length)

    for(let t : number = A[4].length - 1 ; t >= 0 ; t--)
    {
        console.log(A[4][t])
    }










})