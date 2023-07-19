import { expect, test } from "@playwright/test";


let productID:number;

//get all carts

test("Add a new product", async ({request, baseURL})=>{

    const _response =  await request.post(`${baseURL}/products`,{
        data: {
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic'
      }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
      productID = results.id
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual([
        "id",
          "title",
          "price",
          "description",
          "image",
          "category",
         
         
      ]);
   })

   test("Update a product", async ({request, baseURL})=>{

    const _response =  await request.put(`${baseURL}/products/7`,{
        data:  
         {
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic'
      }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
   
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual([
        "id",
          "title",
          "price",
          "description",
          "image",
          "category",
         
      ]);
   })

   test("Delete a product", async ({request, baseURL})=>{

    const _response =  await request.delete(`${baseURL}/products/7`,{
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());
 
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual([
        "id",
        "title",
        "price",
        "description",
        "category",
        "image",
        "rating",
      ]);
   })

   test("Get a single product", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/products/1`,{
        
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());


      console.log(results);
      
      
      expect(Object.keys(JSON.parse(await _response.text()))).toEqual(
        [
          "id",
          "title",
          "price",
          "description",
          "category",
          "image",
          "rating"
      ]);

    console.log((Object.keys(JSON.parse(await _response.text()))));
    
   })


 test("Get all produtcs", async ({request, baseURL})=>{

  const _response =  await request.get(`${baseURL}/products`,{

    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(Object.keys((JSON.parse(await _response.text())[0]))).toEqual(
    [
      'id',
      'title',
      'price',
      'description',
      'category',
      'image',
      'rating'
    ]
  );
  console.log(Object.keys((JSON.parse(await _response.text())[0])))
  
 })


 test("Limit results", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/products`,{
        params: {
            limit:5
            
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const result = await _response.json();
      console.log(result);
      
      expect(Object.keys(result).length).toBe(5);

      
   })


   test("Get sort results", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/products`,{
        params: {
            sort:"desc"
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      const results = (await _response.json());


      console.log(results);

    expect(Object.keys((JSON.parse(await _response.text())[0]))).toEqual(
      [
        "id",
    "title",
    "price",
    "description",
    "category",
    "image",
    "rating"
]
    );
    
   })


   
 test("Get products in a specific category", async ({request, baseURL})=>{

  const _response =  await request.get(`${baseURL}/products/category/jewelery`,{
    
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    const result = await _response.json();
    expect(Object.keys((JSON.parse(await _response.text())[0]))).toEqual(
  [
      "id",
      "title",
      "price",
      "description",
      "category",
      "image",
      "rating"
  ]
  );

    
 })

