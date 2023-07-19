import { expect, test } from "@playwright/test";


let userID:number;

//get all carts

test("Add to cart", async ({request, baseURL})=>{

    const _response =  await request.post(`${baseURL}/carts`,{
        data:  {
            userId:5,
            date:"2020-09-20",
            products:[{productId:5,quantity:1},{productId:1,quantity:5}]
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
      userID = results.userId
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual([
        "id",
        "userId",
        "date",
        "products",
      ]);
   })

   test("Update a product", async ({request, baseURL})=>{

    const _response =  await request.patch(`${baseURL}/carts/7`,{
        data:  {
            userId:5,
            date:"2020-09-20",
            products:[{productId:5,quantity:1},{productId:1,quantity:5}]
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
      userID = results.userId
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual([
        "id",
        "userId",
        "date",
        "products",
      ]);
   })

   test("Delete a product", async ({request, baseURL})=>{

    const _response =  await request.delete(`${baseURL}/carts/7`,{
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
      userID = results.userId
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual([
        "id",
        "userId",
        "date",
        "products",
        '__v'
      ]);
   })

   test("Get a single product", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/carts/7`,{
        
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
      userID = results.userId

      console.log(results);
      
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual(
        [
        "id",
        "userId",
        "date",
        "products",
        '__v'
      ]);

    console.log((Object.keys(JSON.parse(await _response.text()))));
    
   })


 test("Get all cart items", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/carts`,{

    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    
 })


 test("Limit results", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/carts`,{
        params: {
            limit:5
            
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const result = await _response.json();
      console.log(result);
      
      expect(await Object.keys(result).length).toBe(5);

      
   })


   test("Get sort results", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/carts`,{
        params: {
            sort:"desc"
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
      userID = results.userId

      console.log(results);

    expect(Object.keys((JSON.parse(await _response.text())[0]))).toEqual(
        [
            "id",
        "userId",
        "date",
        "products",
        '__v'
    ]
    );
    
   })

   test("Get in date range", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/carts`,{
        params: {
            startdate:"2019-12-10",
            enddate:"2020-10-10"
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
    

      console.log(results);

    expect(Object.keys((JSON.parse(await _response.text())[0]))).toEqual(
        [
            "id",
        "userId",
        "date",
        "products",
        '__v'
    ]
    );
    
   })