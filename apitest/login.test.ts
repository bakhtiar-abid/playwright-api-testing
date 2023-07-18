import { expect, test } from "@playwright/test";


//Creating an api request
 test("Login with valid user credentials", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/auth/login`,{
        data:{
            username:"mor_2314",
            password:"83r5^_"
        }

    });
    expect(_response.status());
    expect(_response.ok()).toBeTruthy();
 })