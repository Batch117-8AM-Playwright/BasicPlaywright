import {test, expect} from '@playwright/test'

test.beforeAll("Before All", async()=>
{
    console.log("Hai I am Before All Pre Condition")
})

test.afterEach("After Each", async()=>
{
    console.log("Hai I am After Each Post Condition")
})

test("Test Case 1 ", async()=>
{
    console.log("Hai I am Test Case1")
})

test.afterAll("After All", async()=>
{
    console.log("Hai I am After All Post Condition")
})

test("Test Case 2 ", async()=>
{
    console.log("Hai I am Test Case2")
})

test.beforeEach("Before Each", async()=>
{
    console.log("Hai I am Before Each Pre Condition")
})