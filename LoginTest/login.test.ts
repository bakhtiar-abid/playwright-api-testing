import { expect, test } from "@playwright/test";


let token:number;
//Creating an api request
 test("Login with invalid username", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/auth/login`,{
        data:{
            username:"mor_23145",
            password:"83r5^_"
        },
        

    });
    expect(_response.status()).toBe(401);
    expect(_response.ok()).toBeFalsy();
  
    // Extracting HTML response content
    const htmlContent = await _response.text();
    console.log(htmlContent);
  
    // You can now check the HTML content or perform other assertions on it
  
    // For example, to check if the response contains the error message:
    expect(htmlContent).toContain("username or password is incorrect");
    

    
 })

 test("Login with invalid password", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/auth/login`,{
        data:{
            username:"mor_2314",
            password:"83r5^_fa"
        },
    });
    expect(_response.status()).toBe(401);
    expect(_response.ok()).toBeFalsy();
    // Extracting HTML response content
    const htmlContent = await _response.text();
    console.log(htmlContent);
    // You can now check the HTML content or perform other assertions on it
    // For example, to check if the response contains the error message:
    expect(htmlContent).toContain("username or password is incorrect");
 })


 test("Login without giving username", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/auth/login`,{
        data:{
            username:"",
            password:"83r5^_"
        },
        

    });
    expect(_response.status()).toBe(400);
    expect(_response.ok()).toBeFalsy();
  
    // Extracting HTML response content
    const htmlContent = await _response.text();
    console.log(htmlContent);
  
    // You can now check the HTML content or perform other assertions on it
  
    // For example, to check if the response contains the error message:
    expect(htmlContent).toContain("username and password are not provided in JSON format");
    

    
 })


 test("Login without giving password", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/auth/login`,{
        data:{
            username:"mor_2314",
            password:""
        },
        

    });
    expect(_response.status()).toBe(400);
    expect(_response.ok()).toBeFalsy();
  
    // Extracting HTML response content
    const htmlContent = await _response.text();
    console.log(htmlContent);
  
    // You can now check the HTML content or perform other assertions on it
  
    // For example, to check if the response contains the error message:
    expect(htmlContent).toContain("username and password are not provided in JSON format");
    

    
 })


 test("Login without giving username and password", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/auth/login`,{
        data:{
            username:"",
            password:""
        },
        // headers:{
        //     "Accept":"application/xml"
        // }
        

    });
    expect(_response.status()).toBe(400);
    expect(_response.ok()).toBeFalsy();
  
    // Extracting HTML response content
    const htmlContent = await _response.text();
    console.log(htmlContent);
  
    // You can now check the HTML content or perform other assertions on it
  
    // For example, to check if the response contains the error message:
    expect(htmlContent).toContain("username and password are not provided in JSON format");

    // console.log((await (_response.body())).toString());
    
    

    
 })


 test("Login with valid credentials", async ({request, baseURL})=>{

    const _response =  await request.post(`${baseURL}/auth/login`,{
          data:{
              username:"mor_2314",
              password:"83r5^_"
          },
          
  
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
    
      // Extracting HTML response content
      const result = await _response.json();
      token = result.token;
      console.log(token);
   })